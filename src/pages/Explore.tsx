
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PostCard from '@/components/post/PostCard';
import { posts } from '@/data/posts';
import { trendingTopics } from '@/data/trending';

const Explore = () => {
  return (
    <MainLayout>
      <div className="border-b border-border p-4">
        <h2 className="text-xl font-bold">Explore</h2>
        <div className="relative mt-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            className="w-full pl-10 bg-muted"
            placeholder="Search Echomate"
            type="search"
          />
        </div>
      </div>
      
      <Tabs defaultValue="foryou" className="w-full">
        <TabsList className="grid grid-cols-3 w-full">
          <TabsTrigger value="foryou">For You</TabsTrigger>
          <TabsTrigger value="trending">Trending</TabsTrigger>
          <TabsTrigger value="latest">Latest</TabsTrigger>
        </TabsList>
        <TabsContent value="foryou">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </TabsContent>
        <TabsContent value="trending">
          <div className="p-4 grid gap-4">
            {trendingTopics.map((topic) => (
              <div key={topic.id} className="bg-muted p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">#{topic.tag}</p>
                <p className="font-medium text-lg">{topic.title}</p>
                <p className="text-sm text-muted-foreground">{topic.posts} posts</p>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="latest">
          {[...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </TabsContent>
      </Tabs>
    </MainLayout>
  );
};

export default Explore;
