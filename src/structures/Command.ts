export abstract class CommandBase implements CommandType {
  name: string;

  description: string;

  permission: PermissionType;

  category: CategoryCommand;

  aliases?: string[];

  dm?: boolean;

  optionsSlash?: OpcionalCommandOptions[];

  run: RunFunction;
}
