type EventObject = {
  channelResponse: CommandInteraction | TextChannel;
  attachmentsReceived: string[];
  args: string[];
  member: Member;
  guild: Guild;
};
