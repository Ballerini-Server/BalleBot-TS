import { openDb } from "../configDatabase/openDb";

export async function insertUser(params: ParamsInsertUser) {
  return openDb().then(async (db) => {
    const tableQuery = `CREATE TABLE IF NOT EXISTS GUILD_${params.guild} ( ID TEXT PRIMARY KEY NOT NULL, DATA TEXT NOT NULL)`;
    await db.exec(tableQuery);

    const insertQuery = `INSERT INTO GUILD_${
      params.guild
    } ('ID', 'DATA') VALUES ('USER_${params.user}', '${JSON.stringify(
      params.data
    )}')`;
    try {
      await db.exec(insertQuery);
      return "sucess";
    } catch {
      return "error";
    }
  });
}

export async function updateUser(params: ParamsInsertUser) {
  return openDb().then(async (db) => {
    const tableQuery = `CREATE TABLE IF NOT EXISTS GUILD_${params.guild} ( ID TEXT PRIMARY KEY NOT NULL, DATA TEXT NOT NULL)`;
    await db.exec(tableQuery);

    const userSelect = `SELECT ID FROM GUILD_${params.guild} WHERE ID='USER_${params.user}'`;
    const userExist = await db.get(userSelect);

    if (!userExist) {
      return "error";
    }

    const updateQuery = `UPDATE GUILD_${
      params.guild
    } SET DATA='${JSON.stringify(params.data)}' WHERE ID='USER_${params.user}'`;

    try {
      await db.run(updateQuery);
      return "sucess";
    } catch {
      return "error";
    }
  });
}

export async function deleteUser(params: ParamsGetterUser) {
  return openDb().then(async (db) => {
    const query = `SELECT * FROM GUILD_${params.guild} WHERE ID='USER_${params.user}'`;
    const user = await db.get(query);
    if (!user) {
      return "error";
    }

    try {
      const deleteQuery = `DELETE FROM GUILD_${params.guild} WHERE ID='USER_${params.user}'`;
      await db.run(deleteQuery);
      return "sucess";
    } catch {
      return "error";
    }
  });
}

export async function getUser(params: ParamsGetterUser) {
  return openDb().then(async (db) => {
    const query = `SELECT * FROM GUILD_${params.guild} WHERE ID='USER_${params.user}'`;
    const user = await db.get(query);

    if (!user) {
      return "error";
    }
    return user;
  });
}
