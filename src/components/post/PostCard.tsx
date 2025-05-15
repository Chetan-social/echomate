
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Heart, MessageCircle, Share } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Post } from '@/types/post';

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  const [liked, setLiked] = React.useState(false);
  
  const handleLike = () => {
    setLiked(!liked);
  };
  
  return (
    <div className="border-b border-border p-4 card-hover">
      <div className="flex gap-3">
        <Link to={`/profile/${post.author.username}`}>
          <Avatar>
            <AvatarImage src={post.author.avatar} alt={post.author.name} />
            <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
          </Avatar>
        </Link>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <Link to={`/profile/${post.author.username}`} className="font-medium hover:underline">
              {post.author.name}
            </Link>
            <span className="text-muted-foreground">@{post.author.username}</span>
            <span className="text-muted-foreground">·</span>
            <span className="text-muted-foreground">{post.timeAgo}</span>
          </div>
          
          <div className="mt-1">
            <p className="whitespace-pre-wrap">{post.content}</p>
            {post.image && (
              <img
                src={post.image}
                alt="Post attachment"
                className="mt-3 rounded-lg border border-border max-h-96 w-full object-cover"
              />
            )}
          </div>
          
          <div className="flex items-center mt-3 justify-between">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-muted-foreground hover:text-sky-500 hover:bg-sky-500/10"
            >
              <MessageCircle className="h-4 w-4 mr-1" />
              <span>{post.comments}</span>
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className={cn(
                "text-muted-foreground hover:text-red-500 hover:bg-red-500/10",
                liked && "text-red-500"
              )}
              onClick={handleLike}
            >
              <Heart className={cn("h-4 w-4 mr-1", liked && "fill-red-500")} />
              <span>{liked ? post.likes + 1 : post.likes}</span>
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-muted-foreground hover:text-green-500 hover:bg-green-500/10"
            >
              <Share className="h-4 w-4 mr-1" />
              <span>{post.shares}</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
