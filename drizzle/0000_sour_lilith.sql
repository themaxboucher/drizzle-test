CREATE TABLE "todos" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(256) NOT NULL,
	"completed" text DEFAULT 'false',
	"created_at" timestamp DEFAULT now()
);
