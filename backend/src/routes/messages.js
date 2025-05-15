
const express = require('express');
const router = express.Router();

// Mock messages data
let conversations = [
  {
    id: 'conv-1',
    participants: ['user-1', 'user-2'],
    messages: [
      {
        id: 'msg-1',
        sender: 'user-2',
        content: 'Hey Sarah, how are you doing?',
        timestamp: '2023-05-04T14:23:00Z',
        read: true
      },
      {
        id: 'msg-2',
        sender: 'user-1',
        content: 'Hi Alex! I\'m good, thanks for asking. How about you?',
        timestamp: '2023-05-04T14:25:00Z',
        read: true
      },
      {
        id: 'msg-3',
        sender: 'user-2',
        content: 'I\'m doing great! Just finished working on a new project.',
        timestamp: '2023-05-04T14:30:00Z',
        read: false
      }
    ],
    lastMessage: {
      content: 'I\'m doing great! Just finished working on a new project.',
      timestamp: '2023-05-04T14:30:00Z',
      sender: 'user-2'
    }
  },
  {
    id: 'conv-2',
    participants: ['user-1', 'user-3'],
    messages: [
      {
        id: 'msg-4',
        sender: 'user-1',
        content: 'Hey Maya, did you see my latest post?',
        timestamp: '2023-05-03T10:15:00Z',
        read: true
      },
      {
        id: 'msg-5',
        sender: 'user-3',
        content: 'Yes, I did! It was really interesting. I especially liked the part about design principles.',
        timestamp: '2023-05-03T10:20:00Z',
        read: true
      }
    ],
    lastMessage: {
      content: 'Yes, I did! It was really interesting. I especially liked the part about design principles.',
      timestamp: '2023-05-03T10:20:00Z',
      sender: 'user-3'
    }
  }
];

// Get conversations for a user
router.get('/conversations', (req, res) => {
  // In a real app, userId would come from authenticated user
  const userId = 'user-1';
  
  const userConversations = conversations.filter(conv => 
    conv.participants.includes(userId)
  );
  
  return res.status(200).json(userConversations);
});

// Get single conversation
router.get('/conversations/:id', (req, res) => {
  const conversation = conversations.find(conv => conv.id === req.params.id);
  
  if (!conversation) {
    return res.status(404).json({ message: 'Conversation not found' });
  }
  
  return res.status(200).json(conversation);
});

// Send a message
router.post('/conversations/:id/messages', (req, res) => {
  const conversation = conversations.find(conv => conv.id === req.params.id);
  
  if (!conversation) {
    return res.status(404).json({ message: 'Conversation not found' });
  }
  
  const { content } = req.body;
  // In a real app, senderId would come from authenticated user
  const senderId = 'user-1';
  
  const newMessage = {
    id: `msg-${Date.now()}`,
    sender: senderId,
    content,
    timestamp: new Date().toISOString(),
    read: false
  };
  
  conversation.messages.push(newMessage);
  conversation.lastMessage = {
    content,
    timestamp: newMessage.timestamp,
    sender: senderId
  };
  
  return res.status(201).json({
    message: 'Message sent successfully',
    newMessage
  });
});

// Create a new conversation
router.post('/conversations', (req, res) => {
  const { recipientId } = req.body;
  // In a real app, senderId would come from authenticated user
  const senderId = 'user-1';
  
  // Check if conversation already exists
  const existingConversation = conversations.find(conv => 
    conv.participants.includes(senderId) && 
    conv.participants.includes(recipientId)
  );
  
  if (existingConversation) {
    return res.status(200).json(existingConversation);
  }
  
  const newConversation = {
    id: `conv-${Date.now()}`,
    participants: [senderId, recipientId],
    messages: [],
    lastMessage: null
  };
  
  conversations.push(newConversation);
  
  return res.status(201).json({
    message: 'Conversation created successfully',
    conversation: newConversation
  });
});

// Mark messages as read
router.put('/conversations/:id/read', (req, res) => {
  const conversation = conversations.find(conv => conv.id === req.params.id);
  
  if (!conversation) {
    return res.status(404).json({ message: 'Conversation not found' });
  }
  
  // In a real app, userId would come from authenticated user
  const userId = 'user-1';
  
  // Mark all unread messages from other users as read
  conversation.messages = conversation.messages.map(msg => {
    if (msg.sender !== userId && !msg.read) {
      return { ...msg, read: true };
    }
    return msg;
  });
  
  return res.status(200).json({
    message: 'Messages marked as read',
    conversation
  });
});

module.exports = router;
