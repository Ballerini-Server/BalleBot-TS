enum PERMISSIONS {
  "developer",
  "owner",
  "padawan",
  "administrator",
  "moderator",
  "everyone",
}

type PermissionType = keyof typeof PERMISSIONS;
