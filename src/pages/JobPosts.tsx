// src/pages/JobPosts.tsx
import { useEffect, useState } from 'react';
import api from '@/api/api';
import { useAuth } from '@/context/AuthContext';

export default function JobPosts() {
  const { user } = useAuth();
  const [jobPosts, setJobPosts] = useState<any[]>([]);

  useEffect(() => {
    const endpoint = user?.role === 'driver' ? '/public/jobposts/' : '/jobposts/';
    api.get(endpoint).then((response) => setJobPosts(response.data));
  }, [user]);

  return (
    <div>
      <h1 className="text-2xl font-bold">
        {user?.role === 'driver' ? 'Available Jobs' : 'My Job Posts'}
      </h1>
      <ul>
        {jobPosts.map((job) => (
          <li key={job.id}>{job.title} - {job.status}</li>
        ))}
      </ul>
    </div>
  );
}