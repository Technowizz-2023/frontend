import type { Config } from "drizzle-kit";

export default {
  schema: "src/models/db/schema.ts",
  out: "database/migrations",
  driver: "better-sqlite",
  dbCredentials: {
    url: "database/local.db",
  },
  verbose: true,
  strict: true,
} satisfies Config;