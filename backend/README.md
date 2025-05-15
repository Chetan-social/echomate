
# Echomate Backend API

This is the backend API for Echomate, a social media application. It provides endpoints for users, posts, messages, and communities.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the backend directory
3. Install dependencies:
   ```
   npm install
   ```
4. Create a .env file based on .env.example
5. Start the development server:
   ```
   npm run dev
   ```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login a user
- `GET /api/auth/me` - Get current user

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get a single user
- `PUT /api/users/:id` - Update user profile
- `POST /api/users/:id/follow` - Follow a user
- `GET /api/users/:id/followers` - Get user's followers
- `GET /api/users/:id/following` - Get user's following

### Posts
- `GET /api/posts` - Get all posts
- `GET /api/posts/:id` - Get a single post
- `POST /api/posts` - Create a new post
- `POST /api/posts/:id/like` - Like a post
- `POST /api/posts/:id/comments` - Comment on a post

### Messages
- `GET /api/messages/conversations` - Get user conversations
- `GET /api/messages/conversations/:id` - Get a single conversation
- `POST /api/messages/conversations/:id/messages` - Send a message
- `POST /api/messages/conversations` - Create a new conversation
- `PUT /api/messages/conversations/:id/read` - Mark messages as read

### Communities
- `GET /api/communities` - Get all communities
- `GET /api/communities/:id` - Get a single community
- `POST /api/communities` - Create a new community
- `POST /api/communities/:id/join` - Join a community
- `POST /api/communities/:id/leave` - Leave a community
- `POST /api/communities/:id/posts` - Create a post in a community

## Real-time Features

The backend uses Socket.IO for real-time messaging:

- Private messaging between users
- Community chat
- Online status tracking

## Development

This is a mock implementation for demonstration purposes. In a production environment, you would want to:

- Connect to a real database (MongoDB, PostgreSQL, etc.)
- Implement proper authentication with JWT
- Add input validation
- Implement proper error handling
- Add tests

