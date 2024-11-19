import React, { FC, memo } from 'react';

export const FormInput: FC<{
  type: string;
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  className?: string;
}> = memo(({ type, id, label, value, onChange, placeholder, required = true, className }) => (
  <div>
    <label htmlFor={id} className="mb-2 block text-sm font-medium text-gray-700">
      {label}
    </label>
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required={required}
      className={`w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-800 ${className}`}
    />
  </div>
));
