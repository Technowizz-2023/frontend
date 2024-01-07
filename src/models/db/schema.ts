import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

import { boolean, json } from "./types";
import { LoggedEntity } from "./entities/LoggedEntity";
import { PripravekEntity } from "./entities/data/PripravekEntity";
import { SlozeniLatkaEntity } from "./entities/data/SlozeniLatkaEntity";
import { SlozeniMnozstviEntity } from "./entities/data/SlozeniMnozstviEntity";

// system
export const sys_user = sqliteTable("sys_user", new LoggedEntity({ // user entity 
    firstname: text("firstname"),
    surname: text("surname"),
    email: text("email"),
    phone_number: text("phone_number"), // TODO: validation of czech phone number
    password: text("password"), // hashed
    root_admin: boolean("root_admin"),
}).build())

export const sys_history = sqliteTable("sys_history", new LoggedEntity({ // history of any action in application
    table: text("table"),
    changes: json("changes"),
    row_id: integer("row_id"), // virtual foreign key to row of 'table' table
    action_type: text("action_type"), // create enum
}).build())

export const sys_access_log = sqliteTable("sys_access_log", new LoggedEntity({
    device: text("device"), // webkit or IP 
}).build())

// dyn
export const dyn_row_note = sqliteTable("dyn_row_note", new LoggedEntity({ // comment to some data point
    global: boolean("global"),
    note: text("note"),
    eav_table: text("eav_table"),
    eav_row_id: text("eav_row_id"),
    eav_column: text("eav_column"),
}).build())

export const dyn_view_note = sqliteTable("dyn_view_note", new LoggedEntity({
    frontend_view: text("frontend_view"), // name of component/view
    note: text("note"),
    global: text("global"),
}).build())

// data
export const data_cistic = sqliteTable("data_cistic", new PripravekEntity({}).build())
export const data_kluzny_lak = sqliteTable("data_kluzny_lak", new PripravekEntity({}).build())
export const data_granulat = sqliteTable("data_granulat", new PripravekEntity({
    typ_id: integer("typ_id"), // relation
    k: integer("k"),
    active: boolean("active"), // can be empty ... NULL/empty !== false/0
    kombinace: text("kombinace"),
    cisteni: text("cisteni"),
}).build())
export const data_lepidlo = sqliteTable("data_lepidlo", new PripravekEntity({}).build())
export const data_redidlo = sqliteTable("data_redidlo", new PripravekEntity({}).build())

export const data_cistic_slozeni_latka = sqliteTable("data_cistic_slozeni_latka", new SlozeniLatkaEntity({}).build())
export const data_kluzny_lak_slozeni_latka = sqliteTable("data_kluzny_lak_slozeni_latka", new SlozeniLatkaEntity({}).build())
export const data_granulat_slozeni_latka = sqliteTable("data_granulat_slozeni_latka", new SlozeniLatkaEntity({}).build())
export const data_lepidlo_slozeni_latka = sqliteTable("data_lepidlo_slozeni_latka", new SlozeniLatkaEntity({}).build())
export const data_redidlo_slozeni_latka = sqliteTable("data_redidlo_slozeni_latka", new SlozeniLatkaEntity({}).build())

export const data_granulat_typ = sqliteTable("data_granulat_typ", new LoggedEntity({

}).build())

export const data_cistic_slozeni_mnozstvi = sqliteTable("data_cistic_slozeni_mnozstvi", new SlozeniMnozstviEntity({
    slozeni_latka_id: integer("slozeni_latka_id").references(() => data_cistic_slozeni_latka.id),
    cistic_id: integer("cistic_id").references(() => data_cistic.id),
}).build())

export const data_kluzny_lak_slozeni_mnozstvi = sqliteTable("data_kluzny_lak_slozeni_mnozstvi", new SlozeniMnozstviEntity({
    slozeni_latka_id: integer("slozeni_latka_id").references(() => data_kluzny_lak_slozeni_latka.id),
    kluzny_lak_id: integer("kluzny_lak_id").references(() => data_kluzny_lak.id),
}).build())

export const data_granulat_slozeni_mnozstvi = sqliteTable("data_granulat_slozeni_mnozstvi", new SlozeniMnozstviEntity({
    slozeni_latka_id: integer("slozeni_latka_id").references(() => data_granulat_slozeni_latka.id),
    granulat_id: integer("granulat_lak_id").references(() => data_granulat.id),
}).build())

export const data_lepidlo_slozeni_mnozstvi = sqliteTable("data_lepidlo_slozeni_mnozstvi", new SlozeniMnozstviEntity({
    slozeni_latka_id: integer("slozeni_latka_id").references(() => data_lepidlo_slozeni_latka.id),
    lepidlo_id: integer("lepidlo_lak_id").references(() => data_lepidlo.id),
}).build())

export const data_redidlo_slozeni_mnozstvi = sqliteTable("data_redidlo_slozeni_mnozstvi", new SlozeniMnozstviEntity({
    slozeni_latka_id: integer("slozeni_latka_id").references(() => data_redidlo_slozeni_latka.id),
    redidlo_id: integer("redidlo_lak_id").references(() => data_redidlo.id),
}).build())