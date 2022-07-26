import { Message } from "eris";
import { getItem } from "../../../model/controller/balleQueries";
import { CommandBase } from "../../../structures/Command";

export async function userHasPermission(
  message: Message,
  commandToRun: CommandBase
): Promise<boolean> {
  const developersList = process.env.DEVELOPERS?.split("|");
  if (developersList.includes(message.author.id)) {
    return true;
  }

  if (commandToRun.dm && !commandToRun.permission.includes("developer")) {
    return true;
  }

  const getRoles: ParamsGetterItem = {
    guild: message.guildID,
    id: "GUILD_ADMS",
  };

  const rolesInDatabase = (await getItem(getRoles)).DATA;

  const rolesOfUser = message.member.roles;

  const rolesThatTheUserHas = Object.keys(rolesInDatabase).filter((nameRole) =>
    rolesOfUser.includes(rolesInDatabase[nameRole])
  );

  const dicRoles = {
    owner: 4,
    administrator: 3,
    moderator: 2,
    padawan: 1,
    everyone: 0,
  };

  let higthRole: PermissionType = "everyone";

  if (
    message.member.guild.ownerID === message.author.id ||
    message.member.permissions.has("administrator")
  ) {
    higthRole = "owner";
  }

  rolesThatTheUserHas?.forEach((role: PermissionType) => {
    if (dicRoles[role] > dicRoles[higthRole]) higthRole = role;
  });

  const permissionsOfCommand: PermissionType = commandToRun.permission;

  const userHasPermission: boolean = permissionsOfCommand.includes(higthRole);

  return userHasPermission;
}
