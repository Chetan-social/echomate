
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { notifications } from '@/data/notifications';
import { cn } from '@/lib/utils';

const Notifications = () => {
  return (
    <MainLayout>
      <div className="border-b border-border p-4">
        <h2 className="text-xl font-bold">Notifications</h2>
      </div>
      
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid grid-cols-3 w-full">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="mentions">Mentions</TabsTrigger>
          <TabsTrigger value="likes">Likes</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          {notifications.map((notification) => (
            <div 
              key={notification.id}
              className={cn(
                "border-b border-border p-4 hover:bg-muted/50 cursor-pointer",
                notification.read === false && "bg-echo-50 dark:bg-echo-900/10"
              )}
            >
              <div className="flex gap-3">
                <Avatar>
                  <AvatarImage src={notification.user.avatar} alt={notification.user.name} />
                  <AvatarFallback>{notification.user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p>
                    <span className="font-medium">{notification.user.name}</span>{" "}
                    <span className="text-muted-foreground">{notification.action}</span>
                  </p>
                  <p className="text-sm text-muted-foreground">{notification.timeAgo}</p>
                </div>
              </div>
            </div>
          ))}
        </TabsContent>
        <TabsContent value="mentions">
          {notifications.filter(n => n.type === 'mention').map((notification) => (
            <div 
              key={notification.id}
              className={cn(
                "border-b border-border p-4 hover:bg-muted/50 cursor-pointer",
                notification.read === false && "bg-echo-50 dark:bg-echo-900/10"
              )}
            >
              <div className="flex gap-3">
                <Avatar>
                  <AvatarImage src={notification.user.avatar} alt={notification.user.name} />
                  <AvatarFallback>{notification.user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p>
                    <span className="font-medium">{notification.user.name}</span>{" "}
                    <span className="text-muted-foreground">{notification.action}</span>
                  </p>
                  <p className="text-sm text-muted-foreground">{notification.timeAgo}</p>
                </div>
              </div>
            </div>
          ))}
        </TabsContent>
        <TabsContent value="likes">
          {notifications.filter(n => n.type === 'like').map((notification) => (
            <div 
              key={notification.id}
              className={cn(
                "border-b border-border p-4 hover:bg-muted/50 cursor-pointer",
                notification.read === false && "bg-echo-50 dark:bg-echo-900/10"
              )}
            >
              <div className="flex gap-3">
                <Avatar>
                  <AvatarImage src={notification.user.avatar} alt={notification.user.name} />
                  <AvatarFallback>{notification.user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p>
                    <span className="font-medium">{notification.user.name}</span>{" "}
                    <span className="text-muted-foreground">{notification.action}</span>
                  </p>
                  <p className="text-sm text-muted-foreground">{notification.timeAgo}</p>
                </div>
              </div>
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </MainLayout>
  );
};

export default Notifications;
