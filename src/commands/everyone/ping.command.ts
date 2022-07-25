import { CommandBase } from "../../structures/Command";
import { normalizeParamsOfEvents } from "../../utils/commands/normalizeParamsOfEvents";

export default {
  name: "ping",

  description: "replies with pong",

  permission: "everyone",

  category: "Acessórios ✨",

  aliases: ["pong"],

  optionsSlash: [],

  run: async (params) => {
    const objectToBeWorked: ParamsCommandProps =
      normalizeParamsOfEvents(params);

    objectToBeWorked.channelResponse.createMessage("pong");
  },
} as CommandBase;
