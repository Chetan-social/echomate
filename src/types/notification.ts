
import { User } from './post';

export type NotificationType = 'like' | 'mention' | 'follow' | 'reply';

export interface Notification {
  id: string;
  user: User;
  action: string;
  timeAgo: string;
  read: boolean;
  type: NotificationType;
}
