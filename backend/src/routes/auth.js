
const express = require('express');
const router = express.Router();

// Mock users database
const users = [];

// Register a new user
router.post('/register', (req, res) => {
  try {
    const { name, username, email, password } = req.body;
    
    // Check if user already exists
    const userExists = users.find(user => user.email === email || user.username === username);
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }
    
    // Create new user
    const newUser = {
      id: Date.now().toString(),
      name,
      username,
      email,
      password, // In a real app, this would be hashed
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`,
      followers: [],
      following: [],
      bio: '',
      createdAt: new Date(),
    };
    
    users.push(newUser);
    
    // Generate token (simplified version)
    const token = `mock-token-${newUser.id}`;
    
    return res.status(201).json({
      message: 'User registered successfully',
      token,
      user: {
        id: newUser.id,
        name: newUser.name,
        username: newUser.username,
        email: newUser.email,
        avatar: newUser.avatar,
        bio: newUser.bio,
      }
    });
  } catch (error) {
    console.error('Registration error:', error);
    return res.status(500).json({ message: 'Server error' });
  }
});

// Login user
router.post('/login', (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Find user
    const user = users.find(user => user.email === email && user.password === password);
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    // Generate token
    const token = `mock-token-${user.id}`;
    
    return res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        avatar: user.avatar,
        bio: user.bio,
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Server error' });
  }
});

// Get current user
router.get('/me', (req, res) => {
  // In a real app, this would use JWT authentication
  // For now, return a mock response
  const mockUser = {
    id: '123456',
    name: 'Sarah Johnson',
    username: 'sarahj',
    email: 'sarah@example.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarahj',
    bio: 'UX Designer and coffee enthusiast',
    followers: 245,
    following: 132
  };
  
  return res.status(200).json(mockUser);
});

module.exports = router;
