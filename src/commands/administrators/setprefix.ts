import { Message } from "eris";
import { insertItem, updateItem } from "../../model/controller/balleQueries";
import { CommandBase } from "../../structures/Command";
import { normalizeParamsOfEvents } from "../../utils/commands/normalizeParamsOfEvents";
import { sendMessagePrefixSucess } from "../../view/embeds/sendMessagePrefixSucess";

export default {
  name: "setprefix",

  description: "Comando para setar um prefixo customizado para seu servidor",

  permission: "administrator",

  aliases: ["prefix", "addPrefix"],

  category: "Acessórios ✨",

  run: async (params) => {
    const eventObject: EventObject = normalizeParamsOfEvents(params);

    const prefix = eventObject.args[1];

    if (!prefix) {
      return;
    }

    const paramsInsert: ParamsInsertItem = {
      data: prefix,
      guild: eventObject.guild.id,
      id: "GUILD_PREFIX",
    };

    try {
      await insertItem(paramsInsert);
    } catch {
      await updateItem(paramsInsert);
    }
    sendMessagePrefixSucess(params as Message);
  },
} as CommandBase;
