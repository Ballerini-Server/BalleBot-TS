import sqlite3 from "sqlite3";
import { open } from "sqlite";

export function openDb() {
  return open({
    filename: "./src/model/data/balleDatabase.db",
    driver: sqlite3.Database,
  });
}
