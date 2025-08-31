import React, { useState, useEffect } from 'react';
import { Post, User } from '@/entities/all';
import { createPageUrl } from '@/utils';
import PostCard from '../components/feed/PostCard';
import FeedFilters from '../components/feed/FeedFilters';
import WelcomeCard from '../components/feed/WelcomeCard';

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [graduationYearFilter, setGraduationYearFilter] = useState('all');

  useEffect(() => {
    async function load() {
      const user = await User.me();
      setCurrentUser(user);
      const allPosts = await Post.list();
      setPosts(allPosts);
      setIsLoading(false);
    }
    load();
  }, []);

  const filteredPosts = posts.filter((post) => {
    if (filter !== 'all' && post.post_type !== filter) return false;
    if (graduationYearFilter !== 'all' && post.graduation_year !== parseInt(graduationYearFilter)) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="max-w-4xl mx-auto p-4">
        {!currentUser?.graduation_year && <WelcomeCard />}
        <div className="mb-4">
          <FeedFilters
            filter={filter}
            setFilter={setFilter}
            graduationYearFilter={graduationYearFilter}
            setGraduationYearFilter={setGraduationYearFilter}
          />
        </div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="space-y-4">
            {filteredPosts.map((post) => (
              <PostCard key={post.id} post={post} currentUser={currentUser} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
