import { Message } from "eris";
import BreakFlow from "../../errors/breakFlow";

export async function discordNitro(message: Message) {
  let contentMessage = message.content;

  const regex = [/discord/gi, /free/gi, /nitro/gi, /http(s?):\/\//gi];
  const linkTrue = /http(s?):\/\/discord\.gift\//gi;

  let scam = true;

  function removeLinkTenorGif() {
    const regexLink = /(https?:\/\/[^\s]+)/g;
    contentMessage = contentMessage.replace(regexLink, (match) => {
      if (match.includes("https://tenor.com/")) {
        return "";
      } else {
        return match;
      }
    });
  }
  removeLinkTenorGif();

  regex.forEach((reg) => {
    if (!reg.test(contentMessage)) {
      scam = false;
    }
  });

  if (linkTrue.test(contentMessage)) {
    scam = false;
  }

  if (scam) {
    const reason = `Scam de Discord Nitro Free falso:\n${message.content}`;

    //TODO tratar errors
    message.delete().then(() => {
      message.member.ban(0, reason);
    });
    throw new BreakFlow("Whoops, discord nitro né engraçadinho!");
  }

  return;
}
