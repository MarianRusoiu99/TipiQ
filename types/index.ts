export interface User {
  $id: string;
  name: string;
  email: string;
  avatarUrl?: string;
}

export interface Post {
  $id: string;
  title: string;
  content: string;
  imageUrl?: string;
  authorId: string;
  communityId: string;
  createdAt: string;
  updatedAt: string;
  votes: number;
}

export interface Comment {
  $id: string;
  content: string;
  authorId: string;
  postId: string;
  parentId?: string;
  createdAt: string;
  updatedAt: string;
  votes: number;
}

export interface Community {
  $id: string;
  name: string;
  description: string;
  imageUrl?: string;
  creatorId: string;
  createdAt: string;
  membersCount: number;
}

export interface Vote {
  $id: string;
  userId: string;
  targetId: string; // postId or commentId
  type: 'post' | 'comment';
  value: 1 | -1;
}