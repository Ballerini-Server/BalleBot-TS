import "dotenv/config";
import { Message } from "eris";
import { EventBase } from "../../structures/Event";
import ModuleController from "../../modules/ModuleController";
import BreakFlow from "../../errors/breakFlow";

function CollectorErrors(callback, handler) {
  return async (message) => {
    try {
      await callback(message);
    } catch (error) {
      handler(error);
    }
  };
}

export default new EventBase(
  "messageCreate",
  CollectorErrors(
    async (message: Message) => {
      if (message.author.bot || message.webhookID) return;
      if (message.content === "") return;
      if (message.guildID !== "836004917973614662") return;

      await ModuleController.security(message);
    },
    (error) => {
      if (!(error instanceof BreakFlow)) {
        console.error(error);
      }
    }
  )
);
