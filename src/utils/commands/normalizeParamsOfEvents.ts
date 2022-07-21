import { CommandInteraction, Message } from "eris";

export function normalizeParamsOfEvents(
  params: Message | CommandInteraction
): ParamsCommandProps {
  let objParams: ParamsCommandProps;

  if (params instanceof Message) {
    objParams = paramsMessage(params);
  } else if (params instanceof CommandInteraction) {
    objParams = paramsInteraction(params);
  }

  return objParams;
}

let args: string[] = [];

function paramsMessage(params: Message): ParamsCommandProps {
  const channelResponse = params.channel;
  const attachmentsReceived = params.attachments?.map((att) => att.url) || null;
  const args = params.content.slice(1).split(/ +/);

  args.splice(0, 1);

  return {
    channelResponse,
    attachmentsReceived,
    args,
  };
}

function paramsInteraction(params: CommandInteraction): ParamsCommandProps {
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
  return {
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
