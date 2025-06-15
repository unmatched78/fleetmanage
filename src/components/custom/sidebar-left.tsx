// src/components/custom/sidebar-left.tsx
import { useAuth } from '@/context/AuthContext';
import { Home, Truck, User, MessageCircle, Settings2, HelpCircle } from 'lucide-react';
import { NavMain } from '@/components/custom/nav-main';
import { NavSecondary } from '@/components/custom/nav-secondary';
import { Sidebar, SidebarContent, SidebarRail } from '@/components/ui/sidebar';

export function SidebarLeft({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = useAuth();

  // Define navigation items based on user role
  let navMain = [];
  if (user?.role === 'driver') {
    navMain = [
      { title: 'Dashboard', url: '/dashboard', icon: Home },
      { title: 'Available Jobs', url: '/jobs/available', icon: Truck },
      { title: 'My Bids', url: '/bids', icon: Truck }, // Reuse Truck icon; adjust if needed
      { title: 'My Trips', url: '/trips', icon: Truck },
      { title: 'Profile', url: '/profile', icon: User },
      { title: 'Messages', url: '/messages', icon: MessageCircle },
    ];
  } else if (user?.role === 'client') {
    navMain = [
      { title: 'Dashboard', url: '/dashboard', icon: Home },
      { title: 'My Job Posts', url: '/jobposts', icon: Truck },
      { title: 'Bids Received', url: '/bids/received', icon: Truck },
      { title: 'My Shipments', url: '/shipments', icon: Truck },
      { title: 'Profile', url: '/profile', icon: User },
      { title: 'Messages', url: '/messages', icon: MessageCircle },
    ];
  } else {
    // Fallback for unauthenticated users
    navMain = [
      { title: 'Login', url: '/login', icon: User },
    ];
  }

  // Secondary navigation (same for both roles)
  const navSecondary = [
    { title: 'Settings', url: '/settings', icon: Settings2 },
    { title: 'Help', url: '/help', icon: HelpCircle },
  ];

  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarContent>
        <NavMain items={navMain} />
        <NavSecondary items={navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}