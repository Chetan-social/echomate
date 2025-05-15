
import { Home, Search, Bell, Mail, User, Users } from 'lucide-react';

export const navigationItems = [
  {
    label: 'Home',
    path: '/',
    icon: Home
  },
  {
    label: 'Explore',
    path: '/explore',
    icon: Search
  },
  {
    label: 'Notifications',
    path: '/notifications',
    icon: Bell
  },
  {
    label: 'Messages',
    path: '/messages',
    icon: Mail
  },
  {
    label: 'Profile',
    path: '/profile',
    icon: User
  },
  {
    label: 'Communities',
    path: '/communities',
    icon: Users
  }
];
