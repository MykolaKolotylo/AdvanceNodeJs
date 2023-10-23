const redis = require('redis');

const redisUrl = 'redis://127.0.0.1:6379'

const client = redis.createClient(redisUrl);

client.set('hey', 'there');

client.get('hey', (err, value) => console.log("redis value: ", value));
