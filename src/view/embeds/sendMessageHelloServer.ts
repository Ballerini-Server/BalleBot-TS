import { Message } from "eris";
import { Ballebot } from "../../structures/Client";
import { getColor } from "../components/colors";

const ballebot = Ballebot.getInstance();

export function sendMessageHelloServer(message: Message): void {
  message.channel.createMessage({
    content: `<@${message.author.id}>`,
    embeds: [
      {
        color: getColor("pink_red"),
        thumbnail: { url: ballebot.user.avatarURL },
        title: `Olá! Fico muito feliz e agredecida por ter me adicionado!!!!`,
        description: `Primeiramente, nós do servidor Ballerini ficamos honrados por usar nosso bot. Isso é incrível! 🙀 😻
Para começar vamos definir os cargos administrativos:
Eu ofereço 4 cargos de hierarquia, Everyone, Padawan, Moderadores e Staff.
O único que poderá definir os cargos será o dono do servidor ou um administrador real!
Então mande a seguinte mensagem para definir os cargos repectivamente e saiba sobre os comandos com help!
setAdm @cargoPadawan @cargoModeradores @cargoStaff `,
      },
    ],
  });
}
