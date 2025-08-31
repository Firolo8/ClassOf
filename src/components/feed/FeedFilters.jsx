import React from 'react';

export default function FeedFilters({ filter, setFilter, graduationYearFilter, setGraduationYearFilter }) {
  return (
    <div className="mb-4 flex flex-col sm:flex-row gap-4">
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="all">All Posts</option>
        <option value="text">Text</option>
        <option value="image">Image</option>
      </select>
      <input
        type="number"
        value={graduationYearFilter}
        onChange={(e) => setGraduationYearFilter(e.target.value)}
        placeholder="Graduation year"
        className="border p-2 rounded"
      />
    </div>
  );
}
