
const express = require('express');
const router = express.Router();

// Mock communities data
let communities = [
  {
    id: 'com-1',
    name: 'Web Developers',
    description: 'A community for web developers to share knowledge and help each other.',
    image: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=300&auto=format&fit=crop&q=60',
    members: [
      { id: 'user-1', role: 'admin' },
      { id: 'user-2', role: 'member' },
      { id: 'user-3', role: 'member' }
    ],
    memberCount: 1245,
    topics: ['React', 'JavaScript', 'CSS', 'HTML'],
    posts: [
      {
        id: 'comm-post-1',
        authorId: 'user-2',
        content: 'What are your favorite React hooks?',
        likes: 15,
        comments: 8,
        date: '2023-05-04T09:15:00Z'
      }
    ]
  },
  {
    id: 'com-2',
    name: 'UI/UX Design',
    description: 'Discuss design principles, share your work, and get feedback.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&auto=format&fit=crop&q=60',
    members: [
      { id: 'user-3', role: 'admin' },
      { id: 'user-4', role: 'moderator' }
    ],
    memberCount: 876,
    topics: ['Design', 'User Experience', 'Figma', 'Adobe XD'],
    posts: [
      {
        id: 'comm-post-2',
        authorId: 'user-3',
        content: 'Check out this UI redesign I just completed!',
        image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=300&auto=format&fit=crop&q=60',
        likes: 42,
        comments: 15,
        date: '2023-05-03T14:30:00Z'
      }
    ]
  },
  {
    id: 'com-3',
    name: 'Mobile App Development',
    description: 'Everything about mobile app development for iOS and Android.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&auto=format&fit=crop&q=60',
    members: [
      { id: 'user-2', role: 'admin' },
      { id: 'user-5', role: 'member' }
    ],
    memberCount: 932,
    topics: ['Swift', 'Kotlin', 'React Native', 'Flutter'],
    posts: []
  }
];

// Get all communities
router.get('/', (req, res) => {
  return res.status(200).json(communities);
});

// Get a single community
router.get('/:id', (req, res) => {
  const community = communities.find(com => com.id === req.params.id);
  
  if (!community) {
    return res.status(404).json({ message: 'Community not found' });
  }
  
  return res.status(200).json(community);
});

// Create a new community
router.post('/', (req, res) => {
  try {
    const { name, description, image, topics } = req.body;
    // In a real app, creatorId would come from authenticated user
    const creatorId = 'user-1';
    
    const newCommunity = {
      id: `com-${Date.now()}`,
      name,
      description,
      image: image || 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=300&auto=format&fit=crop&q=60',
      members: [
        { id: creatorId, role: 'admin' }
      ],
      memberCount: 1,
      topics: topics || [],
      posts: []
    };
    
    communities.push(newCommunity);
    
    return res.status(201).json({
      message: 'Community created successfully',
      community: newCommunity
    });
  } catch (error) {
    console.error('Create community error:', error);
    return res.status(500).json({ message: 'Server error' });
  }
});

// Join a community
router.post('/:id/join', (req, res) => {
  const community = communities.find(com => com.id === req.params.id);
  
  if (!community) {
    return res.status(404).json({ message: 'Community not found' });
  }
  
  // In a real app, userId would come from authenticated user
  const userId = 'user-1';
  
  // Check if user is already a member
  if (community.members.some(member => member.id === userId)) {
    return res.status(400).json({ message: 'You are already a member of this community' });
  }
  
  community.members.push({ id: userId, role: 'member' });
  community.memberCount += 1;
  
  return res.status(200).json({
    message: `You have joined ${community.name}`,
    community
  });
});

// Leave a community
router.post('/:id/leave', (req, res) => {
  const community = communities.find(com => com.id === req.params.id);
  
  if (!community) {
    return res.status(404).json({ message: 'Community not found' });
  }
  
  // In a real app, userId would come from authenticated user
  const userId = 'user-1';
  
  // Check if user is a member
  if (!community.members.some(member => member.id === userId)) {
    return res.status(400).json({ message: 'You are not a member of this community' });
  }
  
  community.members = community.members.filter(member => member.id !== userId);
  community.memberCount -= 1;
  
  return res.status(200).json({
    message: `You have left ${community.name}`,
    community
  });
});

// Post in a community
router.post('/:id/posts', (req, res) => {
  const community = communities.find(com => com.id === req.params.id);
  
  if (!community) {
    return res.status(404).json({ message: 'Community not found' });
  }
  
  const { content, image } = req.body;
  // In a real app, authorId would come from authenticated user
  const authorId = 'user-1';
  
  // Check if user is a member
  if (!community.members.some(member => member.id === authorId)) {
    return res.status(403).json({ message: 'You must be a member to post in this community' });
  }
  
  const newPost = {
    id: `comm-post-${Date.now()}`,
    authorId,
    content,
    image,
    likes: 0,
    comments: 0,
    date: new Date().toISOString()
  };
  
  community.posts.unshift(newPost);
  
  return res.status(201).json({
    message: 'Post created successfully',
    post: newPost
  });
});

module.exports = router;
