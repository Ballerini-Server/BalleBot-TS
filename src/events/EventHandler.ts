import path from "path";
import { readdirSync } from "fs";
import { EventBase } from "../structures/Event";

async function EventHandler(): Promise<EventBase[]> {
  return new Promise((resolve) => {
    const eventMap: EventBase[] = [];

    const eventFolders = ["client", "guilds"];

    eventFolders.forEach(async (folder) => {
      const folderPath = path.resolve(
        path.dirname(""),
        "src",
        "events",
        folder
      );

      const eventFiles = readdirSync(folderPath).filter(
        (file) => file.endsWith(".event.js") || file.endsWith(".event.ts")
      );

      eventFiles.forEach(async (file) => {
        const instanceEvent = await import(`./${folder}/${file}`);

        console.log(instanceEvent.default);
        eventMap.push(instanceEvent.default);
      });
    });

    resolve(eventMap);
  });
}

export default EventHandler;
