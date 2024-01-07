import { text } from "drizzle-orm/sqlite-core";
import { boolean } from "../../types";
import { LoggedEntity } from "../LoggedEntity";

export class PripravekEntity extends LoggedEntity {
    build(): any {
        super.build()
        
        this.entityStructure.nazev = text("nazev");
        this.entityStructure.vyrobce = text("vyrobce");
        this.entityStructure.aktivni = boolean("aktivni");
        this.entityStructure.pouziti = text("pouziti"),
        this.entityStructure.nevhodne_kombinace = text("nevhodne_kombinace")
        this.entityStructure.slozeni_dle = text("slozeni_dle")

        return this.entityStructure;
    }
}