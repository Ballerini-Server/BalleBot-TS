import { Message } from "eris";
import { Ballebot } from "../../structures/Client";
import { EventBase } from "../../structures/Event";

export default new EventBase("messageCreate", (message: Message) => {
  // Chat Input Commands

  const args = message.content.slice(1).split(/ +/);
  console.log(args);
  const ballebot = Ballebot.getInstance();
  const command = ballebot
    .getListCommands()
    .find((command) => command.name === message.content);
  console.log(command);
});
