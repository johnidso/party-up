CREATE TABLE "users" (
	"id" SERIAL PRIMARY KEY, 
	"username" VARCHAR(20) NOT NULL, 
	"password" VARCHAR(1000) NOT NULL, 
	"email" VARCHAR(30) NOT NULL, 
	"steam_id" BIGINT NOT NULL, 
	"discord_id" VARCHAR(30)
	);

CREATE TABLE "steam_info" (
	"id" SERIAL PRIMARY KEY,
	"steam_id" BIGINT NOT NULL,
	"avatar" VARCHAR(255) NOT NULL,
	"persona" VARCHAR(50) NOT NULL,
	"profile_url" VARCHAR(255) NOT NULL
	);

CREATE TABLE "playlist" (
	"id" SERIAL PRIMARY KEY, 
	"steam_id" BIGINT NOT NULL,
	"game_id" BIGINT NOT NULL,
	"image" VARCHAR(255) NOT NULL
	);

CREATE TABLE "party" (
	"id" SERIAL PRIMARY KEY,
	"user_id" BIGINT NOT NULL, 
	"friend_id" BIGINT NOT NULL
	);

CREATE TABLE "events" (
	"id" SERIAL PRIMARY KEY, 
	"host_id" BIGINT NOT NULL,
	"attendee_id" BIGINT NOT NULL,
	"event_time" TIMESTAMP WITH TIME ZONE NOT NULL, 
	"game_id" BIGINT NOT NULL
	);
	