
import { Notification } from '@/types/notification';
import { suggestedUsers } from './users';

export const notifications: Notification[] = [
  {
    id: 'notif-1',
    user: suggestedUsers[0],
    action: 'liked your post',
    timeAgo: '2m ago',
    read: false,
    type: 'like'
  },
  {
    id: 'notif-2',
    user: suggestedUsers[1],
    action: 'mentioned you in a post',
    timeAgo: '1h ago',
    read: false,
    type: 'mention'
  },
  {
    id: 'notif-3',
    user: suggestedUsers[2],
    action: 'started following you',
    timeAgo: '3h ago',
    read: true,
    type: 'follow'
  },
  {
    id: 'notif-4',
    user: suggestedUsers[3],
    action: 'replied to your post',
    timeAgo: '5h ago',
    read: true,
    type: 'reply'
  },
  {
    id: 'notif-5',
    user: suggestedUsers[0],
    action: 'liked your comment',
    timeAgo: '1d ago',
    read: true,
    type: 'like'
  },
  {
    id: 'notif-6',
    user: suggestedUsers[1],
    action: 'mentioned you in a comment',
    timeAgo: '2d ago',
    read: true,
    type: 'mention'
  }
];
