import redis from '../../lib/redis';

export async function GET(request) {
  try {
    // Execute lrange command
    const posts = await redis.sendCommand(['LRANGE', 'posts', '0', '-1']);
    
    // Return the posts as a JSON response
    return new Response(JSON.stringify(posts.map(JSON.parse)), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return new Response('Error fetching posts', { status: 500 });
  }
}

export async function POST(request) {
  try {
    const { user, content } = await request.json();

    // Create a new post object
    const newPost = { id: Date.now(), user, content, timestamp: new Date().toISOString() };

    // Add the new post to the Redis list
    await redis.sendCommand(['LPUSH', 'posts', JSON.stringify(newPost)]);

    // Return the newly created post as a JSON response
    return new Response(JSON.stringify(newPost), { status: 201 });
  } catch (error) {
    console.error('Error adding post:', error);
    return new Response('Error adding post', { status: 500 });
  }
}
