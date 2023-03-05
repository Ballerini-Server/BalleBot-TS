import "dotenv/config";
import { Ballebot } from "../../structures/Client";
import { EventBase } from "../../structures/Event";
import { CommandInteraction, Interaction } from "eris";

export default new EventBase(
  "interactionCreate",
  (interaction: Interaction) => {
    if (!(interaction instanceof CommandInteraction)) return;

    const ballebot = Ballebot.getInstance();
    const command = ballebot
      .getAllCommands()
      .find((command) => command.name === interaction.data.name);
    command.run(interaction);
  }
);
