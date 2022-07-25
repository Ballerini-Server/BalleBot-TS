import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "path";

const pathDatabase = path.resolve(__dirname, "../data/balleDatabase.db");

export function openDb() {
  return open({
    filename: pathDatabase,
    driver: sqlite3.Database,
  });
}
