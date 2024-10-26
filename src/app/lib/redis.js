// redisClient.js
import { createClient } from 'redis';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const client = createClient({
    password: process.env.REDIS_PASSWORD,
    socket: {
        host: process.env.REDIS_HOST,
        port: Number(process.env.REDIS_PORT)
    }
});

client.connect()
    .then(() => console.log('Connected to Redis'))
    .catch(console.error);

export default client; // Export the client to use in other parts of your app
