import { Client, Interaction, ClientEvents } from "eris";

declare global {
  export interface RunOptions {
    client?: Client;
    interaction?: Interaction;
  }
  interface RunOptions {
    client?: Client;
  }

  type RunFunction = (options: RunOptions) => void;

  export type EventType<Key> = {
    name: ClientEvents[Key];
    once?: boolean;
    run: (...args: ClientEvents[Key]) => void;
  };

  export type RunEventArgs<Key extends keyof ClientEvents> = (
    ...args: ClientEvents[Key]
  ) => void;
}
export {};
