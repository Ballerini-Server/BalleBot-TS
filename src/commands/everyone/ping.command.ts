import { Message } from "eris";
import { CommandBase } from "../../structures/Command";

export default {
  name: "ping",

  description: "replies with pong",

  permissions: ["everyone"],

  category: "Acessórios ✨",

  aliases: ["pong"],

  optionsSlash: [],

  run: async (params) => {
    const channelResponse = params instanceof Message ? params.channel : params;

    channelResponse.createMessage("pong");
  },
} as CommandBase;
