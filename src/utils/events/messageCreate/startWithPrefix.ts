import { Message } from "eris";
import { getItem } from "../../../model/controller/balleQueries";

export async function startWithPrefix(message: Message): Promise<boolean> {
  let { PREFIX } = process.env;

  const params: ParamsGetterItem = {
    guild: message.guildID,
    id: "GUILD_PREFIX",
  };

  let serverTable: ItemDatabase;
  try {
    serverTable = await getItem(params);
  } catch {}

  if (serverTable) {
    PREFIX = serverTable.DATA;
  }
  if (message.content.startsWith(PREFIX)) return true;
  return false;
}
