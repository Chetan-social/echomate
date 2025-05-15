
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import PostCard from '@/components/post/PostCard';
import CreatePostForm from '@/components/post/CreatePostForm';
import { posts } from '@/data/posts';

const Index = () => {
  return (
    <MainLayout>
      <div className="border-b border-border p-4">
        <h2 className="text-xl font-bold">Home</h2>
      </div>
      
      <CreatePostForm />
      
      <div>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </MainLayout>
  );
};

export default Index;
