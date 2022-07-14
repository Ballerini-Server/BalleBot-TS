import { Ballebot } from "../structures/Client";

async function loadSlashCommands(): Promise<void> {
  const ballebot = Ballebot.getInstance();

  ballebot.guilds.forEach((guild) => {
    const listOfCommands = ballebot.getAllCommands();

    listOfCommands.forEach((command) => {
      ballebot.createGuildCommand(guild.id, {
        name: command.name,
        description: command.description,
        type: 1,
        defaultPermission: true,
        options: [
          {
            required: true,
            type: 11,
            description: "osieufosef",
            name: "usuarioss",
          },
        ],
      });
    });
  });
}

export default loadSlashCommands;
