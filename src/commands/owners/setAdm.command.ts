import { Guild, Message } from "eris";
import { insertItem, updateItem } from "../../model/controller/balleQueries";
import { CommandBase } from "../../structures/Command";
import { normalizeParamsOfEvents } from "../../utils/commands/normalizeParamsOfEvents";
import { sendMessageAdministrativeRolesNotFound } from "../../view/embeds/sendMessageAdministrativeRolesNotFound";
import { sendMessageSucessSetAdms } from "../../view/embeds/sendMessageSucessSetAdms";

export default {
  name: "setadm",

  description: "replies with pong",

  permission: "owner",

  category: "Acessórios ✨",

  aliases: ["pong"],

  optionsSlash: [],

  run: async (params) => {
    const eventObject: EventObject = normalizeParamsOfEvents(params);

    const admsInsert = {
      administrator: eventObject.args[3]?.replace(/(<)|(@&)|(>)/g, ""),
      moderator: eventObject.args[2]?.replace(/(<)|(@&)|(>)/g, ""),
      padawan: eventObject.args[1]?.replace(/(<)|(@&)|(>)/g, ""),
    };

    const rolesAdms = Object.values(admsInsert);

    if (
      rolesAdms.some(
        (value) =>
          value === undefined || (value.length !== 18 && value.length !== 19)
      )
    ) {
      sendMessageAdministrativeRolesNotFound(params as Message);
      return;
    }

    let undefinedRole: boolean;
    const serverGuild: Guild = eventObject.guild;
    rolesAdms.forEach((roleID) => {
      if (!serverGuild.roles.some((role) => role.id === roleID)) {
        undefinedRole = true;
      }
    });

    if (undefinedRole) {
      sendMessageAdministrativeRolesNotFound(params as Message);
      return;
    }

    const paramsInsert: ParamsInsertItem = {
      data: admsInsert,
      guild: eventObject.guild.id,
      id: "GUILD_ADMS",
    };
    try {
      await insertItem(paramsInsert);
    } catch {
      await updateItem(paramsInsert);
    }
    sendMessageSucessSetAdms(params as Message);
  },
} as CommandBase;
