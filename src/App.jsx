import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout.jsx';

// Pages
import Feed from './pages/Feed.jsx';
import Communities from './pages/Communities.jsx';
import CreatePost from './pages/CreatePost.jsx';
import Profile from './pages/Profile.jsx';
import Search from './pages/Search.jsx';
import Social from './pages/Social.jsx';

// A simple component displayed when no route matches
function NotFound() {
  return <div className="p-6">Page not found</div>;
}

/**
 * The top‑level application component.  It wraps all pages in a
 * persistent layout and sets up client‑side routing via
 * react‑router‑dom.  Paths are kept simple and lowercase to make URLs
 * human friendly.  See src/utils/index.js for route helpers used
 * elsewhere in the application.
 */
export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/communities" element={<Communities />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<Search />} />
          <Route path="/social" element={<Social />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
