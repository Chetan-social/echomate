
import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { trendingTopics } from '@/data/trending';
import { suggestedUsers } from '@/data/users';

interface RightSidebarProps {
  className?: string;
}

const RightSidebar = ({ className }: RightSidebarProps) => {
  return (
    <aside className={cn("p-4 border-l border-border", className)}>
      <div className="sticky top-20 space-y-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            className="w-full pl-10 bg-muted"
            placeholder="Search Echomate"
            type="search"
          />
        </div>
        
        <div className="bg-muted rounded-xl p-4">
          <h3 className="font-bold text-lg mb-4">Trending Topics</h3>
          <div className="space-y-3">
            {trendingTopics.map((topic) => (
              <div key={topic.id} className="hover:bg-background rounded-lg p-2 transition-colors">
                <p className="text-sm text-muted-foreground">#{topic.tag}</p>
                <p className="font-medium">{topic.title}</p>
                <p className="text-sm text-muted-foreground">{topic.posts} posts</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-muted rounded-xl p-4">
          <h3 className="font-bold text-lg mb-4">Who to follow</h3>
          <div className="space-y-4">
            {suggestedUsers.slice(0, 3).map((user) => (
              <div key={user.id} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">{user.name}</p>
                    <p className="text-xs text-muted-foreground">@{user.username}</p>
                  </div>
                </div>
                <Button size="sm" variant="secondary">Follow</Button>
              </div>
            ))}
            <Button variant="ghost" size="sm" className="w-full">Show more</Button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
