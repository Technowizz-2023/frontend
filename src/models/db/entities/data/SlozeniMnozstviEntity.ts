import { text } from "drizzle-orm/sqlite-core";
import { LoggedEntity } from "../LoggedEntity";

export class SlozeniMnozstviEntity extends LoggedEntity {
    build(): any {
        super.build()

        this.entityStructure.mnozstvi = text("mnozstvi") // can be "10%-50%", or 10% or nothing

        return this.entityStructure;
    }
}