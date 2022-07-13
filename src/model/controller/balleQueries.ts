import { openDb } from "../config/openDb";
import { InvalidInsertItem, InvalidUnknownItem } from "../errors/Errors";

export async function insertItem(params: ParamsInsertItem) {
  return openDb().then(async (db) => {
    const tableQuery = `CREATE TABLE IF NOT EXISTS GUILD_${params.guild} ( ID TEXT PRIMARY KEY NOT NULL, DATA TEXT NOT NULL)`;
    await db.exec(tableQuery);

    const itemSelectQuery = `SELECT ID FROM GUILD_${params.guild} WHERE ID='${params.id}'`;
    const itemExist = await db.get(itemSelectQuery);

    if (itemExist) {
      throw new InvalidInsertItem();
    }

    const insertQuery = `INSERT INTO GUILD_${
      params.guild
    } ('ID', 'DATA') VALUES ('${params.id}', '${JSON.stringify(params.data)}')`;

    await db.exec(insertQuery);
    return;
  });
}

export async function updateItem(params: ParamsInsertItem) {
  return openDb().then(async (db) => {
    const tableQuery = `CREATE TABLE IF NOT EXISTS GUILD_${params.guild} ( ID TEXT PRIMARY KEY NOT NULL, DATA TEXT NOT NULL)`;
    await db.exec(tableQuery);

    const itemSelectQuery = `SELECT ID FROM GUILD_${params.guild} WHERE ID='${params.id}'`;
    const itemExist = await db.get(itemSelectQuery);

    if (!itemExist) {
      throw new InvalidUnknownItem();
    }

    const updateQuery = `UPDATE GUILD_${
      params.guild
    } SET DATA='${JSON.stringify(params.data)}' WHERE ID='${params.id}'`;

    await db.run(updateQuery);
    return;
  });
}

export async function deleteItem(params: ParamsGetterItem) {
  return openDb().then(async (db) => {
    const selectQuery = `SELECT * FROM GUILD_${params.guild} WHERE ID='${params.id}'`;
    const item = await db.get(selectQuery);
    if (!item) {
      throw new InvalidUnknownItem();
    }

    const deleteQuery = `DELETE FROM GUILD_${params.guild} WHERE ID='${params.id}'`;
    await db.run(deleteQuery);
    return;
  });
}

export async function getItem(params: ParamsGetterItem) {
  return openDb().then(async (db) => {
    const selectQuery = `SELECT * FROM GUILD_${params.guild} WHERE ID='${params.id}'`;
    const item = await db.get(selectQuery);

    if (!item) {
      throw new InvalidUnknownItem();
    }
    return item;
  });
}

export async function getAllUser(guild: string) {
  return openDb().then(async (db) => {
    const selectQuery = `SELECT * FROM ${guild} WHERE ID LIKE 'USER_%'`;
    const users = db.get(selectQuery);
    if (!users) {
      throw new InvalidUnknownItem();
    }
    return users;
  });
}
