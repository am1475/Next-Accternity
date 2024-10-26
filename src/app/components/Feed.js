// src/components/Feed.js
"use client"
import { useEffect, useState } from 'react';
import PostItem from '../feed/PostItem';

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch('/api/posts');
      const data = await res.json();
      setPosts(data);
    }
    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}
