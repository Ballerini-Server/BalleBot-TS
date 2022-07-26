const ICONS = {
  sledgehammer: "https://i.imgur.com/2mUBBIq.png",
  broken_sledgehammer: "https://i.imgur.com/5RlHK76.png",
  mute: "https://i.imgur.com/0bj6hum.png",
  unmute: "https://i.imgur.com/Jut1wGO.png",
  interrogation: "https://i.imgur.com/7CGXs55.png",
  settings: "https://i.imgur.com/gfDpssU.png",
  sucess: "https://i.imgur.com/ABE7oQT.png",
  erro: "https://i.imgur.com/P7MTBMI.png",
  warn: "https://i.imgur.com/1pXRzgD.png",
  wifi: "https://i.imgur.com/WyMJD9Y.png",
  padlock: "https://i.imgur.com/Yu49iwo.png",
  chat: "https://i.imgur.com/MmUwvrc.png",
  addwords: "https://i.imgur.com/3TiZboO.png",
  subwords: "https://i.imgur.com/9UyP0xw.png",
  words: "https://i.imgur.com/gcW4DRj.png",
};

type ICONSBALLERINI = keyof typeof ICONS;

export function getIcon(icon: ICONSBALLERINI) {
  return ICONS[icon];
}
