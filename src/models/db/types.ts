import { text, integer } from "drizzle-orm/sqlite-core";

export function boolean(column: string) { return integer(column, { mode: 'boolean' }) }
export function timestamp(column: string) { return integer(column, { mode: 'timestamp' }) }
export function json(column: string) { return text(column, { mode: 'json'}) }
