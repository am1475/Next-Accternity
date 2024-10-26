// src/app/feed/PostItem.js
export default function PostItem({ post }) {
  return (
    <div className="border border-gray-700 p-4 my-2 bg-gray-800 rounded-md">
      <p className="text-white font-semibold mb-1">{post.user}:</p>
      <p className="text-gray-200 mb-2">{post.content}</p>
      <span className="text-gray-400 text-sm">{new Date(post.timestamp).toLocaleString()}</span>
    </div>
  );
}
