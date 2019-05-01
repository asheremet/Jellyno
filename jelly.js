(function() {
	var CELL_SIZE, Jelly, JellyCell, Stage, Wall, directions, i, level, levels, moveToCell, option, stage,
		style_colors, _i, _ref,
		__indexOf = [].indexOf || function (item) {
			for (var i = 0, l = this.length; i < l; i++) {
				if (i in this && this[i] === item) return i;
			}
			return -1;
		};

	levels = Levels.getAll();
	Levels.getPassedLevels();

	CELL_SIZE = 48;

	moveToCell = function (dom, x, y) {
		dom.style.left = x * CELL_SIZE + 'px';
		return dom.style.top = y * CELL_SIZE + 'px';
	};

	directions = {
		'left': {
			x: -1,
			y: 0
		},
		'right': {
			x: 1,
			y: 0
		},
		'up': {
			x: 0,
			y: -1
		},
		'down': {
			x: 0,
			y: 1
		}
	};

	style_colors = {
		'black': 'hsl(0,     0%,  0%)',
		'red': 'hsl(0,   100%, 75%)',
		'green': 'hsl(120, 100%, 45%)',
		'blue': 'hsl(216, 100%, 70%)',
		'yellow': 'hsl(60,  100%, 50%)'
	};

	Stage = (function () {
		function Stage(dom, levelOrMap) {
			var map;
			if(typeof levelOrMap == "number"){
				if(levelOrMap == levels.length)
					levelOrMap = 0;
				level = levelOrMap;
				var map = levels[levelOrMap];
				localStorage.setItem('lastlevel', levelOrMap);
			}
			else
				map = levelOrMap;

			var anchors, event, growers, maybeSwallowEvent, _i, _len, _ref,
				_this = this;
			this.dom = dom;
			this.jellies = [];
			this.history = [];
			this.anchored_cells = [];
			this.growers = [];
			this.delayed_anchors = [];
			if (map[0] instanceof Array) {
				growers = map[2];
				anchors = map[1];
				map = map[0];
			}
			this.num_monochromatic_blocks = 0;
			this.num_colors = 0;
			this.loadMap(map);
			if (anchors) {
				this.placeAnchors(anchors, growers);
			}
			if (growers) {
				this.placeGrowers(growers);
			}
			this.current_cell = null;
			this.busy = false;
			maybeSwallowEvent = function (e) {
				e.preventDefault();
				if (_this.busy) {
					return e.stopPropagation();
				}
			};
			_ref = ['contextmenu', 'click', 'touchstart', 'touchmove'];
			for (_i = 0, _len = _ref.length; _i < _len; _i++) {
				event = _ref[_i];
				this.dom.addEventListener(event, maybeSwallowEvent, true);
			}
			document.addEventListener('keydown', function (e) {
				if (_this.busy) {
					return;
				}
				switch (e.keyCode) {
					case 37:
						return _this.trySlide(_this.current_cell, -1);
					case 39:
						return _this.trySlide(_this.current_cell, 1);
				}
			});
			this.checkForMerges();
		}

		Stage.prototype.loadMap = function (map) {
			var cell, classname, color, colors, jelly, row, table, td, tr, x, y;
			table = document.createElement('table');
			this.dom.appendChild(table);
			colors = {};
			this.cells = (function () {
				var _i, _ref, _results;
				_results = [];
				for (y = _i = 0, _ref = map.length; 0 <= _ref ? _i < _ref : _i > _ref; y = 0 <= _ref ? ++_i : --_i) {
					row = map[y].split(/(?:)/);
					tr = document.createElement('tr');
					table.appendChild(tr);
					_results.push((function () {
						var _j, _ref1, _results1;
						_results1 = [];
						for (x = _j = 0, _ref1 = row.length; 0 <= _ref1 ? _j < _ref1 : _j > _ref1; x = 0 <= _ref1 ? ++_j : --_j) {
							color = null;
							classname = 'transparent';
							cell = null;
							td = document.createElement('td');
							switch (row[x]) {
								case 'x':
									classname = 'cell wall';
									cell = new Wall(td);
									break;
								case 'r':
									color = 'red';
									break;
								case 'g':
									color = 'green';
									break;
								case 'b':
									color = 'blue';
									break;
								case 'y':
									color = 'yellow';
									break;
								case '0':
								case '1':
								case '2':
								case '3':
								case '4':
								case '5':
								case '6':
								case '7':
								case '8':
								case '9':
									color = 'black' + row[x];
							}
							td.className = classname;
							tr.appendChild(td);
							if (color) {
								cell = new JellyCell(color);
								jelly = new Jelly(this, cell, x, y);
								this.dom.appendChild(jelly.dom);
								this.jellies.push(jelly);
								this.num_monochromatic_blocks += 1;
								if (!(color in colors)) {
									this.num_colors += 1;
								}
								colors[color] = 1;
							}
							_results1.push(cell);
						}
						return _results1;
					}).call(this));
				}
				return _results;
			}).call(this);
			return this.addBorders();
		};

		Stage.prototype.placeAnchors = function (anchors, growers) {
			var anchor, arrow, arrow_color, classname, dx, dy, grower, jelly, me, other, property, style, _i, _j, _len, _len1;
			style = {
				'left': ['leftarrow', 'borderRightColor'],
				'right': ['rightarrow', 'borderLeftColor'],
				'up': ['uparrow', 'borderBottomColor'],
				'down': ['downarrow', 'borderTopColor']
			};
			for (_i = 0, _len = anchors.length; _i < _len; _i++) {
				anchor = anchors[_i];
				dx = directions[anchor.dir].x;
				dy = directions[anchor.dir].y;
				classname = style[anchor.dir][0];
				property = style[anchor.dir][1];
				me = this.cells[anchor.y][anchor.x];
				other = this.cells[anchor.y + dy][anchor.x + dx];
				arrow_color = 'black';
				if ((me === null) || anchor.delayed) {
					this.delayed_anchors.push([anchor, other]);
					for (_j = 0, _len1 = growers.length; _j < _len1; _j++) {
						grower = growers[_j];
						if ((grower.x === anchor.x + dx) && (grower.y === anchor.y + dy)) {
							arrow_color = grower.color;
							break;
						}
					}
				} else {
					this.anchored_cells.push([me, anchor.dir]);
					arrow_color = me.color;
					me.mergeWith(other, anchor.dir);
				}
				arrow = document.createElement('div');
				arrow.style[property] = style_colors[arrow_color];
				arrow.className = classname;
				this.addElement(arrow, other);
			}
			this.jellies = (function () {
				var _k, _len2, _ref, _results;
				_ref = this.jellies;
				_results = [];
				for (_k = 0, _len2 = _ref.length; _k < _len2; _k++) {
					jelly = _ref[_k];
					if (jelly.cells) {
						_results.push(jelly);
					}
				}
				return _results;
			}).call(this);
		};

		Stage.prototype.placeGrowers = function (growers) {
			var classname, grower, grower_div, me, property, style, _i, _len;
			style = {
				'left': ['leftgrower', 'borderLeftColor'],
				'right': ['rightgrower', 'borderRightColor'],
				'up': ['upgrower', 'borderTopColor']
			};
			for (_i = 0, _len = growers.length; _i < _len; _i++) {
				grower = growers[_i];
				classname = style[grower.dir][0];
				property = style[grower.dir][1];
				me = this.cells[grower.y][grower.x];
				grower_div = document.createElement('div');
				grower_div.style[property] = style_colors[grower.color];
				grower_div.className = classname;
				this.addElement(grower_div, me);
				this.growers.push([me, grower, grower_div]);
				this.num_monochromatic_blocks += 1;
			}
		};

		Stage.prototype.addElement = function (element, cell) {
			var div_container;
			if (cell.dom.firstChild) {
				cell.dom.firstChild.appendChild(element);
			} else {
				div_container = document.createElement('div');
				div_container.style.position = 'relative';
				div_container.style.height = '100%';
				div_container.style.width = '100%';
				div_container.appendChild(element);
				cell.dom.appendChild(div_container);
			}
		};

		Stage.prototype.addBorders = function () {
			var attr, border, cell, dx, dy, edges, other, x, y, _i, _j, _k, _len, _ref, _ref1, _ref2, _ref3, _ref4;
			for (y = _i = 0, _ref = this.cells.length; 0 <= _ref ? _i < _ref : _i > _ref; y = 0 <= _ref ? ++_i : --_i) {
				for (x = _j = 0, _ref1 = this.cells[0].length; 0 <= _ref1 ? _j < _ref1 : _j > _ref1; x = 0 <= _ref1 ? ++_j : --_j) {
					cell = this.cells[y][x];
					if (!(cell instanceof Wall)) {
						continue;
					}
					border = 'solid 1px #777';
					edges = [['borderBottom', 0, 1], ['borderTop', 0, -1], ['borderLeft', -1, 0], ['borderRight', 1, 0]];
					for (_k = 0, _len = edges.length; _k < _len; _k++) {
						_ref2 = edges[_k], attr = _ref2[0], dx = _ref2[1], dy = _ref2[2];
						if (!((0 <= (_ref3 = y + dy) && _ref3 < this.cells.length))) {
							continue;
						}
						if (!((0 <= (_ref4 = x + dx) && _ref4 < this.cells[0].length))) {
							continue;
						}
						other = this.cells[y + dy][x + dx];
						if (!(other instanceof Wall)) {
							cell.dom.style[attr] = border;
						}
					}
				}
			}
		};

		Stage.prototype.waitForAnimation = function (cb) {
			var end, name, names, _i, _len,
				_this = this;
			names = ['transitionend', 'webkitTransitionEnd'];
			end = function () {
				var name, _i, _len;
				for (_i = 0, _len = names.length; _i < _len; _i++) {
					name = names[_i];
					_this.dom.removeEventListener(name, end);
				}
				return setTimeout(cb, 0);
			};
			for (_i = 0, _len = names.length; _i < _len; _i++) {
				name = names[_i];
				this.dom.addEventListener(name, end);
			}
		};

		Stage.prototype.trySlide = function (jelly, dir) {
			var jellies,
				_this = this;
			if (!jelly) {
				return;
			}
			jellies = [jelly];
			if (this.checkFilled(jellies, dir, 0)) {
				return;
			}
			this.busy = true;
			this.saveForUndo();
			this.move(jellies, dir, 0);
			return this.waitForAnimation(function () {
				return _this.checkFall(function () {
					_this.checkForMerges();
					return _this.checkForGrows();
				});
			});
		};

		Stage.prototype.move = function (jellies, dx, dy) {
			var cell, jelly, x, y, _i, _j, _k, _l, _len, _len1, _len2, _len3, _len4, _m, _ref, _ref1, _ref2, _ref3;
			for (_i = 0, _len = jellies.length; _i < _len; _i++) {
				jelly = jellies[_i];
				_ref = jelly.cellCoords();
				for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
					_ref1 = _ref[_j], x = _ref1[0], y = _ref1[1], cell = _ref1[2];
					this.cells[y][x] = null;
				}
			}
			for (_k = 0, _len2 = jellies.length; _k < _len2; _k++) {
				jelly = jellies[_k];
				jelly.updatePosition(jelly.x + dx, jelly.y + dy);
			}
			for (_l = 0, _len3 = jellies.length; _l < _len3; _l++) {
				jelly = jellies[_l];
				_ref2 = jelly.cellCoords();
				for (_m = 0, _len4 = _ref2.length; _m < _len4; _m++) {
					_ref3 = _ref2[_m], x = _ref3[0], y = _ref3[1], cell = _ref3[2];
					this.cells[y][x] = cell;
				}
			}
		};

		Stage.prototype.checkFilled = function (jellies, dx, dy) {
			var cell, done, jelly, next, x, y, _i, _j, _len, _len1, _ref, _ref1, _ref2;
			done = false;
			while (!done) {
				done = true;
				for (_i = 0, _len = jellies.length; _i < _len; _i++) {
					jelly = jellies[_i];
					if (jelly.immovable) {
						return true;
					}
					_ref = jelly.cellCoords();
					for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
						_ref1 = _ref[_j], x = _ref1[0], y = _ref1[1], cell = _ref1[2];
						next = this.cells[y + dy][x + dx];
						if (!next) {
							continue;
						}
						if (!next.jelly) {
							return true;
						}
						if (_ref2 = next.jelly, __indexOf.call(jellies, _ref2) >= 0) {
							continue;
						}
						jellies.push(next.jelly);
						done = false;
						break;
					}
				}
			}
			return false;
		};

		Stage.prototype.checkFall = function (cb) {
			var jelly, jellyset, moved, try_again, _i, _len, _ref;
			moved = false;
			try_again = true;
			while (try_again) {
				try_again = false;
				_ref = this.jellies;
				for (_i = 0, _len = _ref.length; _i < _len; _i++) {
					jelly = _ref[_i];
					jellyset = [jelly];
					if (!this.checkFilled(jellyset, 0, 1)) {
						this.move(jellyset, 0, 1);
						try_again = true;
						moved = true;
					}
				}
			}
			if (moved) {
				this.waitForAnimation(cb);
			} else {
				cb();
			}
		};

		Stage.prototype.checkForMerges = function () {
			var merged;
			merged = false;
			while (this.doOneMerge()) {
				merged = true;
			}
			if (merged) {
				this.checkForCompletion();
			}
		};

		Stage.prototype.checkForCompletion = function () {
			if (this.num_monochromatic_blocks <= this.num_colors) {
				const right = (getComputedStyle(document.getElementById('stage')).width.replace('px','') - 317/*message width*/)/2;
				const message = document.getElementById('completed');
				message.style.right = `${right}px`;
				message.style.display = 'initial';
				document.getElementById('next').style.display = 'initial';
				Levels.updatePassedLevels(level);
				// const passedLevels = JSON.parse(localStorage.getItem('passedLevels')) || [];

				// var skippedLevels = JSON.parse(localStorage.getItem('skippedLevels')) || [];
				// var skippedIndex = skippedLevels.indexOf(level)
				// if(skippedIndex > -1){
				// 	skippedLevels.splice(skippedIndex, 1);
				// 	localStorage.setItem('skippedLevels', JSON.stringify(skippedLevels.sort()));
				// }
			}
		};

		Stage.prototype.checkForGrows = function () {
			var _this = this;
			if (this.doOneGrow()) {
				setTimeout(function () {
					return _this.checkForGrows();
				}, 200);
			} else {
				this.busy = false;
			}
		};

		Stage.prototype.doOneGrow = function () {
			var activator, cell, dx, dy, grower, grower_div, i, jellies, jelly, new_cell, new_x, new_y, _i, _len, _ref, _ref1;
			_ref = this.growers;
			for (_i = 0, _len = _ref.length; _i < _len; _i++) {
				_ref1 = _ref[_i], cell = _ref1[0], grower = _ref1[1], grower_div = _ref1[2];
				i = i + 1 || 0;
				dx = directions[grower.dir].x;
				dy = directions[grower.dir].y;
				if (cell instanceof Wall) {
					new_y = grower.y + dy;
					new_x = grower.x + dx;
				} else {
					new_y = cell.y + cell.jelly.y + dy;
					new_x = cell.x + cell.jelly.x + dx;
				}
				activator = this.cells[new_y][new_x];
				if (!(activator instanceof JellyCell)) {
					continue;
				}
				if (activator.color !== grower.color) {
					continue;
				}
				jellies = [activator.jelly];
				if (this.checkFilled(jellies, dx, dy)) {
					if (cell instanceof Wall) {
						continue;
					}
					dx = -dx;
					dy = -dy;
					jellies = [activator.jelly];
					if (this.checkFilled(jellies, dx, dy)) {
						continue;
					}
					jellies.splice(0, 1);
					new_x += dx;
					new_y += dy;
				}
				this.move(jellies, dx, dy);
				new_cell = new JellyCell(grower.color);
				jelly = new Jelly(this, new_cell, new_x, new_y);
				this.cells[new_y][new_x] = new_cell;
				this.dom.appendChild(jelly.dom);
				this.jellies.push(jelly);
				this.growers.splice(i, 1);
				cell.dom.firstChild.removeChild(grower_div);
				this.checkGrownAnchored(new_cell);
				this.jellies = (function () {
					var _j, _len1, _ref2, _results;
					_ref2 = this.jellies;
					_results = [];
					for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
						jelly = _ref2[_j];
						if (jelly.cells) {
							_results.push(jelly);
						}
					}
					return _results;
				}).call(this);
				this.checkForMerges();
				return true;
			}
			return false;
		};

		Stage.prototype.checkGrownAnchored = function (cell) {
			var anchor, check_x, check_y, i, other, _i, _len, _ref, _ref1;
			_ref = this.delayed_anchors;
			for (_i = 0, _len = _ref.length; _i < _len; _i++) {
				_ref1 = _ref[_i], anchor = _ref1[0], other = _ref1[1];
				i = i + 1 || 0;
				if (other instanceof Wall) {
					check_x = anchor.x;
					check_y = anchor.y;
				} else {
					check_x = other.x + other.jelly.x - directions[anchor.dir].x;
					check_y = other.y + other.jelly.y - directions[anchor.dir].y;
				}
				if ((check_x === cell.x + cell.jelly.x) && (check_y === cell.y + cell.jelly.y)) {
					cell.mergeWith(other, anchor.dir);
					this.delayed_anchors.splice(i, 1);
					this.anchored_cells.push([cell, anchor.dir]);
					break;
				}
			}
		};

		Stage.prototype.doOneMerge = function () {
			var cell, dir, dx, dy, jelly, other, x, y, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2, _ref3, _ref4;
			_ref = this.jellies;
			for (_i = 0, _len = _ref.length; _i < _len; _i++) {
				jelly = _ref[_i];
				_ref1 = jelly.cellCoords();
				for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
					_ref2 = _ref1[_j], x = _ref2[0], y = _ref2[1], cell = _ref2[2];
					_ref3 = [[1, 0, 'right'], [0, 1, 'down']];
					for (_k = 0, _len2 = _ref3.length; _k < _len2; _k++) {
						_ref4 = _ref3[_k], dx = _ref4[0], dy = _ref4[1], dir = _ref4[2];
						other = this.cells[y + dy][x + dx];
						if (!(other && other instanceof JellyCell)) {
							continue;
						}
						if (cell['merged' + dir]) {
							continue;
						}
						if (other.color !== cell.color) {
							continue;
						}
						if (jelly !== other.jelly) {
							this.jellies = this.jellies.filter(function (j) {
								return j !== other.jelly;
							});
						}
						if (cell.color_master !== other.color_master) {
							this.num_monochromatic_blocks -= 1;
						}
						cell.mergeWith(other, dir);
						cell['merged' + dir] = true;
						return true;
					}
				}
			}
			return false;
		};

		Stage.prototype.saveForUndo = function () {
			var anchors, growers, map;
			map = this.saveForUndoMap();
			anchors = this.saveForUndoAnchors();
			growers = this.saveForUndoGrowers();
			this.history.push([map, anchors, growers]);
		};

		Stage.prototype.saveForUndoMap = function () {
			var cell, map, row, x, y, _i, _j, _ref, _ref1;
			map = [];
			for (y = _i = 0, _ref = this.cells.length; 0 <= _ref ? _i < _ref : _i > _ref; y = 0 <= _ref ? ++_i : --_i) {
				row = "";
				for (x = _j = 0, _ref1 = this.cells[0].length; 0 <= _ref1 ? _j < _ref1 : _j > _ref1; x = 0 <= _ref1 ? ++_j : --_j) {
					cell = this.cells[y][x];
					if (cell instanceof Wall) {
						row += "x";
					}
					if (cell === null) {
						row += " ";
					}
					if (cell instanceof JellyCell) {
						switch (cell.color) {
							case "red":
								row += "r";
								break;
							case "green":
								row += "g";
								break;
							case "blue":
								row += "b";
								break;
							case "yellow":
								row += "y";
								break;
							case "black0":
							case "black1":
							case "black2":
							case "black3":
							case "black4":
							case "black5":
							case "black6":
							case "black7":
							case "black8":
							case "black9":
								row += cell.color.slice(5);
						}
					}
				}
				map.push(row);
			}
			return map;
		};

		Stage.prototype.saveForUndoAnchors = function () {
			var anchor, anchored_cell, anchors, direction, new_anchor, other, _i, _j, _len, _len1, _ref, _ref1, _ref2, _ref3;
			anchors = [];
			_ref = this.anchored_cells;
			for (_i = 0, _len = _ref.length; _i < _len; _i++) {
				_ref1 = _ref[_i], anchored_cell = _ref1[0], direction = _ref1[1];
				anchor = {
					'x': anchored_cell.x + anchored_cell.jelly.x,
					'y': anchored_cell.y + anchored_cell.jelly.y,
					'dir': direction
				};
				anchors.push(anchor);
			}
			_ref2 = this.delayed_anchors;
			for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
				_ref3 = _ref2[_j], anchor = _ref3[0], other = _ref3[1];
				new_anchor = anchor;
				if (!(other instanceof Wall)) {
					new_anchor = {
						'x': other.x + other.jelly.x - directions[anchor.dir].x,
						'y': other.y + other.jelly.y - directions[anchor.dir].y,
						'dir': anchor.dir
					};
				}
				new_anchor.delayed = true;
				anchors.push(new_anchor);
			}
			return anchors;
		};

		Stage.prototype.saveForUndoGrowers = function () {
			var cell, grower, grower_div, growers, new_grower, new_x, new_y, _i, _len, _ref, _ref1;
			growers = [];
			_ref = this.growers;
			for (_i = 0, _len = _ref.length; _i < _len; _i++) {
				_ref1 = _ref[_i], cell = _ref1[0], grower = _ref1[1], grower_div = _ref1[2];
				new_y = grower.y;
				new_x = grower.x;
				if (!(cell instanceof Wall)) {
					new_y = cell.y + cell.jelly.y;
					new_x = cell.x + cell.jelly.x;
				}
				new_grower = {
					'x': new_x,
					'y': new_y,
					'dir': grower.dir,
					'color': grower.color
				};
				growers.push(new_grower);
			}
			return growers;
		};

		return Stage;

	})();

	Wall = (function () {
		function Wall(dom) {
			this.dom = dom;
		}

		return Wall;

	})();

	JellyCell = (function () {
		function drawFace(domEl){
			function add(name, text) {
				var el = document.createElement('span');
				el.className = name;
				domEl.appendChild(el);
			}
			add('left-eye','.');
			add('right-eye','.');
			add('mouth','_');
		}

		function JellyCell(color) {
			this.color = color;
			this.dom = document.createElement('div');
			this.dom.className = 'cell jelly ' + color;
			this.x = 0;
			this.y = 0;
			this.color_master = this;
			this.color_mates = [this];

			drawFace(this.dom);
		}

		JellyCell.prototype.mergeWith = function (other, dir) {
			var borders, cell, other_master, _i, _len, _ref;
			borders = {
				'left': ['borderLeft', 'borderRight'],
				'right': ['borderRight', 'borderLeft'],
				'up': ['borderTop', 'borderBottom'],
				'down': ['borderBottom', 'borderTop']
			};
			this.dom.style[borders[dir][0]] = this.color.indexOf('black')==0?'none':'dotted 1px #c3c3c3';
			other.dom.style[borders[dir][1]] = 'none';
			if (other instanceof Wall) {
				this.jelly.immovable = true;
			}
			if (other instanceof JellyCell && this.color === other.color && this.color_master !== other.color_master) {
				other_master = other.color_master;
				_ref = other_master.color_mates;
				for (_i = 0, _len = _ref.length; _i < _len; _i++) {
					cell = _ref[_i];
					cell.color_master = this.color_master;
				}
				this.color_master.color_mates = this.color_master.color_mates.concat(other_master.color_mates);
			}
			if (other instanceof JellyCell && this.jelly !== other.jelly) {
				return this.jelly.merge(other.jelly);
			}
		};

		return JellyCell;

	})();

	Jelly = (function () {
		function Jelly(stage, cell, x, y) {
			var _this = this;
			this.x = x;
			this.y = y;
			this.dom = document.createElement('div');
			this.updatePosition(this.x, this.y);
			this.dom.className = 'cell jellybox';
			cell.jelly = this;
			this.cells = [cell];
			this.dom.appendChild(cell.dom);
			this.dom.addEventListener('contextmenu', function (e) {
				return stage.trySlide(_this, 1);
			});
			this.dom.addEventListener('click', function (e) {
				return stage.trySlide(_this, -1);
			});
			this.dom.addEventListener('touchstart', function (e) {
				return _this.start = e.touches[0].pageX;
			});
			this.dom.addEventListener('touchmove', function (e) {
				var dx;
				dx = e.touches[0].pageX - _this.start;
				if (Math.abs(dx) > 10) {
					dx = Math.max(Math.min(dx, 1), -1);
					return stage.trySlide(_this, dx);
				}
			});
			this.dom.addEventListener('mouseover', function (e) {
				return stage.current_cell = _this;
			});
			this.immovable = false;
		}

		Jelly.prototype.cellCoords = function () {
			var cell, _i, _len, _ref, _results;
			_ref = this.cells;
			_results = [];
			for (_i = 0, _len = _ref.length; _i < _len; _i++) {
				cell = _ref[_i];
				_results.push([this.x + cell.x, this.y + cell.y, cell]);
			}
			return _results;
		};

		Jelly.prototype.updatePosition = function (x, y) {
			this.x = x;
			this.y = y;
			return moveToCell(this.dom, this.x, this.y);
		};

		Jelly.prototype.merge = function (other) {
			var cell, dx, dy, _i, _len, _ref;
			dx = other.x - this.x;
			dy = other.y - this.y;
			_ref = other.cells;
			for (_i = 0, _len = _ref.length; _i < _len; _i++) {
				cell = _ref[_i];
				this.cells.push(cell);
				cell.x += dx;
				cell.y += dy;
				cell.jelly = this;
				moveToCell(cell.dom, cell.x, cell.y);
				this.dom.appendChild(cell.dom);
			}
			if (other.immovable) {
				this.immovable = true;
			}
			other.cells = null;
			other.dom.parentNode.removeChild(other.dom);
		};

		return Jelly;

	})();

	var currentLevel = document.querySelector('#currentLevel>span');
	setCurrentLevel(parseInt(localStorage.getItem('lastlevel'), 10) || 0);

	stage = new Stage(document.getElementById('map'), level);

	window.stage = stage;

	function addLevelLI(val) {
		const isPassed = Levels.getPassedLevels()[val-1];
		const li = document.createElement('li');
		li.setAttribute('id', `level${val}`);
		li.innerHTML = `Level ${val}${isPassed ? ' &checkmark;' : ''}`;
		li.addEventListener('click', () => {
			setCurrentLevel(val-1);
			reset();
		});
		const ul = document.getElementById('levels');
		ul.appendChild(li);
	}

	function setCurrentLevel(lvl) {
		level = lvl;
		Levels.current = level;
		currentLevel.innerHTML = level + 1;
		showInstructions();
	}

	document.getElementById('reset').addEventListener('click', function () {
		return reset();
	});

	document.getElementById('undo').addEventListener('click', function () {
		var history;
		if (stage.busy) {
			return;
		}
		history = stage.history;
		if (!(history[0] instanceof Array)) {
			return;
		}
		stage.dom.innerHTML = '';
		stage = new Stage(stage.dom, history.pop());
		return stage.history = history;
	});

	document.getElementById('next').addEventListener('click', next);

	document.getElementById('allLevels').addEventListener('click', function (ev) {
		ev.stopPropagation();
		const levelsMenu = document.getElementById('levels');
		levelsMenu.innerHTML = '';
		for (i = _i = 1, _ref = levels.length; 1 <= _ref ? _i <= _ref : _i >= _ref; i = 1 <= _ref ? ++_i : --_i){
			addLevelLI(i);
		}
		document.querySelector('ul.menu').style.display = 'block';
		levelsMenu.style.top = '56px';
		levelsMenu.style.display = 'block';
	});
	document.getElementById('skippedLevels').addEventListener('click', function (ev) {
		if (!this.classList.contains('disabled')) {
			ev.stopPropagation();
			const levelsMenu = document.getElementById('levels');
			levelsMenu.innerHTML = '';
			var skippedLevels = JSON.parse(localStorage.getItem('skippedLevels')) || [];
			for (let i = 0; i < skippedLevels.length; i++)
				addLevelLI(skippedLevels[i]+1);
			document.querySelector('ul.menu').style.display = 'block';
			levelsMenu.style.top = '84px';
			levelsMenu.style.display = 'block';
		}
	});
	document.querySelector("li.skip").addEventListener('click', function (evt) {
		var skippedLevels = JSON.parse(localStorage.getItem('skippedLevels')) || [];
		if (!skippedLevels.find((l) => level == l))
		skippedLevels.push(level);

		localStorage.setItem('skippedLevels', JSON.stringify(skippedLevels.sort((a, b) => {
			if (a > b) return 1;
			if (b > a) return -1;
			return 0;
		})));
		next();
	});

	document.querySelector("li.clearskipped").addEventListener('click', function (evt) {
		if (!this.classList.contains('disabled') && confirm('Are you sure you want to forget skipped levels?')) {
			localStorage.removeItem('skippedLevels');
		}
	});

	document.querySelector("li.resetgame").addEventListener('click', function (evt) {
		if (confirm('Are you sure you want to reset all passed and skipped levels?')) {
			localStorage.removeItem('lastlevel');
			localStorage.removeItem('skipReminder');
			localStorage.removeItem('skippedLevels');
			localStorage.removeItem('passedLevels');
		}
	});
		document.querySelector("#instructions .close").addEventListener('click', function (evt) {
			document.querySelector('#instructions').style.display = 'none';
			if(Levels.current === 0){
				const moreOpt = document.getElementById('moreoptionsinfo');
				moreOpt.style.display = 'initial';
				setTimeout(() => {moreOpt.style.display = 'none'}, 2000)
			}
		});

	function reset() {
		document.getElementById('completed').style.display = 'none';
		document.getElementById('next').style.display = 'none';
		stage.dom.innerHTML = '';
		return stage = new Stage(stage.dom, level);
	}

	function next() {
		setCurrentLevel(levels.length == (level + 1) ? 0 : level + 1)
		return reset();
	}
	function showInstructions(lvl) {
		const instructions = {
			1: "Jellies can only fall and do not jump",
			9: "Fixed jellies can't move",
			11: "Black blocks can also be moved",
			30: "Part of the floor is colored red.\n A new jelly will emerge if a jelly of the same color touches it"
		};
		const instruction = instructions[Levels.current + 1];
		if(instruction){
			const instDiv = document.querySelector('#instructions .text');
			instDiv.innerHTML = instruction;
			instDiv.parentElement.style.display = 'table';
		}
	}
}).call(this);

function showMenu(e) {
	var menu = document.querySelector('ul.menu');
	var submenu = document.querySelector('#levels');
	var display = menu.style.display;
	e.stopPropagation();
	if(display === 'block'){
		hide();
	}
	else {
		show();
		document.addEventListener('click', hide, {once: true})
	}
	function hide() {
		menu.style.display = 'none';
		submenu.style.display = 'none';
	}
	function show() {
		const skippedLevels = JSON.parse(localStorage.getItem('skippedLevels')) || [];
		if(skippedLevels.length){
			document.querySelectorAll("li.clearskipped, #skippedLevels").forEach((el) => {el.classList.remove('disabled')});
		}
		else{
			document.querySelectorAll("li.clearskipped, #skippedLevels").forEach((el) => {el.classList.add('disabled')});
		}
		if(typeof Levels.getById(Levels.current)[3] === 'object') {
			document.querySelector('ul.menu .solutions').classList.remove('disabled');
		}
		else {
			document.querySelector('ul.menu .solutions').classList.add('disabled');
		}

		menu.style.display = 'block';

	}
}
