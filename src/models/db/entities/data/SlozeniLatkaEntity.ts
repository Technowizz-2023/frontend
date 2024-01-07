import { text } from "drizzle-orm/sqlite-core";
import { LoggedEntity } from "../LoggedEntity";

export class SlozeniLatkaEntity extends LoggedEntity {
    build(): any {
        super.build()
        
        this.entityStructure.nazev = text("nazev");
        this.entityStructure.poznamka = text("poznamka");
        this.entityStructure.kod = text("kod");

        return this.entityStructure;
    }
}