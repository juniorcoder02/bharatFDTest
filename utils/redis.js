const redis = require("redis");
const client = redis.createClient();

client.on("connect", () => console.log("Connected to Redis"));

client.on("error", (err) => console.error("Redis Error:", err));

module.exports = {
  get: (key) => new Promise((resolve, reject) => {
    client.get(key, (err, data) => (err ? reject(err) : resolve(data)));
  }),
  set: (key, value, exp = "EX", time = 3600) => client.set(key, value, exp, time),
};
