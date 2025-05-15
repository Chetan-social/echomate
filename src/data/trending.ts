
interface TrendingTopic {
  id: string;
  tag: string;
  title: string;
  posts: number;
}

export const trendingTopics: TrendingTopic[] = [
  {
    id: 'trend-1',
    tag: 'technology',
    title: 'Apple Event 2023',
    posts: 24561
  },
  {
    id: 'trend-2',
    tag: 'politics',
    title: 'Climate Summit',
    posts: 18354
  },
  {
    id: 'trend-3',
    tag: 'sports',
    title: 'Champions League Finals',
    posts: 15267
  },
  {
    id: 'trend-4',
    tag: 'entertainment',
    title: 'New Movie Release',
    posts: 12489
  },
  {
    id: 'trend-5',
    tag: 'science',
    title: 'Space Exploration',
    posts: 9823
  }
];
