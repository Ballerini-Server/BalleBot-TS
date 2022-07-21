import { Member, Message } from "eris";
import { Ballebot } from "../../structures/Client";

const regexForRemoveMention =
  /(<@(!?)(?=[0-9]{18}))|((?<=[0-9]{18})>)|(<(?=[0-9]{18}))/g;

export async function getMembersFromCommands(
  message: Message
): Promise<Member[]> {
  const args = message.content.slice(1).split(/ +/);
  const membersInMessage = [];

  const promiseMembers = args.map((text) => {
    const itemArgs = text.replace(regexForRemoveMention, "");

    if (!(itemArgs.length === 18)) return;

    const member = message.member.guild.members.get(itemArgs);

    if (!member) return;

    membersInMessage.push(member);
  });

  await Promise.all(promiseMembers);

  return membersInMessage;
}

export async function getMembersFromBanishments(
  message: Message
): Promise<BannedUser[]> {
  const args = message.content.slice(1).split(/ +/);
  const bannedUsers: BannedUser[] = [];

  const promiseMembers = args.map(async (text) => {
    const textId = text.replace(regexForRemoveMention, "");

    if (!(textId.length === 18)) return;

    const ballebot = Ballebot.getInstance();

    const bannedUser = (await ballebot.getGuildBans(message.guildID)).find(
      (obj) => obj.user.id === textId
    );
    if (!bannedUser) return;
    bannedUsers.push(bannedUser);
  });

  await Promise.all(promiseMembers);

  return bannedUsers;
}
