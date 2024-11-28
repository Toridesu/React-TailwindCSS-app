import React, { FC, memo, useState } from 'react';
import { LockIcon } from 'lucide-react';
import { FormInput } from '../molecule/FormInput';
import { PasswordInput } from '../molecule/PasswordInput';
import { LoginUtilities } from '../molecule/LoginUtilities';

// Separate type definitions
interface LoginCredentials {
  email: string;
  password: string;
}

interface LoginProps {
  onLogin?: (credentials: LoginCredentials) => void;
}

// Main Login Component
export const Login: FC<LoginProps> = memo(({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin?.({ email, password });
    window.location.href = '/usermanagement';
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 p-4">
      <div className="w-full max-w-md overflow-hidden rounded-lg bg-white shadow-2xl">
        <div className="p-8">
          <div className="mb-8 flex justify-center">
            <div className="rounded-full bg-gray-900 p-3">
              <LockIcon className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">Welcome Back</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <FormInput
              type="email"
              id="email"
              label="Email Address"
              value={email}
              onChange={setEmail}
              placeholder="you@example.com"
            />
            <PasswordInput value={password} onChange={setPassword} />
            <LoginUtilities />
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md border border-transparent bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
        <div className="border-t border-gray-100 bg-gray-50 px-8 py-4 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="/" className="font-medium text-gray-900 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
});

export default Login;

