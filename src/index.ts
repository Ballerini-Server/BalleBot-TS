import { Ballebot } from "./structures/Client";

const ballebot: Ballebot = Ballebot.getInstance();

async function helloBallebot() {
  await ballebot.loadEvents();
  await ballebot.loadCommands();
  await ballebot.init();
}

helloBallebot();
