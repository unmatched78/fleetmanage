// src/pages/RegisterPage.tsx
import { useState } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { useAuth } from '../context/AuthContext';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export default function RegisterPage() {
  // State for all form fields
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [frequentLocation, setFrequentLocation] = useState('');
  const [personalID, setPersonalID] = useState<File | null>(null);

  // Auth context and navigation
  const { register, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as any)?.from?.pathname || '/dashboard'; // Adjusted default redirect

  // Handle role change and reset driver fields if switching to client
  const handleRoleChange = (newRole: string) => {
    setRole(newRole);
    if (newRole === 'client') {
      setLicenseNumber('');
      setFrequentLocation('');
      setPersonalID(null);
    }
  };

  // Handle form submission
  async function handleRegister() {
    // Basic validation for required fields
    if (!username || !email || !phone || !role || !password || !confirmPassword) {
      toast.error('Please fill out all required fields.');
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      toast.error('Passwords do not match.');
      return;
    }

    // Validate driver-specific fields
    if (role === 'driver' && (!licenseNumber || !frequentLocation || !personalID)) {
      toast.error('Please provide all driver information.');
      return;
    }

    try {
      // Prepare registration data
      const regData = {
        username,
        email,
        phone,
        role,
        password,
        ...(role === 'driver' && {
          licenseNumber,
          frequentLocation,
          personalID,
        }),
      };

      // Call register function from AuthContext
      await register(regData);
      navigate(from, { replace: true });
    } catch (err: any) {
      // Handle and display errors from the backend
      if (err.response && err.response.data) {
        const errors = err.response.data;
        const errorMessage = errors.detail || Object.values(errors).flat().join(' ');
        toast.error(errorMessage);
      } else {
        toast.error('Registration failed. Please try again.');
      }
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Register</CardTitle>
          <CardDescription>Create a new account for the truck cargo system.</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex flex-col space-y-4">
            {/* Username */}
            <Input
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            {/* Email */}
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {/* Phone */}
            <Input
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            {/* Role Selection */}
            <Select value={role} onValueChange={handleRoleChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="driver">Driver</SelectItem>
                <SelectItem value="client">Client</SelectItem>
              </SelectContent>
            </Select>
            {/* Password */}
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {/* Confirm Password */}
            <Input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {/* Driver-specific fields */}
            {role === 'driver' && (
              <div className="mt-4">
                <h3 className="text-lg font-medium">Driver Information</h3>
                <div className="space-y-4 mt-2">
                  <Input
                    placeholder="License Number"
                    value={licenseNumber}
                    onChange={(e) => setLicenseNumber(e.target.value)}
                    required
                  />
                  <Input
                    placeholder="Frequent Location"
                    value={frequentLocation}
                    onChange={(e) => setFrequentLocation(e.target.value)}
                    required
                  />
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setPersonalID(e.target.files?.[0] || null)}
                    required
                  />
                </div>
              </div>
            )}
          </div>
        </CardContent>

        <CardFooter className="flex flex-col space-y-2">
          <Button
            className="w-full"
            onClick={handleRegister}
            disabled={loading}
          >
            {loading ? 'Registering…' : 'Register'}
          </Button>
          <p className="text-sm text-center">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login here
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}