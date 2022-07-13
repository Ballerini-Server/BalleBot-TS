import { CommandBase } from "../../structures/Command";

export default {
  name: "ping",

  description: "replies with pong",

  permissions: ["everyone"],

  category: "Acessórios ✨",

  aliases: ["olla"],

  run: async ({ message }) => {
    message.channel.createMessage("pong");
  },
} as CommandBase;
