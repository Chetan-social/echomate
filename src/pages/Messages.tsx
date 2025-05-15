
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { currentUser } from '@/data/users';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const Messages = () => {
  return (
    <MainLayout>
      <div className="border-b border-border p-4">
        <h2 className="text-xl font-bold">Messages</h2>
        <div className="relative mt-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            className="w-full pl-10 bg-muted"
            placeholder="Search Messages"
            type="search"
          />
        </div>
      </div>
      
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid grid-cols-3 w-full">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="unread">Unread</TabsTrigger>
          <TabsTrigger value="requests">Requests</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="divide-y divide-border">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <div key={index} className="flex items-start gap-3 p-4 hover:bg-muted/50 cursor-pointer">
              <Avatar>
                <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=user${index}`} alt="User" />
                <AvatarFallback>U{index}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-medium text-sm truncate">User {index + 1}</h4>
                  <span className="text-xs text-muted-foreground">{index === 0 ? 'Just now' : `${index}h ago`}</span>
                </div>
                <p className="text-sm text-muted-foreground truncate">
                  {index === 0 ? "Hey there! How's it going?" : `This is message ${index + 1}. Thanks for checking out Echomate!`}
                </p>
              </div>
              {index === 0 && (
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
              )}
            </div>
          ))}
        </TabsContent>
        <TabsContent value="unread" className="p-4 text-center text-muted-foreground">
          No unread messages
        </TabsContent>
        <TabsContent value="requests" className="p-4 text-center text-muted-foreground">
          No message requests
        </TabsContent>
      </Tabs>

      <div className="fixed bottom-0 left-0 right-0 md:left-[280px] lg:right-[280px] bg-background border-t border-border p-4 flex gap-2">
        <Avatar>
          <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
          <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1 flex gap-2">
          <Textarea 
            placeholder="Type a message..." 
            className="min-h-[40px] flex-1"
            rows={1}
          />
          <Button>Send</Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Messages;
