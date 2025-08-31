import React from 'react';

export default function WelcomeCard() {
  return (
    <div className="border rounded p-4 bg-white shadow-sm">
      <h2 className="text-lg font-semibold mb-2">Welcome!</h2>
      <p className="text-sm text-gray-600">Select a post or create one to get started.</p>
    </div>
  );
}
