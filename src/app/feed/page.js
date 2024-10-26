// src/app/feed/page.js
import Feed from '../components/Feed';
import PostForm from '../components/PostForm';

export default function FeedPage() {
  return (
    <main className="bg-black min-h-screen p-8 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-8">
        Social Media Feed
      </h1>
      <div className="w-full max-w-2xl">
        <PostForm />
        <Feed />
      </div>
    </main>
  );
}
