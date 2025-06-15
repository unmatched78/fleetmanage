// src/pages/Dashboard.tsx
import { useAuth } from '@/context/AuthContext';

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div>
      <h1 className="text-2xl font-bold">
        Welcome, {user?.username} ({user?.role})
      </h1>
      <p>This is your dashboard. Customize it with relevant info for your role.</p>
    </div>
  );
}