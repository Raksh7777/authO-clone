const redis = require("redis");

let client;
(async () => {
const redisUrl = `redis://${process.env.REDIS_USERNAME}:${process.env.REDIS_PASSWORD}@${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`
// client = redis.createClient({
//   host: process.env.REDIS_HOST,
//   port: process.env.REDIS_PORT,
//   // password:process.env.REDIS_PASSWORD,
// });
client = redis.createClient({url:redisUrl})
client.connect();

client.on("error", (err) => console.log("Redis Client Error", err));


client.on("connect", () => {
  console.log("connected redis");
});
})();

module.exports = client;
