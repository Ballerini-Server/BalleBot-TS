import { Command } from "../../structures/Command";

export default {
  name: "ping",

  description: "replies with pong",

  permissions: ["everyone"],

  category: "Acessórios ✨",

  aliases: ["olla"],

  run: async ({ interaction }) => {
    interaction.followup("Pong");
  },
} as Command;
