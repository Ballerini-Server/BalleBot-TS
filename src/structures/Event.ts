import { ClientEvents } from "eris";

export class EventBase {
  event: keyof ClientEvents;

  run: (...args: ClientEvents[]) => void;

  constructor(mEvent: keyof ClientEvents, mRun: (...args) => void) {
    this.event = mEvent;
    this.run = mRun;
  }
}
