import path from "path";
import { Dirent, readdirSync } from "fs";
import { CommandBase } from "../structures/Command";
import { Ballebot } from "../structures/Client";

const commandFolders = [
  "everyone",
  "padawans",
  "moderators",
  "administrators",
  "owners",
  "developers",
];

function recursiveImport(folder: string) {
  const folderPath = path.resolve(__dirname, folder);

  let commandFiles: Dirent[];
  try {
    commandFiles = readdirSync(folderPath, { withFileTypes: true });
  } catch {}
  if (commandFiles) {
    commandFiles.forEach(async (file) => {
      if (file.isDirectory()) {
        recursiveImport(path.join(folder, file.name));

        return;
      }

      if (!/[.command.js]|[.command.ts]$/.test(file.name)) return;
      const name = `./${path.join(".", folder, file.name).replace(/\\/g, "/")}`;

      try {
        const command = (await import(`${name}`)).default as CommandBase;
        const ballebot = Ballebot.getInstance();

        ballebot.addCommand(command);
      } catch (e) {
        console.error(e);
      }
    });
  }
}

async function commandHandler(): Promise<void> {
  return new Promise((resolve) => {
    if (commandFolders) {
      commandFolders.forEach((folder) => {
        recursiveImport(folder);
      });
    }

    resolve();
  });
}

export default commandHandler;
