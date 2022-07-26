const COLORS = {
  pink_red: "#ff8997",
  ligth_brown: "#a52a2a",
  black: "#171515",
  default: 0x000000,
  white: 0xffffff,
  aqua: 0x1abc9c,
  green: 0x57f287,
  blue: 0x3498db,
  yellow: 0xfee75c,
  purple: 0x9b59b6,
  luminousvividpink: 0xe91e63,
  fuchsia: 0xeb459e,
  gold: 0xf1c40f,
  orange: 0xe67e22,
  red: 0xed4245,
  grey: 0x95a5a6,
  navy: 0x34495e,
  darkaqua: 0x11806a,
  darkgreen: 0x1f8b4c,
  darkblue: 0x206694,
  darkpurple: 0x71368a,
  darkvividpink: 0xad1457,
  darkgold: 0xc27c0e,
  darkorange: 0xa84300,
  darkred: 0x992d22,
  darkgrey: 0x979c9f,
  darkergrey: 0x7f8c8d,
  lightgrey: 0xbcc0c0,
  darknavy: 0x2c3e50,
  blurple: 0x5865f2,
  greyple: 0x99aab5,
  darkbutnotblack: 0x2c2f33,
  notquiteblack: 0x23272a,
};

type COLORSBALLEBOT = keyof typeof COLORS;
export function getColor(color: COLORSBALLEBOT) {
  const myColor = COLORS[color];

  const c =
    typeof myColor === "string" ? myColor.replace("#", "") : myColor.toString();

  return parseInt(c, 16);
}
