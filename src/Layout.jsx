import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, User, MessageSquare, Search as SearchIcon, Plus } from 'lucide-react';
import { createPageUrl } from './utils/index.js';

// Define the navigation items once.  createPageUrl converts a
// page name to a route path.  See utils/index.js for details.
const navigationItems = [
  { title: 'Feed', url: createPageUrl('Feed'), icon: Home },
  { title: 'Communities', url: createPageUrl('Communities'), icon: Users },
  { title: 'Social', url: createPageUrl('Social'), icon: MessageSquare },
  { title: 'Search', url: createPageUrl('Search'), icon: SearchIcon },
  { title: 'Create Post', url: createPageUrl('CreatePost'), icon: Plus },
  { title: 'Profile', url: createPageUrl('Profile'), icon: User },
];

/**
 * Layout wraps each page with a sidebar navigation.  The sidebar
 * highlights the current route and links to the major sections of the
 * application.  Children are rendered in the main area on the right.
 */
export default function Layout({ children }) {
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-slate-50">
      <nav className="hidden md:block w-64 border-r border-slate-200 bg-white">
        <div className="p-6 flex items-center gap-3 border-b border-slate-100">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg">C</span>
          </div>
          <div>
            <h2 className="font-bold text-slate-900 text-lg">ClassOf</h2>
            <p className="text-xs text-slate-500">Connect. Learn. Grow.</p>
          </div>
        </div>
        <ul className="p-4 space-y-1">
          {navigationItems.map((item) => {
            const isActive = location.pathname === item.url;
            const ItemIcon = item.icon;
            return (
              <li key={item.title}>
                <Link
                  to={item.url}
                  className={`flex items-center gap-3 rounded-md py-3 px-4 transition-colors duration-200 hover:bg-slate-100 ${isActive ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border-l-4 border-blue-500' : ''}`}
                >
                  <ItemIcon className="w-5 h-5" />
                  <span className="font-medium">{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      {/* Mobile header */}
      <header className="md:hidden bg-white border-b border-slate-200 px-6 py-4 flex items-center gap-4">
        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          ClassOf
        </h1>
      </header>
      <main className="flex-1 overflow-auto p-4">
        {children}
      </main>
    </div>
  );
}
