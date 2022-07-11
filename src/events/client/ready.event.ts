import { Ballebot } from "../../structures/Client";
import { EventBase } from "../../structures/Event";

export default new EventBase("ready", () => {
  const ballebot = Ballebot.getInstance();
  console.log(`Iniciado com o bot: ${ballebot.user.username}`);
});
