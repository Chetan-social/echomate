
import { User } from '@/types/post';

export const currentUser: User = {
  id: 'user-1',
  name: 'Alex Johnson',
  username: 'alexj',
  avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&h=400&auto=format&fit=crop&q=80',
  bio: 'Digital enthusiast. Coffee lover. Tech blogger at @techcrunch.',
  followers: 1024,
  following: 235
};

export const suggestedUsers: User[] = [
  {
    id: 'user-2',
    name: 'Emma Wilson',
    username: 'emmaw',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&auto=format&fit=crop&q=80',
    followers: 5462,
    following: 123
  },
  {
    id: 'user-3',
    name: 'Marcus Chen',
    username: 'marcuschen',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&auto=format&fit=crop&q=80',
    followers: 2341,
    following: 432
  },
  {
    id: 'user-4',
    name: 'Sophia Patel',
    username: 'sophiap',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop&q=80',
    followers: 8765,
    following: 542
  },
  {
    id: 'user-5',
    name: 'David Kim',
    username: 'davidk',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&auto=format&fit=crop&q=80',
    followers: 3214,
    following: 321
  }
];

export const allUsers = [currentUser, ...suggestedUsers];
