import { boolean, decimal, integer, pgTable, primaryKey, text, timestamp, uuid } from "drizzle-orm/pg-core";

// TODO: change auth table names for consistency once https://github.com/nextauthjs/next-auth/pull/8344 is merged

// Auth tables needed for @authjs
export const users = pgTable("user", {
  id: uuid("id").notNull().primaryKey(),
  name: text("name"),
  email: text("email").notNull(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image"),
  password: text("password"),
  admin: boolean("admin").default(false).notNull(),
});

export const accounts = pgTable(
  "account",
  {
    userId: uuid("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: text("type").$type<"oauth" | "oidc" | "email">().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => ({
    compoundKey: primaryKey({ columns: [account.provider, account.providerAccountId] }),
  }),
);

export const verificationTokens = pgTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }),
  }),
);

// Product table
export const products = pgTable("products", {
  id: integer("id").notNull().primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  images: text("photos").$type<string[]>().default([]).notNull(),
  price: decimal("price", { precision: 10, scale: 2 }).default("0.00").notNull(),
  stock: integer("stock").default(0).notNull(),
  tags: text("tags").$type<string[]>().default([]).notNull(),
  createdAt: timestamp("createdAt", { mode: "date" }).defaultNow().notNull(),
});

// Cart table
export const cart = pgTable("carts", {
  id: integer("id").notNull().primaryKey(),
  userId: uuid("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  productId: integer("productId")
    .notNull()
    .references(() => products.id, { onDelete: "cascade" }),
  quantity: integer("quantity").notNull(),
  adjustedPrice: integer("adjustedPrice").notNull(),
});

// Order table
export enum OrderStatus {
  CREATED = "created",
  EXPEDITED = "expedited",
  PROGRESS = "in progress",
  DELIVERED = "delivered",
}

export const orders = pgTable("orders", {
  id: integer("id").notNull().primaryKey(),
  userId: uuid("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  stripeSession: text("stripeSession").notNull(),
  status: text("status").$type<OrderStatus>().notNull(),
  total: integer("total").notNull(),
});
