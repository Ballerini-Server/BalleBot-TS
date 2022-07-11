import { Client } from "eris";
import "dotenv/config";
import eventHandler from "../events/EventHandler";
import commandHandler from "../commands/CommandHandler";

import { Command } from "./Command";
import { EventBase } from "./Event";

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

  public commands: Command[] = [];

  public async loadCommands(): Promise<void> {
    await commandHandler();
  }

  public async addCommand(command: Command) {
    this.commands.push(command);
  }

  public gettersCommands() {
    console.log(this.commands);
  }

  public async loadEvents(): Promise<void> {
    const mapEvents: EventBase[] = await eventHandler();
    mapEvents.forEach((it) => {
      this.on(it.event, it.run);
    });
  }

  public getterCommands(): Command[] {
    return this.commands;
  }

  public async init() {
    await this.connect();
  }
}
