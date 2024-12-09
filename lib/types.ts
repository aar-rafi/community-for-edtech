type Reaction = 'like' | 'love' | 'haha' | 'wow' | 'sad';

export interface User {
  id: number;
  name: string;
  avatar: string;
  role?: string;
}

export interface PostReaction {
  type: Reaction;
  user: User;
  timestamp: string;
}

export interface Post {
  id: number;
  author: User;
  content: string;
  timestamp: string;
  reaction: PostReaction[];
  likes_count: number;
  comments: number;
  shares: number;
}