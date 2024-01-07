import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";
import {sys_user} from "../schema"
import { sys } from "typescript";

export class Entity {
    entityStructure: any

    constructor(entityStructure: any) {
        this.entityStructure = entityStructure
    }

    build(): any {
        this.entityStructure.id = integer("id").primaryKey({ autoIncrement: true })
        return this.entityStructure;
    }
}