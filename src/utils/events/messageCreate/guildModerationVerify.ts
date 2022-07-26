import { Message } from "eris";
import { getItem } from "../../../model/controller/balleQueries";

export async function guildModerationVerify(
  message: Message
): Promise<boolean> {
  const paramsGetAdms: ParamsGetterItem = {
    guild: message.guildID,
    id: "GUILD_ADMS",
  };
  let serverAdms: ItemDatabase;

  try {
    serverAdms = await getItem(paramsGetAdms);
  } catch {}

  return serverAdms ? true : false;
}
