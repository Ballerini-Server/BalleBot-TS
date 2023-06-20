import { Ballebot } from "../../../structures/Client";

export default function localSendErrors(error: Error) {
  const client: Ballebot = Ballebot.getInstance();
  client.createMessage("884597533161173002", {
    content: "Erro no código: " + error.message,
  });
}
