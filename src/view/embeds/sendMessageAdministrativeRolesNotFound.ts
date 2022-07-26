import { Message } from "eris";
import { getColor } from "../components/colors";
import { getIcon } from "../components/iconsEmbeds";

export function sendMessageAdministrativeRolesNotFound(message: Message) {
  message.channel.createMessage({
    content: `<@${message.author.id}>`,
    embeds: [
      {
        color: getColor("pink_red"),
        thumbnail: { url: getIcon("erro") },
        title: "Os Cargos Administrativos não foram encontrados!",
        description: `**Desculpa, mas não encontrei os cargos marcados.**
**•** Mande no seguinte esquema:
prefix setAdm @cargoPadawan @cargoMods @cargoStaff`,
      },
    ],
  });
}
