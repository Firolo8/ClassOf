/*
 * Stub implementations for data entities used throughout the ClassOf application.
 * These in-memory stores allow the app to function without a backend.
 */

// In-memory stores
const posts = [];
const communities = [];
const replies = [];
const prompts = [];

// Mock current user
const currentUser = {
  id: 1,
  full_name: 'Demo User',
  email: 'demo@example.com',
  profile_image_url: '',
  graduation_year: new Date().getFullYear(),
  education_level: 'university',
};

export const User = {
  async me() {
    return { ...currentUser };
  },
  async filter(criteria) {
    if (criteria.email) {
      return [currentUser].filter((u) => u.email === criteria.email);
    }
    return [];
  },
};

export const Post = {
  async list() {
    return [...posts];
  },
  async create(data) {
    const id = Date.now();
    const newPost = {
      id,
      created_date: new Date().toISOString(),
      likes_count: 0,
      replies_count: 0,
      ...data,
      created_by: currentUser.email,
    };
    posts.unshift(newPost);
    return newPost;
  },
  async filter(criteria) {
    return posts.filter((post) => {
      return Object.entries(criteria).every(([key, value]) => post[key] === value);
    });
  },
};

export const Reply = {
  async list(filter = {}) {
    return replies.filter((reply) => {
      return Object.entries(filter).every(([key, value]) => reply[key] === value);
    });
  },
  async create(data) {
    const id = Date.now();
    const newReply = {
      id,
      created_date: new Date().toISOString(),
      ...data,
    };
    replies.push(newReply);
    const post = posts.find((p) => p.id === data.post_id);
    if (post) {
      post.replies_count = (post.replies_count || 0) + 1;
    }
    return newReply;
  },
};

export const Community = {
  async list() {
    return [...communities];
  },
  async create(data) {
    const id = Date.now();
    const newCommunity = {
      id,
      created_date: new Date().toISOString(),
      member_count: 0,
      ...data,
    };
    communities.unshift(newCommunity);
    return newCommunity;
  },
  async filter(criteria) {
    return communities.filter((community) => {
      return Object.entries(criteria).every(([key, value]) => community[key] === value);
    });
  },
};

export const Prompt = {
  async list() {
    return [...prompts];
  },
  async create(data) {
    const id = Date.now();
    const newPrompt = {
      id,
      created_date: new Date().toISOString(),
      ...data,
    };
    prompts.unshift(newPrompt);
    return newPrompt;
  },
};

export default {
  User,
  Post,
  Reply,
  Community,
  Prompt,
};
