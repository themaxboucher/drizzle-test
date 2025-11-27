CREATE TABLE "projects" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256) NOT NULL,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" varchar(50) NOT NULL
);
--> statement-breakpoint
ALTER TABLE "todos" ALTER COLUMN "completed" SET DATA TYPE varchar(5);--> statement-breakpoint
ALTER TABLE "todos" ALTER COLUMN "completed" SET DEFAULT 'false';