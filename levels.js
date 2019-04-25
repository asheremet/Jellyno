function getLevels() {
	return [
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
		], // https://youtu.be/zf5ciAmfoTk?t=188
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
					y: 7,
					dir: 'down'
				}
			], [
				{
					x: 6,
					y: 8,
					dir: 'up',
					color: 'red'
				},
				{
					x: 7,
					y: 8,
					dir: 'up',
					color: 'red'
				},
				{
					x: 8,
					y: 8,
					dir: 'up',
					color: 'red'
				},
				{
					x: 9,
					y: 8,
					dir: 'up',
					color: 'red'
				}
			]
		], //level 53 https://youtu.be/EM0XSLXwZlA?t=227
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
			], [], [
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
			], [
				{
					x: 3,
					y: 5,
					dir: 'up'
				}
			], [
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
			], [
				{
					x: 1,
					y: 1,
					dir: 'up'
				}
			], [
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
			], [
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
		],
		/*55*/[
			[
				'xxxxxxxxxxx',
				'x rgb    xx',
				'x gbr    xx',
				'x 000    yx',
				'x 000    xx',
				'x1111y   xx',
				'x 111    xx',
				'x 1 1    xx',
				'x 1 1    xx',
				'xxxxxxxxxxx'
			], [
				{
					x: 9,
					y: 3,
					dir: 'up'
				},
				{
					x: 5,
					y: 5,
					dir: 'left'
				}
			], [
				/*{
					x: 5,
					y: 5,
					color: 'yellow',
					dir: 'right'
				},*/
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
					color: 'blue'
				}
			]
		], //level 61 https://www.youtube.com/watch?v=zf5ciAmfoTk
		/*56*/[
			[
				'xxxxxxxxxxxxxx',
				'xy      00rxxx',
				'x1      0rbyxx',
				'xxbx    r xxxx',
				'x         xxxx',
				'x  r        rx',
				'x r2        xx',
				'xr22        xx',
				'xxxxxxxx xxxxx',
				'xxxxxxxxxxxxxx'
			], [
				{
					x: 2,
					y: 3,
					dir: 'left'
				},
				{
					x: 10,
					y: 1,
					dir: 'left'
				},
				{
					x: 9,
					y: 2,
					dir: 'up'
				},
				{
					x: 9,
					y: 2,
					dir: 'left'
				},
				{
					x: 8,
					y: 3,
					dir: 'up'
				},
				{
					x: 11,
					y: 2,
					dir: 'up'
				},
				{
					x: 3,
					y: 5,
					dir: 'down'
				},
				{
					x: 2,
					y: 6,
					dir: 'down'
				},
				{
					x: 2,
					y: 6,
					dir: 'right'
				},
				{
					x: 1,
					y: 7,
					dir: 'right'
				},
				{
					x: 12,
					y: 5,
					dir: 'up'
				}
			]
		], //level 62 https://youtu.be/zf5ciAmfoTk?t=28
		/*57*/[
			[
				'xxxxxxxxxxxxxx',
				'xrr  rb   xxxx',
				'xgg  gg   bbbx',
				'xxx  xxxx   xx',
				'x       x    x',
				'x            x',
				'x            x',
				'x            x',
				'xxrxxxxxxrxxxx',
				'xxxxxxxxxxxxxx'
			], [
				{
					x: 9,
					y: 8,
					dir: 'down'
				}
			], [
				{
					x: 5,
					y: 8,
					color: 'blue',
					dir: 'up'
				}
			]
		], //level 63 https://youtu.be/zf5ciAmfoTk?t=59
		/*58*/[
			[
				'xxxxxxxxxxxxxx',
				'xrr  rb   xxxx',
				'xyy  yy    bbx',
				'xxx  xxxx   xx',
				'x       x    x',
				'x            x',
				'x            x',
				'x            x',
				'xxrxxxxxxrxxxx',
				'xxxxxxxxxxxxxx'
			], [
				{
					x: 9,
					y: 8,
					dir: 'down'
				}
			], [
				{
					x: 5,
					y: 8,
					color: 'blue',
					dir: 'up'
				}
			]
		], //level 64 https://youtu.be/zf5ciAmfoTk?t=87
		/*59*/[
			[
				'xxxxxxxxxxxxx',
				'x0yyyyy  br x',
				'x0y     rryxx',
				'x0y      xxxx',
				'x0y       xxx',
				'x0y       xxx',
				'xx        xxx',
				'xx  x  xx bxx',
				'xxxxxxxxxxxxx'
			], [
				{
					x: 2,
					y: 1,
					dir: 'left'
				},
				{
					x: 2,
					y: 2,
					dir: 'left'
				},
				{
					x: 2,
					y: 3,
					dir: 'left'
				},
				{
					x: 2,
					y: 4,
					dir: 'left'
				},
				{
					x: 2,
					y: 5,
					dir: 'left'
				},
				{
					x: 10,
					y: 7,
					dir: 'up'
				}
			], [
				{
					x: 2,
					y: 8,
					dir: 'up',
					color: 'red'
				},
				{
					x: 12,
					y: 1,
					dir: 'left',
					color: 'yellow'
				}
			]
		], //level 65 https://youtu.be/zf5ciAmfoTk?t=114
		/*60*/[
			[
				'xxxxxxxxxxxxxx',
				'xxxxxx       x',
				'xgggxxr0y    x',
				'x   xxyrrr   x',
				'xgggxxxxxx   x',
				'x111xx       x',
				'xx1xx        x',
				'xx        xxxx',
				'x        xxxxx',
				'xxxxx    xxxxx',
				'xxxxxxxxxxxxxx'
			], [
				{
					x: 1,
					y: 2,
					dir: 'up'
				},
				{
					x: 2,
					y: 2,
					dir: 'up'
				},
				{
					x: 3,
					y: 2,
					dir: 'up'
				},
				{
					x: 1,
					y: 4,
					dir: 'down'
				},
				{
					x: 2,
					y: 4,
					dir: 'down'
				},
				{
					x: 3,
					y: 4,
					dir: 'down'
				},
				{
					x: 7,
					y: 1,
					dir: 'down'
				}
			], [
				{
					x: 7,
					y: 2,
					dir: 'up',
					color: 'red'
				}
			]
		], //level 66 https://youtu.be/zf5ciAmfoTk?t=139
		/*61*/[
			[
				'xxxxxxxxxxxx',
				'xxxbx  xgxxx',
				'xxxgb  gbxxx',
				'x xxx  xxx x',
				'x   b  g   x',
				'xg        bx',
				'xxb      gxx',
				'xxx      xxx',
				'xxxxxxxxxxxx'
			], [
				{
					x: 7,
					y: 4,
					dir: 'up'
				},
				{
					x: 4,
					y: 4,
					dir: 'up'
				},
				{
					x: 2,
					y: 6,
					dir: 'down'
				},
				{
					x: 9,
					y: 6,
					dir: 'down'
				}
			]
		], // https://youtu.be/zf5ciAmfoTk?t=168
		/*62*/[
			[
				'xxxxxxxxxxxxx',
				'xyyy0000000xx',
				'xyyy0000000xx',
				'xxxx  b    xx',
				'xxxx  g    xx',
				'xxxx  r    xx',
				'xx    b    yx',
				'x     g  g xx',
				'x     r  r xx',
				'xxxxxxxxxxxxx'
			], [
				{
					x: 11,
					y: 6,
					dir: 'up'
				}
			]
		], //level 69 https://youtu.be/zf5ciAmfoTk?t=211
		/*63*/[
			[
				'xxxxxxxxxxxxx',
				'xggg0000000xx',
				'xggg0000000xx',
				'xxxx  b    xx',
				'xxxx  y    xx',
				'xxxx  r    xx',
				'x     b  b gx',
				'x     y  y xx',
				'x     r  r xx',
				'xxxxxxxxxxxxx'
			], [
				{
					x: 11,
					y: 6,
					dir: 'up'
				}
			]
		], //level 70 https://youtu.be/zf5ciAmfoTk?t=230
		/*64*/[
			[
				'xxxxxxxxxxxxxx',
				'xxxxxx      xx',
				'xxyr00     yxx',
				'xxxx00     xxx',
				'xx1122     bxx',
				'xx1122     rxx',
				'xxbxxx     xxx',
				'xxxxxx     xxx',
				'xxxxxxxxxxxxxx'
			], [
				{
					x: 2,
					y: 2,
					dir: 'up'
				},
				{
					x: 2,
					y: 6,
					dir: 'down',
				},
				{
					x: 11,
					y: 5,
					dir: 'down'
				}
			]
		], // level 16 https://www.youtube.com/watch?v=ohBFW4yo0Ag
		/*65*/[
			[
				'xxxxxxxxxxxxxx',
				'xr           x',
				'xx     0gg   x',
				'xr     g 1   x',
				'xx     2 g   x',
				'xx     x x   x',
				'xx           x',
				'xx           x',
				'xx   x xxxxxxx',
				'xxxxxxxxxxxxxx'
			],
			[
				{
					x: 1,
					y: 3,
					dir: 'up',
				},
				{
					x: 7,
					y: 3,
					dir: 'down'
				},
				{
					x: 9,
					y: 4,
					dir: 'up'
				}
			]
		],//level 19 https://youtu.be/ohBFW4yo0Ag?t=83
		/*66*/[
			[
				'xxxxxxxxxxxxxx',
				'xx         xxx',
				'xxxxx   xxxxxx',
				'xxxxx   xxxxxx',
				'xxx       xxxx',
				'xx b      yxxx',
				'xx bgg  rryxxx',
				'xxrry   bggxxx',
				'xxx y   b xxxx',
				'xxxxxxxxxxxxxx'
			],[
				{
					x: 2,
					y: 7,
					dir: 'down'
				},
				{
					x: 10,
					y: 7,
					dir: "down"
				}
			]
		], //level 22 https://youtu.be/ohBFW4yo0Ag?t=133
	];
}

