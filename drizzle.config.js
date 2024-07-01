/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://ai-interview-mocker_owner:0isdEUJG2foI@ep-small-sun-a581n790.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require',
    }
  };
  