
const express = require('express');
const router = express.Router();

// Mock posts data
const posts = [
  {
    id: 'post-1',
    content: 'Just launched my new website! Check it out and let me know what you think. #webdev #design',
    likes: 24,
    comments: 5,
    shares: 2,
    date: '2023-05-04T14:23:00Z',
    timeAgo: '5m ago',
    authorId: 'user-1'
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
    authorId: 'user-2'
  },
  {
    id: 'post-3',
    content: 'Just finished reading "Atomic Habits" by James Clear. Highly recommend it to anyone looking to build better habits and break bad ones.',
    likes: 57,
    comments: 8,
    shares: 3,
    date: '2023-05-04T10:45:00Z',
    timeAgo: '4h ago',
    authorId: 'user-3'
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
    authorId: 'user-4'
  }
];

// Get all posts with pagination
router.get('/', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  
  const paginatedPosts = posts.slice(startIndex, endIndex);
  
  return res.status(200).json({
    posts: paginatedPosts,
    pagination: {
      total: posts.length,
      page,
      limit,
      hasMore: endIndex < posts.length
    }
  });
});

// Get a single post
router.get('/:id', (req, res) => {
  const post = posts.find(post => post.id === req.params.id);
  
  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }
  
  return res.status(200).json(post);
});

// Create new post
router.post('/', (req, res) => {
  try {
    const { content, image } = req.body;
    // In a real app, authorId would come from authenticated user
    const authorId = 'user-1'; 
    
    const newPost = {
      id: `post-${Date.now()}`,
      content,
      image,
      likes: 0,
      comments: 0,
      shares: 0,
      date: new Date().toISOString(),
      timeAgo: 'just now',
      authorId
    };
    
    posts.unshift(newPost);
    
    return res.status(201).json({
      message: 'Post created successfully',
      post: newPost
    });
  } catch (error) {
    console.error('Create post error:', error);
    return res.status(500).json({ message: 'Server error' });
  }
});

// Like a post
router.post('/:id/like', (req, res) => {
  const post = posts.find(post => post.id === req.params.id);
  
  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }
  
  post.likes += 1;
  
  return res.status(200).json({
    message: 'Post liked successfully',
    likes: post.likes
  });
});

// Add comment to a post
router.post('/:id/comments', (req, res) => {
  const post = posts.find(post => post.id === req.params.id);
  
  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }
  
  const { content } = req.body;
  // In a real app, authorId would come from authenticated user
  const authorId = 'user-1';
  
  post.comments += 1;
  
  return res.status(201).json({
    message: 'Comment added successfully',
    comment: {
      id: `comment-${Date.now()}`,
      content,
      authorId,
      date: new Date().toISOString(),
      timeAgo: 'just now'
    }
  });
});

module.exports = router;
