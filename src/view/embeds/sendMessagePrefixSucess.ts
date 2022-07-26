import { Message } from "eris";
import { getColor } from "../components/colors";
import { getIcon } from "../components/iconsEmbeds";

export function sendMessagePrefixSucess(message: Message) {
  message.channel.createMessage({
    content: `<@${message.author.id}>`,
    embeds: [
      {
        color: getColor("pink_red"),
        thumbnail: { url: getIcon("sucess") },
        title: `Prefixo salvo no servidor!`,
        footer: {
          text: `${message.author.username}`,
        },
        timestamp: new Date(),
      },
    ],
  });
}
