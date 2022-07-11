export abstract class Command implements CommandType {
  name: string;

  description: string;

  permissions: PermissionType[];

  category: CategoryCommand;

  aliases?: string[];

  dm?: boolean;

  run: RunFunction;
}
