import { drizzle } from 'drizzle-orm/bun-sqlite';
import { Database } from 'bun:sqlite';
const sqlite = new Database('bin/sqlite.db');

export const database = drizzle(sqlite);