
const express = require('express');
const router = express.Router();

// Mock users data
const users = [
  {
    id: 'user-1',
    name: 'Sarah Johnson',
    username: 'sarahj',
    email: 'sarah@example.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarahj',
    bio: 'UX Designer and coffee enthusiast',
    followers: 245,
    following: 132
  },
  {
    id: 'user-2',
    name: 'Alex Chen',
    username: 'alexc',
    email: 'alex@example.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=alexc',
    bio: 'Software Engineer | AI Enthusiast',
    followers: 387,
    following: 214
  },
  {
    id: 'user-3',
    name: 'Maya Patel',
    username: 'mayap',
    email: 'maya@example.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=mayap',
    bio: 'Digital Marketer | Travel Blogger',
    followers: 891,
    following: 346
  },
  {
    id: 'user-4',
    name: 'Jason Wilson',
    username: 'jasonw',
    email: 'jason@example.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=jasonw',
    bio: 'Photographer and videographer',
    followers: 1024,
    following: 298
  },
  {
    id: 'user-5',
    name: 'Emma Rodríguez',
    username: 'emmar',
    email: 'emma@example.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=emmar',
    bio: 'Fitness instructor and nutrition expert',
    followers: 2546,
    following: 154
  }
];

// Get all users
router.get('/', (req, res) => {
  return res.status(200).json(users);
});

// Get a single user
router.get('/:id', (req, res) => {
  const user = users.find(user => user.id === req.params.id);
  
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  
  return res.status(200).json(user);
});

// Update user profile
router.put('/:id', (req, res) => {
  const userIndex = users.findIndex(user => user.id === req.params.id);
  
  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }
  
  const { name, bio, avatar } = req.body;
  
  users[userIndex] = {
    ...users[userIndex],
    name: name || users[userIndex].name,
    bio: bio || users[userIndex].bio,
    avatar: avatar || users[userIndex].avatar
  };
  
  return res.status(200).json({
    message: 'Profile updated successfully',
    user: users[userIndex]
  });
});

// Follow a user
router.post('/:id/follow', (req, res) => {
  const userToFollow = users.find(user => user.id === req.params.id);
  
  if (!userToFollow) {
    return res.status(404).json({ message: 'User not found' });
  }
  
  // In a real app, currentUserId would come from authenticated user
  const currentUserId = 'user-1';
  const currentUser = users.find(user => user.id === currentUserId);
  
  userToFollow.followers += 1;
  currentUser.following += 1;
  
  return res.status(200).json({
    message: `You are now following ${userToFollow.username}`,
    followers: userToFollow.followers
  });
});

// Get user's followers
router.get('/:id/followers', (req, res) => {
  const user = users.find(user => user.id === req.params.id);
  
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  
  // In a real app, this would return actual follower objects
  return res.status(200).json({
    userId: user.id,
    followers: user.followers
  });
});

// Get user's following
router.get('/:id/following', (req, res) => {
  const user = users.find(user => user.id === req.params.id);
  
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  
  // In a real app, this would return actual following objects
  return res.status(200).json({
    userId: user.id,
    following: user.following
  });
});

module.exports = router;
