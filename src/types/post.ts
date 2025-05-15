
export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  bio?: string;
  followers: number;
  following: number;
}

export interface Post {
  id: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
  date: string;
  timeAgo: string;
  author: User;
}
