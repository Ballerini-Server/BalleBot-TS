import "dotenv/config";
import { Message } from "eris";
import { Ballebot } from "../../structures/Client";
import { EventBase } from "../../structures/Event";

export default new EventBase("messageCreate", (message: Message) => {
  if (!message.content.startsWith(process.env.PREFIX)) return;

  const args = message.content.slice(1).split(/ +/);

  const ballebot = Ballebot.getInstance();
  const command = ballebot
    .getListCommands()
    .find((command) => command.name === args[0]);

  command.run(message);
});
