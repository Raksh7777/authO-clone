const redis = require("redis");

const redisPort = 6379;
const client = redis.createClient();

(async () => {
  client.on("error", (err) => console.log("Redis Client Error", err));

  await client.connect();
})();
client.on("connect", () => {
  console.log("connected");
});
module.exports = client;
