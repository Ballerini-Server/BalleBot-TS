import { Client } from "eris";
import "dotenv/config";
import eventHandler from "../events/EventHandler";
import commandHandler from "../commands/CommandHandler";

import { CommandBase } from "./Command";

export class Ballebot extends Client {
  // eslint-disable-next-line no-use-before-define
  static instance: Ballebot;

  public static getInstance(): Ballebot {
    if (!Ballebot.instance) {
      Ballebot.instance = new Ballebot();
    }
    return Ballebot.instance;
  }

  constructor() {
    super(`Bot ${process.env.TOKEN}`);
  }

  private commands: CommandBase[] = [];

  public async loadCommands(): Promise<void> {
    await commandHandler();
  }

  public addCommand(command: CommandBase) {
    this.commands.push(command);
  }

  public getListCommands(): CommandBase[] {
    return this.commands;
  }

  public async loadEvents(): Promise<void> {
    await eventHandler();
  }

  public getterCommands(): CommandBase[] {
    return this.commands;
  }

  public async init() {
    await this.connect();
  }
}
