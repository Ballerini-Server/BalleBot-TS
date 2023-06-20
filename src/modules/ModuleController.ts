import { Message } from "eris";
import BreakFlow from "../errors/breakFlow";
import { discordNitro } from "./security/discordNitro";
import localSendErrors from "../utils/events/messageCreate/localSendErrors";

async function security(message: Message) {
  const listFunctions = [discordNitro];
  try {
    for await (const fun of listFunctions) {
      await fun(message);
    }
  } catch (error) {
    if (error instanceof BreakFlow) {
      throw error;
    }

    localSendErrors(error);
  }
}

export default {
  security,
};
