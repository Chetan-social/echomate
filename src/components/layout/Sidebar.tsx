
import React from 'react';
import { cn } from '@/lib/utils';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { navigationItems } from '@/data/navigation';
import UserProfileMenu from '../user/UserProfileMenu';

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  return (
    <aside className={cn("pt-4 px-4 border-r border-border", className)}>
      <div className="space-y-2 sticky top-20">
        <div className="pb-4">
          <h2 className="text-2xl font-bold echo-gradient-text mb-4">echo<span className="text-foreground">mate</span></h2>
          
          <nav className="flex flex-col space-y-1">
            {navigationItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-4 px-4 py-3 text-base hover:bg-muted rounded-md",
                    isActive && "bg-muted font-medium"
                  )
                }
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
        
        <Button className="w-full echo-gradient" size="lg">
          Create Post
        </Button>
        
        <hr className="my-4" />
        
        <UserProfileMenu />
      </div>
    </aside>
  );
};

export default Sidebar;
