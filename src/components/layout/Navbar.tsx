
import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import MobileMenu from './MobileMenu';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const isMobile = useIsMobile();
  
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <h1 className="text-2xl font-bold echo-gradient-text">echo<span className="text-foreground">mate</span></h1>
          </Link>
        </div>

        {!isMobile && (
          <div className="hidden md:flex w-full max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                className="w-full pl-10 bg-muted"
                placeholder="Search Echomate"
                type="search"
              />
            </div>
          </div>
        )}

        <div className="flex items-center gap-2">
          {!isMobile ? (
            <>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-echo-500 text-[10px] text-white">3</span>
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </>
          ) : (
            <MobileMenu />
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
