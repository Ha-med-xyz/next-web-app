import React from 'react';
 
// Extends the native button attributes so onClick, type, disabled, etc. all work.
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'; // Style variants
}
 
export default function Button({
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  // Pick colours based on the variant prop
  const styles =
    variant === 'primary'
      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
      : 'border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800';
 
  return (
    <button
      className={`rounded-md px-4 py-2 font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 disabled:cursor-not-allowed disabled:opacity-50 ${styles} ${className}`}
      {...props}
    />
  );
}
