import React, { FC, memo } from 'react';

export const LoginUtilities: FC = memo(() => (
  <div className="flex items-center justify-between">
    <div className="flex items-center">
      <input
        id="remember-me"
        name="remember-me"
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-800"
      />
      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
        Remember me
      </label>
    </div>
    <div className="text-sm">
      <a href="/" className="font-medium text-gray-700 hover:text-gray-900">
        Forgot your password?
      </a>
    </div>
  </div>
));
