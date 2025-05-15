
import { Post } from '@/types/post';
import { allUsers } from './users';

export const posts: Post[] = [
  {
    id: 'post-1',
    content: 'Just launched my new website! Check it out and let me know what you think. #webdev #design',
    likes: 24,
    comments: 5,
    shares: 2,
    date: '2023-05-04T14:23:00Z',
    timeAgo: '5m ago',
    author: allUsers[0]
  },
  {
    id: 'post-2',
    content: 'Beautiful sunset at the beach today. Nature never fails to amaze me.',
    image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=600&auto=format&fit=crop&q=60',
    likes: 102,
    comments: 12,
    shares: 5,
    date: '2023-05-04T12:15:00Z',
    timeAgo: '2h ago',
    author: allUsers[1]
  },
  {
    id: 'post-3',
    content: 'Just finished reading "Atomic Habits" by James Clear. Highly recommend it to anyone looking to build better habits and break bad ones.',
    likes: 57,
    comments: 8,
    shares: 3,
    date: '2023-05-04T10:45:00Z',
    timeAgo: '4h ago',
    author: allUsers[2]
  },
  {
    id: 'post-4',
    content: "Coffee shops and coding sessions - name a better duo, I'll wait. ☕💻 #coding #developer #coffeeaddict",
    image: 'https://images.unsplash.com/photo-1522252234503-e356532cafd5?w=600&auto=format&fit=crop&q=60',
    likes: 89,
    comments: 15,
    shares: 4,
    date: '2023-05-04T09:30:00Z',
    timeAgo: '5h ago',
    author: allUsers[3]
  },
  {
    id: 'post-5',
    content: 'Just adopted this little guy from the shelter. Meet Max! #catsofechomate #adoption',
    image: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=600&auto=format&fit=crop&q=60',
    likes: 214,
    comments: 32,
    shares: 18,
    date: '2023-05-04T07:10:00Z',
    timeAgo: '8h ago',
    author: allUsers[4]
  },
  {
    id: 'post-6',
    content: "Excited to announce that I'll be speaking at the #TechConf2023 next month about the future of web development!",
    likes: 45,
    comments: 7,
    shares: 2,
    date: '2023-05-03T22:45:00Z',
    timeAgo: '1d ago',
    author: allUsers[0]
  }
];

export const filterPostsByUser = (userId: string): Post[] => {
  return posts.filter(post => post.author.id === userId);
};
