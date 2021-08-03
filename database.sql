
CREATE TABLE "users" (
	"id" SERIAL PRIMARY KEY, 
	"username" VARCHAR(20) NOT NULL, 
	"password" VARCHAR(1000) NOT NULL, 
	"email" VARCHAR(30) NOT NULL, 
	"steam_id" VARCHAR(70) NOT NULL, 
	"discord_id" VARCHAR(30)
	);

CREATE TABLE "steam-info" (
	"id" SERIAL PRIMARY KEY,
	"steam_id" VARCHAR(70) NOT NULL,
	"avatar" VARCHAR(255) NOT NULL,
	"persona" VARCHAR(50) NOT NULL,
	"profile_url" VARCHAR(255) NOT NULL
	);