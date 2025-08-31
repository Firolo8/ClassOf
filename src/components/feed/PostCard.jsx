import React from 'react';

export default function PostCard({ post }) {
  if (!post) return null;
  return (
    <div className="border rounded p-4 shadow-sm bg-white">
      <h3 className="font-semibold">{post.user?.name || 'Unknown'}</h3>
      <p className="text-sm text-gray-700">{post.content}</p>
    </div>
  );
}
