import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export async function openDb() {
  return open({
    filename: './hardware.db',
    driver: sqlite3.Database,
  });
}

export async function initDb() {
  const db = await openDb();
  await db.exec(`
    CREATE TABLE IF NOT EXISTS componente (
      codigo_componente INTEGER PRIMARY KEY AUTOINCREMENT,
      nome_componente TEXT NOT NULL,
      desc_componente TEXT
    );
  `);
}
