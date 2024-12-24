/** @type {import("drizzle-kit").Config}*/

import { defineConfig } from "drizzle-kit";

export default defineConfig({
    schema: "./utils/schema.js",
    dialect: "postgresql",
    dbCredentials : {
        url : "postgresql://neondb_owner:OqmWCKyRGJ17@ep-autumn-pond-a5pf8hl3.us-east-2.aws.neon.tech/Ai-interview%20mocker?sslmode=require",
    }
});
