const redis = require('redis');

// Create a Redis client and connect to the default Redis server (localhost:6379)
const client = redis.createClient({
  url: 'redis://127.0.0.1:6379'
});

// Handle connection events
client.on('connect', () => {
  console.log('Connected to Redis on port 6379');
});

client.on('error', (err) => {
  console.error('Redis connection error:', err);
});

// Test Redis by setting and getting a value
async function testRedis() {
  try {
    // Connect to Redis
    await client.connect();

    // Set a key-value pair
    await client.set('test-key', 'Hello Redis!');
    console.log('Value set: test-key = Hello Redis!');

    // Get the value of the key
    const value = await client.get('test-key');
    console.log('Retrieved value:', value);

    // Close the Redis connection
    await client.quit();
  } catch (err) {
    console.error('Error interacting with Redis:', err);
  }
}

// Run the Redis test
testRedis();