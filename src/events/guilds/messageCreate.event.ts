import "dotenv/config";
import { Message } from "eris";
import { Ballebot } from "../../structures/Client";
import { EventBase } from "../../structures/Event";
import { startWithPrefix } from "../../utils/events/messageCreate/startWithPrefix";
import { userHasPermission } from "../../utils/events/messageCreate/userHasPermission";

export default new EventBase("messageCreate", async (message: Message) => {
  if (message.author.bot) return;
  if (message.content === "") return;
  if (!(await startWithPrefix(message))) return;

  const args = message.content.slice(1).split(/ +/);
  const commandName = args.shift().toLowerCase();

  const ballebot = Ballebot.getInstance();
  const commandToRun = ballebot
    .getListCommands()
    .find(
      (command) =>
        command.name === commandName || command.aliases?.includes(commandName)
    );
  if (!commandToRun) return;

  const userPermission: boolean = await userHasPermission(
    message,
    commandToRun
  );
  if (userPermission) {
    commandToRun.run(message);
  }
});
