enum PERMISSIONS {
  "adm",
  "padawan",
  "administrators",
  "moderators",
  "everyone",
}

type PermissionType = keyof typeof PERMISSIONS;
