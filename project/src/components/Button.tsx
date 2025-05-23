import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  onClick,
  type = 'button'
}) => {
  const baseClasses = 'font-bold uppercase tracking-wider transition-all duration-300 ease-in-out focus:ring-2 focus:ring-offset-2 focus:outline-none';
  
  const variantClasses = {
    primary: 'bg-red-700 hover:bg-red-800 text-white focus:ring-red-600',
    secondary: 'bg-neutral-800 hover:bg-neutral-900 text-white focus:ring-neutral-700',
    outline: 'bg-transparent border-2 border-red-700 text-red-700 hover:bg-red-700 hover:text-white focus:ring-red-600'
  };
  
  const sizeClasses = {
    sm: 'text-xs py-2 px-3',
    md: 'text-sm py-3 px-5',
    lg: 'text-base py-4 px-7'
  };
  
  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;