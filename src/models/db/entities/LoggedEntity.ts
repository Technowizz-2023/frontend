import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";
import {sys_user} from "../schema"
import { Entity } from "./Entity";
import { timestamp } from "../types";

export class LoggedEntity extends Entity {
    build(): any {
        super.build()

        this.entityStructure.updated_at = timestamp('created_at')
        this.entityStructure.created_at = timestamp('created_at')
        this.entityStructure.created_by_user_id = integer('created_by_user_id').references(() => sys_user.id)
        this.entityStructure.edited_by_user_id = integer('edited_by_user_id').references(() => sys_user.id)
    }
}