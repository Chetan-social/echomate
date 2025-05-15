
import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Image } from 'lucide-react';
import { currentUser } from '@/data/users';
import { useToast } from '@/hooks/use-toast';

const CreatePostForm = () => {
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!content.trim()) {
      toast({
        title: "Empty post",
        description: "Your post cannot be empty.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Post created!",
        description: "Your post has been published.",
      });
      setContent('');
      setIsSubmitting(false);
    }, 1000);
  };
  
  return (
    <form onSubmit={handleSubmit} className="border-b border-border p-4">
      <div className="flex gap-3">
        <Avatar>
          <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
          <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1 space-y-3">
          <Textarea
            placeholder="What's happening?"
            className="resize-none min-h-[100px] border-0 focus-visible:ring-0 text-lg px-0"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div className="flex justify-between items-center">
            <Button type="button" variant="ghost" size="sm" className="text-echo-500">
              <Image className="h-4 w-4 mr-1" />
              <span>Add Image</span>
            </Button>
            <Button 
              type="submit" 
              className="echo-gradient" 
              disabled={!content.trim() || isSubmitting}
            >
              {isSubmitting ? 'Posting...' : 'Post'}
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreatePostForm;
