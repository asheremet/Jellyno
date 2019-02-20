(function() {
	var CELL_SIZE, Jelly, JellyCell, Stage, Wall, directions, i, level, levels, moveToCell, option, stage,
		style_colors, _i, _ref,
		__indexOf = [].indexOf || function (item) {
			for (var i = 0, l = this.length; i < l; i++) {
				if (i in this && this[i] === item) return i;
			}
			return -1;
		};

	levels = [
		/*1*/["xxxxxxxxxxxxxx", "x            x", "x            x", "x      r     x", "x      xx    x", "x  g     r b x", "xxbxxxg xxxxxx", "xxxxxxxxxxxxxx"],
		/*2*/["xxxxxxxxxxxxxx", "x            x", "x            x", "x            x", "x     g   g  x", "x   r r   r  x", "xxxxx x x xxxx", "xxxxxxxxxxxxxx"],
		/*3*/["xxxxxxxxxxxxxx", "x            x", "x            x", "x   bg  x g  x", "xxx xxxrxxx  x", "x      b     x", "xxx xxxrxxxxxx", "xxxxxxxxxxxxxx"],
		/*4*/["xxxxxxxxxxxxxx", "x            x", "x       r    x", "x       b    x", "x       x    x", "x b r        x", "x b r      b x", "xxx x      xxx", "xxxxx xxxxxxxx", "xxxxxxxxxxxxxx"],
		/*5*/["xxxxxxxxxxxxxx", "x            x", "x            x", "xrg  gg      x", "xxx xxxx xx  x", "xrg          x", "xxxxx  xx   xx", "xxxxxx xx  xxx", "xxxxxxxxxxxxxx"],
		/*6*/["xxxxxxxxxxxxxx", "xxxxxxx      x", "xxxxxxx g    x", "x       xx   x", "x r   b      x", "x x xxx x g  x", "x         x bx", "x       r xxxx", "x   xxxxxxxxxx", "xxxxxxxxxxxxxx"],
		/*7*/[
			["xxxxxxxxxxxxxx", "x            x", "x          r x", "x          x x", "x     b   b  x", "x     x  rr  x", "x         x  x", "x r  bx x x  x", "x x  xx x x  x", "xxxxxxxxxxxxxx"], [
				{
					x: 2,
					y: 7,
					dir: 'down'
				}, {
					x: 5,
					y: 7,
					dir: 'down'
				}
			]
		],
		/*8*/[
			["xxxxxxxxxxxxxx", "xxxx x  x xxxx", "xxx  g  b  xxx", "xx   x  x   xx", "xx   b  g   xx", "xxg        bxx", "xxxg      bxxx", "xxxx      xxxx", "xxxxxxxxxxxxxx"], [
				{
					x: 5,
					y: 4,
					dir: 'up'
				}, {
					x: 8,
					y: 4,
					dir: 'up'
				}
			]
		],
		/*9*/[
			["xxxxxxxxxxxxxx", "x            x", "x            x", "x          rbx", "x    x     xxx", "xb        00xx", "xx  rx  x xxxx", "xxxxxxxxxxxxxx"], [
				{
					x: 4,
					y: 6,
					dir: 'down'
				}
			]
		],
		/*10*/[
			["xxxxxxxxxxxxxx", "x   gr       x", "x   00 1     x", "x    x x xxxxx", "x            x", "x  x  x      x", "x        x  rx", "xx   x     gxx", "x          xxx", "xxxxxxxxxxxxxx"], [
				{
					x: 11,
					y: 7,
					dir: 'down'
				}, {
					x: 12,
					y: 6,
					dir: 'down'
				}
			]
		],
		/*11*/[
			["xxxxxxxxxxxxxx", "x      g00g gx", "x       xxx xx", "x           gx", "x11         xx", "xxx          x", "x       g    x", "x   x xxx   gx", "x   xxxxxx xxx", "xxxxxxxxxxxxxx"], [
				{
					x: 12,
					y: 7,
					dir: 'down'
				}, {
					x: 7,
					y: 1,
					dir: 'right'
				}, {
					x: 10,
					y: 1,
					dir: 'left'
				}
			]
		],
		/*12*/[
			["xxxxxxxxxxxxxx", "xxr rr  rr rxx", "xxx  x  x  xxx", "x            x", "xb          bx", "xx          xx", "x            x", "x            x", "x   xxxxxx   x", "xxxxxxxxxxxxxx"], [
				{
					x: 12,
					y: 4,
					dir: 'down'
				}
			]
		],
		/*13*/["xxxxxxxxxxxxxx", "xxxxxxxxxxxxxx", "xxxxx gr xxxxx", "xxxxx rb xxxxx", "xxxxx gr xxxxx", "xxxxx bg xxxxx", "xxxxxxxxxxxxxx", "xxxxxxxxxxxxxx"],
		/*14*/[
			["xxxxxxxxxxxxxx", "xxxxxxxxx   rx", "xxxxxxxxx   gx", "xxxxxxxxx   gx", "x1122       gx", "x1122       gx", "x0033      xxx", "x0033      xxx", "xxr x gxxx xxx", "xxxxxxxxxxxxxx"], [
				{
					x: 2,
					y: 8,
					dir: 'down'
				}, {
					x: 6,
					y: 8,
					dir: 'down'
				}
			]
		],
		/*15*/[
			["xxxxxxxxxxxxxx", "xr r r      rx", "xg x x      gx", "xb          bx", "xxxxx     xxxx", "xxxxxx   xxxxx", "xxxxxx   xxxxx", "xxxxxx   xxxxx", "xxxxxxgggxxxxx", "xxxxxxxxxxxxxx"], [
				{
					x: 1,
					y: 3,
					dir: 'down'
				}, {
					x: 6,
					y: 8,
					dir: 'left'
				}, {
					x: 8,
					y: 8,
					dir: 'right'
				}
			]
		],
		/*16*/[
			["xxxxxxxxxxxxxx", "xx   0001233rx", "xx   0411233xx", "xx   444122xxx", "xx     xxxxxxx", "xr     xxxxxxx", "xx     xxxxxxx", "xx     xxxxxxx", "xx     xxxxxxx", "xxxxxxxxxxxxxx"], [
				{
					x: 1,
					y: 5,
					dir: 'up'
				}
			]
		],
		/*17*/[
			["xxxxxxxxxxxxxx", "xxxx000xxxgb x", "xxxx0     bg x", "xxxx0    11xxx", "xxxx000xxxxxxx", "x 222  xxxxxxx", "xxxx     xxgxx", "xxxx   g    bx", "xxxx   x     x", "xxxxxxxxxxxxxx"], [
				{
					x: 11,
					y: 6,
					dir: 'up'
				}, {
					x: 12,
					y: 7,
					dir: 'up'
				}
			]
		],
		/*18*/[
			["xxxxxxxxxxxxxx", "x            x", "xb01         x", "xb0gg     g  x", "xb023     g4bx", "xxxxx g   xxxx", "xxxxx gg  xxxx", "xxxxx ggg xxxx", "xxxxx ggggxxxx", "xxxxxxxxxxxxxx"], [
				{
					x: 12,
					y: 4,
					dir: 'down'
				}
			]
		],
		/*19*/[
			["xxxxxxxxxxxxxx", "xg0    g1gx  x", "x 3g    1 x  x", "x444    2 x  x", "xg g   ggg   x", "xxx     xxx  x", "xxx     xxx  x", "xxx     xxx  x", "xxx          x", "xxxxxxxxxxxxxx"], [
				{
					x: 1,
					y: 1,
					dir: 'right'
				}, {
					x: 3,
					y: 2,
					dir: 'left'
				}, {
					x: 1,
					y: 4,
					dir: 'up'
				}, {
					x: 3,
					y: 4,
					dir: 'up'
				}, {
					x: 8,
					y: 4,
					dir: 'up'
				}, {
					x: 7,
					y: 1,
					dir: 'right'
				}, {
					x: 9,
					y: 1,
					dir: 'left'
				}
			]
		],
		/*20*/[
			["xxxxxxxxxxxxxx", "xrrrr   rggxxx", "xxxb    xxxxxx", "xxxx       xbx", "xx           x", "xx           x", "xx     x     x", "xx x         x", "xx        x  x", "xxxxxxxxxxxxxx"], [
				{
					x: 12,
					y: 3,
					dir: 'up'
				}
			]
		],
		/*21*/[
			["xxxxxxxxxxxxxx", "x      x     x", "x      x     x", "x      x     x", "x      g     x", "x        gb  x", "xxxx     xx  x", "xxxr b     r x", "xxxx xxxxxxxxx", "xxxxxxxxxxxxxx"], [
				{
					x: 7,
					y: 4,
					dir: 'up'
				}
			], [
				{
					x: 7,
					y: 8,
					dir: 'up',
					color: 'red'
				}
			]
		],
		/*22*/[
			["xxxxxxxxxxxxxx", "x            x", "x            x", "x            x", "x            x", "x    g  bgr  x", "x x xx  xxx xx", "xbx          x", "xxxxxxxxxxxxxx", "xxxxxxxxxxxxxx"], [
				{
					x: 6,
					y: 7,
					dir: 'down'
				}
			], [
				{
					x: 6,
					y: 8,
					dir: 'up',
					color: 'red'
				}
			]
		],
		/*23*/[
			["xxxxxxxxxxxxxx", "x            x", "x            x", "x    g       x", "x    b       x", "x    x    r  x", "x        xx  x", "x b          x", "xxxx r xxx xgx", "xxxxxxxxxxxxxx"], [], [
				{
					x: 8,
					y: 8,
					dir: 'up',
					color: 'red'
				}
			]
		],
		/*24*/[
			["xxxxxxxxxxxxxx", "xg   b     xxx", "xr   g     xxx", "xy   b y   yxx", "xx   x x   xxx", "xxxx       xxx", "xxxx       xxx", "xxxxxx xxxxxxx", "xxxxxxgxxxxxxx", "xxxxxxxxxxxxxx"], [
				{
					x: 1,
					y: 3,
					dir: 'down'
				}, {
					x: 6,
					y: 8,
					dir: 'down'
				}, {
					x: 9,
					y: 6,
					dir: 'down'
				}
			], [
				{
					x: 4,
					y: 7,
					dir: 'up',
					color: 'green'
				}, {
					x: 9,
					y: 7,
					dir: 'up',
					color: 'red'
				}
			]
		],
		/*25*/[
			["xxxxxxxxxxxxxx", "xxxxxxxx  x  x", "xxxxxxxx  r  x", "xxxxxxxx     x", "xxxxx     r  x", "xx111    222 x", "x 111    222 x", "x g        x x", "xxxxxxxxxxxxxx", "xxxxxxxxxxxxxx"], [
				{
					x: 10,
					y: 2,
					dir: 'up'
				}
			], [
				{
					x: 4,
					y: 8,
					dir: 'up',
					color: 'green'
				}, {
					x: 7,
					y: 8,
					dir: 'up',
					color: 'green'
				}, {
					x: 10,
					y: 8,
					dir: 'up',
					color: 'green'
				}
			]
		],
		/*26*/[
			["xxxxxxxxxxxxxx", "xx        xxxx", "xx  r     xxxx", "xx11111111xxxx", "xx     r   xxx", "xx22222222 xxx", "xx  r      xxx", "xx33333333xxxx", "xx     r  xxxx", "xxxxxxxxxxxxxx"], [], [
				{
					x: 7,
					y: 3,
					dir: 'up',
					color: 'red'
				}, {
					x: 4,
					y: 5,
					dir: 'up',
					color: 'red'
				}, {
					x: 7,
					y: 7,
					dir: 'up',
					color: 'red'
				}, {
					x: 4,
					y: 9,
					dir: 'up',
					color: 'red'
				}
			]
		],
		/*27*/[
			["xxxxxxxxxxxxxx", "xxxxxgxyxrxxxx", "xxxxx     xxxx", "xbyg2     r  x", "xxxxx     xx x", "xxxxx11111xx x", "xxxxx11111 x x", "xxxx 11111bx x", "xxxx   b     x", "xxxxxxxxxxxxxx"], [
				{
					x: 5,
					y: 1,
					dir: 'up'
				}, {
					x: 7,
					y: 1,
					dir: 'up'
				}, {
					x: 9,
					y: 1,
					dir: 'up'
				}, {
					x: 10,
					y: 7,
					dir: 'left'
				}
			], [
				{
					x: 6,
					y: 9,
					dir: 'up',
					color: 'blue'
				}, {
					x: 8,
					y: 9,
					dir: 'up',
					color: 'blue'
				}
			]
		],
		/*28*/[
			["xxxxxxxxxxxxxx", "xxxx x  x xxxx", "xxx gb  gb xxx", "xx  xx  xx  xx", "xx   b  g   xx", "xx          xx", "xxx        xxx", "xxxxg    bxxxx", "xxxxxxxxxxxxxx", "xxxxxxxxxxxxxx"], [
				{
					x: 5,
					y: 4,
					dir: 'up'
				}, {
					x: 8,
					y: 4,
					dir: 'up'
				}, {
					x: 5,
					y: 7,
					dir: 'down'
				}, {
					x: 8,
					y: 7,
					dir: 'down'
				}
			], [
				{
					x: 5,
					y: 8,
					dir: 'up',
					color: 'blue'
				}, {
					x: 8,
					y: 8,
					dir: 'up',
					color: 'green'
				}
			]
		],
		/*29*/["xxxxxxxxxxxxxx", "xxxx yyrr xxxx", "xxxx yyrr xxxx", "xxx  bbgg  xxx", "xxx  bbgg  xxx", "xxx  ggbb  xxx", "xxx  ggbb  xxx", "xxxx rryy xxxx", "xxxx rryy xxxx", "xxxxxxxxxxxxxx"],
		/*30*/[
			["xxxxxxxxxxxxxx", "xr    xxxxxxxx", "xxx        xxx", "xxxx       xxx", "xxxx       xxx", "xxxx       xxx", "xxxx       xxx", "xrrr       xxx", "xxr        bxx", "xxxxxxxxxxxxxx"], [
				{
					x: 1,
					y: 1,
					dir: 'up'
				}
			], [
				{
					x: 5,
					y: 9,
					dir: 'up',
					color: 'blue'
				}, {
					x: 6,
					y: 9,
					dir: 'up',
					color: 'blue'
				}, {
					x: 7,
					y: 9,
					dir: 'up',
					color: 'blue'
				}, {
					x: 8,
					y: 9,
					dir: 'up',
					color: 'blue'
				}, {
					x: 9,
					y: 9,
					dir: 'up',
					color: 'blue'
				}, {
					x: 10,
					y: 9,
					dir: 'up',
					color: 'blue'
				}, {
					x: 11,
					y: 7,
					dir: 'left',
					color: 'blue'
				}, {
					x: 11,
					y: 6,
					dir: 'left',
					color: 'blue'
				}, {
					x: 11,
					y: 5,
					dir: 'left',
					color: 'blue'
				}, {
					x: 11,
					y: 4,
					dir: 'left',
					color: 'blue'
				}, {
					x: 11,
					y: 3,
					dir: 'left',
					color: 'blue'
				}, {
					x: 11,
					y: 2,
					dir: 'left',
					color: 'blue'
				}
			]
		],
		/*31*/[
			["xxxxxxxxxxxxxx", "xxb xxxxxx bxx", "xxx  r  r  xxx", "xx   xxxx   xx", "xx xxxxxxxx xx", "x g   xx   g x", "xx11      22xx", "xx11      22xx", "xxxxxr  rxxxxx", "xxxxxxxxxxxxxx"], [
				{
					x: 5,
					y: 8,
					dir: 'down'
				}, {
					x: 8,
					y: 8,
					dir: 'down'
				}, {
					x: 4,
					y: 6,
					dir: 'left'
				}, {
					x: 9,
					y: 6,
					dir: 'right'
				}
			], [
				{
					x: 3,
					y: 6,
					dir: 'right',
					color: 'green'
				}, {
					x: 10,
					y: 6,
					dir: 'left',
					color: 'green'
				}, {
					x: 2,
					y: 2,
					dir: 'right',
					color: 'blue'
				}, {
					x: 11,
					y: 2,
					dir: 'left',
					color: 'blue'
				}
			]
		],
		/*32*/[
			["xxxxxxxxxxxxxx", "xg   y   xr0bx", "x1   2    y3gx", "xb   r44    xx", "xx   xxx   xxx", "x           xx", "x       xx  xx", "xx          xx", "xxx        xxx", "xxxxxxxxxxxxxx"], [
				{
					x: 1,
					y: 1,
					dir: 'down'
				}, {
					x: 1,
					y: 3,
					dir: 'up'
				}, {
					x: 5,
					y: 1,
					dir: 'down'
				}, {
					x: 5,
					y: 3,
					dir: 'up'
				}, {
					x: 10,
					y: 1,
					dir: 'right'
				}, {
					x: 12,
					y: 1,
					dir: 'left'
				}, {
					x: 10,
					y: 2,
					dir: 'right'
				}, {
					x: 12,
					y: 2,
					dir: 'left'
				}
			]
		],
		/*33*/[
			["xxxxxxxxxxxxxx", "xx1144    xxxx", "xr1224    xxxx", "xx3225    xxxx", "xx3355    xxxx", "xxxxxx    xxrx", "xx           x", "xxx          x", "xx     xx  x x", "xxxxxxxxxxxxxx"], [
				{
					x: 12,
					y: 5,
					dir: 'up'
				}
			], [
				{
					x: 1,
					y: 6,
					dir: 'right',
					color: 'red'
				}
			]
		],
		/*34*/[
			["xxxxxxxxxxxxxx", "xb      r12rxx", "xx      1122 x", "xx      3344xx", "x       r34rxx", "x       xxxxxx", "xx     gxxxxxx", "xx     xxxxxxx", "xx     xxxxxxx", "xxxxxxxxxxxxxx"], [
				{
					x: 1,
					y: 4,
					dir: 'left'
				}, {
					x: 8,
					y: 1,
					dir: 'right'
				}, {
					x: 8,
					y: 1,
					dir: 'down'
				}, {
					x: 11,
					y: 1,
					dir: 'left'
				}, {
					x: 11,
					y: 1,
					dir: 'down'
				}, {
					x: 8,
					y: 4,
					dir: 'right'
				}, {
					x: 8,
					y: 4,
					dir: 'up'
				}, {
					x: 11,
					y: 4,
					dir: 'left'
				}, {
					x: 11,
					y: 4,
					dir: 'up'
				}
			], [
				{
					x: 0,
					y: 4,
					dir: 'right',
					color: 'blue'
				}, {
					x: 13,
					y: 2,
					dir: 'left',
					color: 'blue'
				}, {
					x: 4,
					y: 9,
					dir: 'up',
					color: 'green'
				}
			]
		],
		/*35*/[
			["xxxxxxxxxxxxxx", "x00    bbbbbrx", "x0b        byx", "x00        byx", "xxxyyy     byx", "xxr1b1     xxx", "xx 111     xxx", "xxxxx      xxx", "xxxxxxxx   xxx", "xxxxxxxxxxxxxx"], [
				{
					x: 2,
					y: 2,
					dir: 'left'
				}, {
					x: 2,
					y: 2,
					dir: 'up'
				}, {
					x: 2,
					y: 2,
					dir: 'down'
				}, {
					x: 2,
					y: 5,
					dir: 'up'
				}, {
					x: 4,
					y: 5,
					dir: 'down'
				}, {
					x: 4,
					y: 5,
					dir: 'left'
				}, {
					x: 4,
					y: 5,
					dir: 'right'
				}
			]
		],
		/*36*/[
			["xxxxxxxxxxxxxx", "x    brgrbg  x", "x  xx111111xxx", "x  xx1y11r1xxx", "x    111122  x", "x    112222  x", "x    222222  x", "x    222222  x", "x    222222  x", "xxxxxxxxxxxxxx"], [], [
				{
					x: 4,
					y: 9,
					dir: 'up',
					color: 'red'
				}
			]
		],
		/*37*/[
			["xxxxxxxxxxxxxx", "xrr  rrr  rryx", "xxx    x   xxx", "x           gx", "x  rrr    rrrx", "xx  1        x", "xxx 1        x", "xx  1        x", "xxx 1       xx", "xxxxxxxxxxxxxx"], [
				{
					x: 12,
					y: 4,
					dir: 'right'
				}
			], [
				{
					x: 0,
					y: 3,
					dir: 'right',
					color: 'yellow'
				}, {
					x: 0,
					y: 4,
					dir: 'right',
					color: 'green'
				}
			]
		],
		/*38*/[
			["xxxxxxxxxxxxxx", "xgggxxybr    x", "x   xxbyb    x", "xgggxxxxxxx  x", "x111xx       x", "xx1xxx       x", "xx      xx xxx", "xx       xxxxx", "xxxxx xxxxxxxx", "xxxxxxxxxxxxxx"], [
				{
					x: 1,
					y: 1,
					dir: 'up'
				}, {
					x: 2,
					y: 1,
					dir: 'up'
				}, {
					x: 3,
					y: 1,
					dir: 'up'
				}, {
					x: 1,
					y: 3,
					dir: 'down'
				}, {
					x: 2,
					y: 3,
					dir: 'down'
				}, {
					x: 3,
					y: 3,
					dir: 'down'
				}
			], [
				{
					x: 2,
					y: 8,
					dir: 'up',
					color: 'red'
				}
			]
		],
		/*39*/[
			["xxxxxxxxxxxxxx", "xxxxx    xxxxx", "xxxx  1111xxxx", "xxxxx    xxxxx", "xxrx      xgxx", "xxb        bxx", "xyr        gyx", "xxxx      xxxx", "xxxxx xx xxxxx", "xxxxxxxxxxxxxx"], [], [
				{
					x: 3,
					y: 7,
					dir: 'up',
					color: 'green'
				}, {
					x: 10,
					y: 7,
					dir: 'up',
					color: 'red'
				}
			]
		],
		/*40*/[
			["xxxxxxxxxxxxxx", "x      r r r x", "xx1yxxxx x x x", "xx11r  x x r x", "xxry y x x x x", "xx22 x x x r x", "xx22       x x", "xx2          x", "xxxx     x   x", "xxxxxxxxxxxxxx"], [
				{
					x: 4,
					y: 3,
					dir: 'up'
				}
			], [
				{
					x: 3,
					y: 8,
					dir: 'up',
					color: 'yellow'
				}
			]
		],
		/*41*/[
			[
				"xxxxxxxxxxxxxx",
				"x0r    r1  g x",
				"x x    x   x x",
				"xr2    3r    x",
				"x x    x     x",
				"xg           x",
				"xxxx         x",
				"xxx         xx",
				"xxxx  x  xxxxx",
				"xxxxxxxxxxxxxx"
			], [
				{
					x: 2,
					y: 1,
					dir: 'left'
				},
				{
					x: 7,
					y: 1,
					dir: 'right'
				},
				{
					x: 1,
					y: 3,
					dir: 'right'
				},
				{
					x: 8,
					y: 3,
					dir: 'left'
				}
			], [
				{
					x: 13,
					y: 4,
					dir: 'left',
					color: 'red'
				}
			]
		],
		/*42*/[
			[
				"xxxxxxxxxxxxxx",
				"xx000x   b g x",
				"xx000    1r2 x",
				"xxxr     g b x",
				"xr      33r44x",
				"xxx         xx",
				"xx        xxxx",
				"xx        xxxx",
				"xx      x xxxx",
				"xxxxxxxxxxxxxx"
			], [
				{
					x: 3,
					y: 3,
					dir: 'up'
				},
				{
					x: 10,
					y: 2,
					dir: 'right'
				},
				{
					x: 10,
					y: 2,
					dir: 'left'
				},
				{
					x: 10,
					y: 4,
					dir: 'right'
				},
				{
					x: 10,
					y: 4,
					dir: 'left'
				},
				{
					x: 11,
					y: 3,
					dir: 'up'
				},
				{
					x: 9,
					y: 3,
					dir: 'up'
				}
			]],
		/*43*/[
			[
				"xxxxxxxxxxxx",
				"xxxxxxg g gx",
				"xxxxxx     x",
				"xxxxxx     x",
				"xxxxxx     x",
				"xg1g2g     x",
				"xxxxxx     x",
				"xxxxxx00000x",
				"xxxxxx    rx",
				"xxxxxxxxxxxx"
			], [
				{
					x: 6,
					y: 1,
					dir: 'up'
				},
				{
					x: 8,
					y: 1,
					dir: 'up'
				},
				{
					x: 10,
					y: 1,
					dir: 'up'
				},
				{
					x: 6,
					y: 8,
					dir: 'down'
				}
			], [
				{
					x: 6,
					y: 9,
					dir: 'up',
					color: 'red'
				},
				{
					x: 7,
					y: 9,
					dir: 'up',
					color: 'red'
				},
				{
					x: 8,
					y: 9,
					dir: 'up',
					color: 'red'
				},
				{
					x: 9,
					y: 9,
					dir: 'up',
					color: 'red'
				}
			]
		],
		/*44*/[
			[
				"xxxxxxxxxxxx",
				"xxxxxxg g gx",
				"xxxxxx     x",
				"xxxxxx     x",
				"xxxxxx     x",
				"x1g2g3     x",
				"xxxxxx     x",
				"xxxxxx00000x",
				"xxxxxx    rx",
				"xxxxxxxxxxxx"
			], [
				{
					x: 6,
					y: 1,
					dir: 'up'
				},
				{
					x: 8,
					y: 1,
					dir: 'up'
				},
				{
					x: 10,
					y: 1,
					dir: 'up'
				},
				{
					x: 6,
					y: 8,
					dir: 'down'
				}
			], [
				{
					x: 6,
					y: 9,
					dir: 'up',
					color: 'red'
				},
				{
					x: 7,
					y: 9,
					dir: 'up',
					color: 'red'
				},
				{
					x: 8,
					y: 9,
					dir: 'up',
					color: 'red'
				},
				{
					x: 9,
					y: 9,
					dir: 'up',
					color: 'red'
				}
			]
		],
		/*45*/[
			[
				"xxxxxxxxxxxx",
				"xyy      ggx",
				"x 0b    b1 x",
				"xgr      ryx",
				"xxx      xxx",
				"xxxx    xxxx",
				"x r     r  x",
				"x 2     3  x",
				"x 2     3  x",
				"xxxxxxxxxxxx"
			], [
				{
					x: 3,
					y: 2,
					dir: 'left'
				},
				{
					x: 1,
					y: 3,
					dir: 'down'
				},
				{
					x: 2,
					y: 3,
					dir: 'up'
				},
				{
					x: 8,
					y: 2,
					dir: 'right'
				},
				{
					x: 9,
					y: 3,
					dir: 'up'
				},
				{
					x: 10,
					y: 3,
					dir: 'down'
				},
				{
					x: 2,
					y: 6,
					dir: 'down'
				},
				{
					x: 8,
					y: 6,
					dir: 'down'
				}
			]
		],
		/*46*/[
			[
				"xxxxxxxxxxxxx",
				"xxxxxxxxxxxyx",
				"xyyrr       x",
				"xyyrr      gx",
				"xbb0      xxx",
				"xbb0      xxx",
				"xggxx     xxx",
				"xggxx     xxx",
				"xxxxxxrxxxxxx",
				"xxxxxxxxxxxxx"
			], [
				{
					x: 11,
					y: 1,
					dir: 'up'
				},
				{
					x: 8,
					y: 7,
					dir: 'down'
				}
			], [
				{
					x: 8,
					y: 8,
					dir: 'up',
					color: 'blue'
				},
			]
		],
		/*47*/[
			[
				"xxxxxxxxxxxxx",
				"xxx   y   0xx",
				"xxx   x   bbx",
				"x         bbx",
				"x         xxx",
				"x  x      xxx",
				"x  x      xxx",
				"x  x      xxx",
				"xbbx      xxx",
				"xxxxxxxxxxxxx",
			],[],[
				{
					x: 5,
					y: 9,
					dir: 'up',
					color: 'yellow'
				},
				{
					x: 6,
					y: 9,
					dir: 'up',
					color: 'yellow'
				},
				{
					x: 7,
					y: 9,
					dir: 'up',
					color: 'yellow'
				},
				{
					x: 8,
					y: 9,
					dir: 'up',
					color: 'yellow'
				},
				{
					x: 9,
					y: 9,
					dir: 'up',
					color: 'yellow'
				}
			]
		],
		/*48*/[
			[
				"xxxxxxxxxxxxx",
				"xxxxxg    ggx",
				"xxxxxx    xxx",
				"xxxxxg    ggx",
				"xxxxxx    xxx",
				"xxxg      xxx",
				"xxxx       rx",
				"x         xxx",
				"xxxxxxxxxxxxx"
			],[
				{
					x: 3,
					y: 5,
					dir: 'up'
				}
			],[
				{
					x: 0,
					y: 7,
					dir: 'right',
					color: 'red'
				},
				{
					x: 5,
					y: 8,
					dir: 'up',
					color: 'red'
				}
			]
		],
		/*49*/[
			[
				"xxxxxxxxxxxxxx",
				"xg           x",
				"x     r   r  x",
				"xg    xxxxx  x",
				"x00   xxxxx  x",
				"x00          x",
				"x00        rrx",
				"xxxxx      b x",
				"xxxxxxxxxxxxxx"
			],[
				{
					x: 1,
					y: 1,
					dir: 'up'
				}
			],[
				{
					x: 5,
					y: 8,
					dir: 'up',
					color: 'blue'
				},
				{
					x: 7,
					y: 8,
					dir: 'up',
					color: 'blue'
				},
				{
					x: 9,
					y: 8,
					dir: 'up',
					color: 'blue'
				}
			]
		],
		/*50*/[
			[
				'xxxxxxxxxxxxxx',
				'x            x',
				'x    g       x',
				'xgy  g       x',
				'xxx  y       x',
				'xxxx x       x',
				'xxx         yx',
				'xxx      x xxx',
				'xxxxxxxxxxxxxx'
			],[
				{
					x: 12,
					y: 6,
					dir: 'down'
				}
			]
		],
		/*51*/[
			[
				'xxxxxxxxxxxxxx',
				'x  r 0   xxxxx',
				'x  x x       x',
				'x       11   x',
				'xxxx     xx  x',
				'x      x    rx',
				'x  x x   x   x',
				'x           xx',
				'xxxxxxx x  xxx',
				'xxxxxxxxxxxxxx'
			], [
				{
					x: 12,
					y: 5,
					dir: 'right'
				}
			]
		],
		/*52*/[
			[
				'xxxxxxxxxxxxx',
				'x           x',
				'x     y     x',
				'x     x     x',
				'x000       1x',
				'x r       rxx',
				'x g      yxxx',
				'xxxx   x  gxx',
				'xxxxxxxxx xxx',
				'xxxxxxxxxxxxx'
			], [
				{
					x: 10,
					y: 5,
					dir: 'down'
				},
				{
					x: 9,
					y: 6,
					dir: 'right'
				},
				{
					x: 10,
					y: 7,
					dir: 'up'
				}
			]
		],
		/*53*/[
			[
				'xxxxxxxxxxxxx',
				'xy      rxxxx',
				'xy 00  yrxxxx',
				'xr 00  xxxxxx',
				'xx xx      xx',
				'xx         xx',
				'xx       x rx',
				'xxxxxx xxxxxx',
				'xxxxxxxxxxxxx'
			], [
				{
					x: 11,
					y: 6,
					dir: 'up'
				}
			]
		],
		/*54*/[
			[
				'xxxxxxxxxxxxx',
				'xx  r y y   x',
				'x00 x x x  rx',
				'x00        xx',
				'x11        xx',
				'x11        xx',
				'xx         xx',
				'xxxx       xx',
				'xxxxxx     xx',
				'xxxxxxxxxxxxx'
			], [
				{
					x: 11,
					y: 2,
					dir: 'down'
				}
			]
		]
	];

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
				var skippedLevels = JSON.parse(localStorage.getItem('skippedLevels')) || [];
				var skippedIndex = skippedLevels.indexOf(level)
				if(skippedIndex > -1){
					skippedLevels.splice(skippedIndex, 1);
					localStorage.setItem('skippedLevels', JSON.stringify(skippedLevels.sort()));
				}
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
		const li = document.createElement('li');
		li.setAttribute('data', val);
		li.innerHTML = `Level ${val}`;
		li.addEventListener('click', () => {
			setCurrentLevel(val-1);
			reset();
		});
		const ul = document.getElementById('levels');
		ul.appendChild(li);
	}

	function setCurrentLevel(lvl) {
		level = lvl;
		currentLevel.innerHTML = level + 1;
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
		if (!this.classList.contains('disabled')) {
			localStorage.removeItem('skippedLevels')
		}
	});

	function reset() {
		document.getElementById('completed').style.display = 'none';
		document.getElementById('next').style.display = 'none';
		stage.dom.innerHTML = '';
		return stage = new Stage(stage.dom, level);
	}

	function next() {
		if (levels.length == level)
			level = 1;
		else
			level++;
		return reset();
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
		var skippedLevels = JSON.parse(localStorage.getItem('skippedLevels')) || [];
		if(skippedLevels.length){
			document.querySelectorAll("li.clearskipped, #skippedLevels").forEach((el) => {el.classList.remove('disabled')});
		}
		else{
			document.querySelectorAll("li.clearskipped, #skippedLevels").forEach((el) => {el.classList.add('disabled')});
		}

		menu.style.display = 'block';

	}
}