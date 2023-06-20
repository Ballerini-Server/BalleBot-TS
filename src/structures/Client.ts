import "dotenv/config";
import eventHandler from "../events/EventHandler";
import commandHandler from "../commands/CommandHandler";
import loadSlashCommands from "../commands/CommandSlash";

import { Client } from "eris";
import { CommandBase } from "./Command";

export class Ballebot extends Client {
  static instance: Ballebot;

  public static getInstance(): Ballebot {
    if (!Ballebot.instance) {
      Ballebot.instance = new Ballebot();
    }
    return Ballebot.instance;
  }

  constructor() {
    super(`Bot ${process.env.TOKEN}`, {
      intents: ["guilds", "guildMembers", "guildMessages"],
    });
  }

  private commands: CommandBase[] = [];

  public async loadCommands(): Promise<void> {
    await commandHandler();
  }

  public addCommand(command: CommandBase) {
    this.commands.push(command);
  }

  public getOneCommand(commandToGet: string): CommandBase {
    const command = this.commands.find(
      (c) =>
        c.name.toLowerCase() === commandToGet ||
        c.aliases?.includes(commandToGet)
    );
    return command;
  }

  public async loadEvents(): Promise<void> {
    await eventHandler();
  }

  public getAllCommands(): CommandBase[] {
    return this.commands;
  }

  public async loadSlashCommands(): Promise<void> {
    await loadSlashCommands();
  }

  public async init() {
    await this.connect();
  }
}
