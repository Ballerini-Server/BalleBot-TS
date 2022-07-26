import { Message } from "eris";
import { getColor } from "../components/colors";
import { getIcon } from "../components/iconsEmbeds";

export function sendMessageWithoutPermission(
  message: Message,
  rolePermission: PermissionType
): void {
  message.channel.createMessage({
    content: `<@${message.author.id}>`,
    embeds: [
      {
        color: getColor("pink_red"),
        thumbnail: { url: getIcon("erro") },
        title: `Hey, você não tem permissão :(`,
        description: `Apenas ${rolePermission} possuem permissão para usar esse comando**`,
      },
    ],
  });
}
