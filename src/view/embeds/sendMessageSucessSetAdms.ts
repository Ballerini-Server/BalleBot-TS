import { Message } from "eris";
import { getColor } from "../components/colors";
import { getIcon } from "../components/iconsEmbeds";

export function sendMessageSucessSetAdms(message: Message) {
  message.channel.createMessage({
    content: `<@${message.author.id}>`,
    embeds: [
      {
        color: getColor("pink_red"),
        thumbnail: { url: getIcon("sucess") },
        title: `Os Cargos Administrativos foram setados!:`,
        description: `**• Todos os membros que possuem esses cargos vão ter acesso ao comandos respectivos que podem ser vistos em <prefix>help ** `,
      },
    ],
  });
}
