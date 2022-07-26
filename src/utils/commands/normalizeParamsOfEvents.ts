import { CommandInteraction, Message } from "eris";

export function normalizeParamsOfEvents(
  params: Message | CommandInteraction
): EventObject {
  let objParams: EventObject;

  if (params instanceof Message) {
    objParams = paramsMessage(params);
  } else if (params instanceof CommandInteraction) {
    objParams = paramsInteraction(params);
  }

  return objParams;
}

let args: string[] = [];

function paramsMessage(params: Message): EventObject {
  const channelResponse = params.channel;
  const attachmentsReceived = params.attachments?.map((att) => att.url) || null;
  const args = params.content.split(/ +/);
  const member = params.member;
  const guild = params.member.guild;

  return {
    guild,
    member,
    channelResponse,
    attachmentsReceived,
    args,
  };
}

function paramsInteraction(params: CommandInteraction): EventObject {
  const channelResponse = params;
  const paramsData = params.data;

  const attachmentsReceived = paramsData.resolved
    ? Object.keys(paramsData.resolved["attachments"]).map(
        (att) => paramsData.resolved["attachments"][att].url
      )
    : null;

  if (params.data.options) {
    recursiveArgs(params.data.options);
  }

  const member = params.member;
  const guild = member.guild;
  return {
    guild,
    member,
    channelResponse,
    attachmentsReceived,
    args,
  };
}
function recursiveArgs(options) {
  if (options[0].options) {
    recursiveArgs(options[0].options);
  }

  args.push(options[0].value || options[0].name);
}
