import { pgTable, text, varchar, integer, date, jsonb, timestamp } from "drizzle-orm/pg-core";

export const projects = pgTable("projects", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description").notNull(),
  techStack: jsonb("tech_stack").$type<string[]>().notNull(),
  keyFeatures: jsonb("key_features").$type<string[]>(),
  demoUrl: varchar("demo_url", { length: 500 }),
  repoUrl: varchar("repo_url", { length: 500 }),
  image: varchar("image", { length: 500 }),
  projectDate: varchar("project_date", { length: 20 }),
  concept: text("concept"),
  challenge: text("challenge"),
  impact: text("impact"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const certificates = pgTable("certificates", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  name: varchar("name", { length: 255 }).notNull(),
  institution: varchar("institution", { length: 255 }).notNull(),
  date: date("date").notNull(),
  image: varchar("image", { length: 500 }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const personalInfo = pgTable("personal_info", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  name: varchar("name", { length: 255 }).notNull(),
  age: integer("age").notNull(),
  phone: varchar("phone", { length: 50 }),
  email: varchar("email", { length: 255 }).notNull(),
  socialLinks: jsonb("social_links").$type<{
    github?: string;
    linkedin?: string;
    instagram?: string;
    twitter?: string;
  }>(),
  location: varchar("location", { length: 255 }),
  profilePhoto: varchar("profile_photo", { length: 500 }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export type Project = typeof projects.$inferSelect;
export type NewProject = typeof projects.$inferInsert;
export type Certificate = typeof certificates.$inferSelect;
export type NewCertificate = typeof certificates.$inferInsert;
export type PersonalInfo = typeof personalInfo.$inferSelect;
export type NewPersonalInfo = typeof personalInfo.$inferInsert;

