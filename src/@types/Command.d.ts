declare global {
  interface RunOptions {
    interaction?: ExtendedInteraction;
  }

  type RunFunction = (options: RunOptions) => void;

  type CommandType = {
    name: string;
    description: string;
    permissions: PermissionType[];
    category: CategoryCommand;
    aliases?: string[];
    dm?: boolean;
    run: RunFunction;
  };
}
export {};
