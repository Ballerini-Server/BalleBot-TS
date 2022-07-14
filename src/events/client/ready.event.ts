import { Ballebot } from "../../structures/Client";
import { EventBase } from "../../structures/Event";

export default new EventBase("ready", async () => {
  const ballebot = Ballebot.getInstance();
  await ballebot.loadSlashCommands();

  console.log(`Iniciado com o bot: ${ballebot.user.username}`);
});
