
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Input } from '@/components/ui/input';
import { Search, Users, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from '@/components/ui/separator';

// Mock data for communities
const communitiesMock = [
  {
    id: 'com-1',
    name: 'Web Developers',
    description: 'A community for web developers to share knowledge and help each other.',
    members: 1245,
    topics: ['React', 'JavaScript', 'CSS', 'HTML'],
    image: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=300&auto=format&fit=crop&q=60'
  },
  {
    id: 'com-2',
    name: 'UI/UX Design',
    description: 'Discuss design principles, share your work, and get feedback.',
    members: 876,
    topics: ['Design', 'User Experience', 'Figma', 'Adobe XD'],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&auto=format&fit=crop&q=60'
  },
  {
    id: 'com-3',
    name: 'Mobile App Development',
    description: 'Everything about mobile app development for iOS and Android.',
    members: 932,
    topics: ['Swift', 'Kotlin', 'React Native', 'Flutter'],
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&auto=format&fit=crop&q=60'
  },
  {
    id: 'com-4',
    name: 'AI Enthusiasts',
    description: 'Discussions about artificial intelligence, machine learning, and data science.',
    members: 1093,
    topics: ['Machine Learning', 'Neural Networks', 'Data Science', 'Python'],
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=300&auto=format&fit=crop&q=60'
  }
];

// Component for displaying a single community card
const CommunityCard = ({ community }: { community: typeof communitiesMock[0] }) => {
  return (
    <Card className="overflow-hidden">
      <div className="h-32 overflow-hidden">
        <img 
          src={community.image} 
          alt={community.name} 
          className="w-full object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle>{community.name}</CardTitle>
        <CardDescription>{community.members.toLocaleString()} members</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{community.description}</p>
        <div className="flex flex-wrap gap-1 mt-3">
          {community.topics.slice(0, 3).map(topic => (
            <span key={topic} className="bg-muted text-xs px-2 py-1 rounded-full">
              {topic}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Join Community</Button>
      </CardFooter>
    </Card>
  );
};

const Communities = () => {
  return (
    <MainLayout>
      <div className="border-b border-border p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Communities</h2>
          <Button size="sm" className="echo-gradient">
            <Plus className="h-4 w-4 mr-1" /> Create
          </Button>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            className="w-full pl-10 bg-muted"
            placeholder="Search Communities"
            type="search"
          />
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-medium mb-3 flex items-center">
          <Users className="h-5 w-5 mr-2" /> Your Communities
        </h3>
        <div className="text-center py-6 text-muted-foreground">
          <Users className="h-12 w-12 mx-auto text-muted-foreground/60 mb-2" />
          <p>You haven't joined any communities yet.</p>
          <Button variant="outline" className="mt-2">Discover Communities</Button>
        </div>
        
        <Separator className="my-6" />
        
        <h3 className="text-lg font-medium mb-3">Recommended for you</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {communitiesMock.map(community => (
            <CommunityCard key={community.id} community={community} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Communities;
