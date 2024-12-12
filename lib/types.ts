export type Reaction = 'like' | 'love' | 'haha' | 'wow' | 'sad';

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
  isFollowing: boolean;
}

export interface Comment {
  id: string;
  author: User;
  content: string;
  timestamp: string;
  replies?: Comment[];
  satisfiedCount?: number;
}

export interface Post {
  id: number;
  author: User;
  content: string;
  image?: string;
  timestamp: string;
  reactions: PostReaction[];  
  likes_count: number;
  comment_count: number;
  comments: Comment[];
  shares: number;
}


// const dummyUsers: User[] = [
//   { id: 1, name: 'Alice Johnson', avatar: 'https://example.com/avatar1.png', role: 'Admin' },
//   { id: 2, name: 'Bob Smith', avatar: 'https://example.com/avatar2.png' },
//   { id: 3, name: 'Carol Lee', avatar: 'https://example.com/avatar3.png', role: 'Moderator' },
// ];

// const dummyReactions: PostReaction[] = [
//   { type: 'like' as Reaction, user: dummyUsers[0], timestamp: '2024-12-08T10:30:00Z' },
//   { type: 'love' as Reaction, user: dummyUsers[1], timestamp: '2024-12-08T11:00:00Z' },
//   { type: 'haha' as Reaction, user: dummyUsers[2], timestamp: '2024-12-08T11:30:00Z' },
// ];

// const dummyPosts: Post[] = [
//   {
//     id: 1,
//     author: dummyUsers[0],
//     content: 'This is my first post! Excited to be here.',
//     timestamp: '2024-12-08T09:00:00Z',
//     reaction: [dummyReactions[0], dummyReactions[1]],
//     likes_count: 25,
//     comments: 5,
//     shares: 2,
//   },
//   {
//     id: 2,
//     author: dummyUsers[1],
//     content: 'Loving the new features on this platform!',
//     timestamp: '2024-12-08T10:00:00Z',
//     reaction: [dummyReactions[1], dummyReactions[2]],
//     likes_count: 40,
//     comments: 10,
//     shares: 5,
//   },
//   {
//     id: 3,
//     author: dummyUsers[2],
//     content: 'Any tips for getting started? Would love to hear from everyone!',
//     timestamp: '2024-12-08T11:00:00Z',
//     reaction: [dummyReactions[0]],
//     likes_count: 15,
//     comments: 8,
//     shares: 1,
//   },
// ];

// export { dummyUsers, dummyReactions, dummyPosts };