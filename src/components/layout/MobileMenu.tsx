
import React from 'react';
import { 
  Sheet, 
  SheetClose,
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { navigationItems } from '@/data/navigation';

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <SheetHeader className="border-b pb-4">
          <SheetTitle className="flex items-center justify-between">
            <span className="text-2xl font-bold echo-gradient-text">echo<span className="text-foreground">mate</span></span>
            <SheetClose className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </SheetClose>
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col space-y-1 mt-4">
          {navigationItems.map((item) => (
            <SheetClose asChild key={item.path}>
              <Link 
                to={item.path}
                className="flex items-center gap-4 px-2 py-3 text-base hover:bg-muted rounded-md"
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
