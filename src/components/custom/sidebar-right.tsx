// src/components/custom/sidebar-right.tsx
import { useAuth } from '@/context/AuthContext';
import { NavUser } from '@/components/custom/nav-user';
import { DatePicker } from '@/components/custom/date-picker';
import { Calendars } from '@/components/custom/calendars';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from '@/components/ui/sidebar';
import { Plus } from 'lucide-react';

// Sample calendar data (replace with API data later)
const sampleCalendars = [
  { name: 'My Calendars', items: ['Pickups', 'Deliveries'] },
  { name: 'Other', items: ['Maintenance', 'Reminders'] },
];

export function SidebarRight({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user, logout } = useAuth();

  if (!user) {
    return null; // Or a fallback UI
  }

  const userData = {
    name: user.username,
    email: user.email || 'Not provided', // Adjust based on your UserSerializer
    avatar: user.avatar || '/default-avatar.jpg', // Add avatar support in backend if needed
  };

  return (
    <Sidebar
      collapsible="none"
      className="sticky top-0 hidden h-svh border-l lg:flex"
      {...props}
    >
      <SidebarHeader className="border-sidebar-border h-16 border-b">
        <NavUser user={userData} />
      </SidebarHeader>
      <SidebarContent>
        <DatePicker />
        <SidebarSeparator className="mx-0" />
        <Calendars calendars={sampleCalendars} />
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={logout}>
              <Plus />
              <span>Logout</span> {/* Replace "New Calendar" with logout */}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}