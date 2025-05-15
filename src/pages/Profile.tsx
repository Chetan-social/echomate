
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PostCard from '@/components/post/PostCard';
import { currentUser } from '@/data/users';
import { filterPostsByUser } from '@/data/posts';

const Profile = () => {
  const userPosts = filterPostsByUser(currentUser.id);
  
  return (
    <MainLayout>
      <div className="border-b border-border">
        <div className="h-32 bg-gradient-to-r from-echo-500 to-blue-500"></div>
        <div className="px-4 pb-4 relative">
          <Avatar className="absolute -top-12 border-4 border-background h-24 w-24">
            <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
            <AvatarFallback className="text-2xl">{currentUser.name.charAt(0)}</AvatarFallback>
          </Avatar>
          
          <div className="flex justify-end mt-2">
            <Button variant="outline">Edit profile</Button>
          </div>
          
          <div className="mt-8">
            <h2 className="text-xl font-bold">{currentUser.name}</h2>
            <p className="text-muted-foreground">@{currentUser.username}</p>
            <p className="mt-2">{currentUser.bio}</p>
            
            <div className="flex gap-4 mt-4">
              <div>
                <span className="font-bold">{currentUser.following}</span>{" "}
                <span className="text-muted-foreground">Following</span>
              </div>
              <div>
                <span className="font-bold">{currentUser.followers}</span>{" "}
                <span className="text-muted-foreground">Followers</span>
              </div>
            </div>
          </div>
        </div>
        
        <Tabs defaultValue="posts" className="w-full">
          <TabsList className="grid grid-cols-3 w-full">
            <TabsTrigger value="posts">Posts</TabsTrigger>
            <TabsTrigger value="media">Media</TabsTrigger>
            <TabsTrigger value="likes">Likes</TabsTrigger>
          </TabsList>
          <TabsContent value="posts">
            {userPosts.length > 0 ? (
              userPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))
            ) : (
              <div className="p-8 text-center">
                <p className="text-muted-foreground">No posts yet</p>
              </div>
            )}
          </TabsContent>
          <TabsContent value="media">
            <div className="p-8 text-center">
              <p className="text-muted-foreground">No media posts yet</p>
            </div>
          </TabsContent>
          <TabsContent value="likes">
            <div className="p-8 text-center">
              <p className="text-muted-foreground">No liked posts yet</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Profile;
