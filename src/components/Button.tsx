import React from 'react';

type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'large';
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  type = 'button',
  variant = 'primary',
  size = 'small',
  className = '',
}) => {
  const baseStyles = 'focus:outline-none transition duration-150 ease-in-out';
  
  // Define styles for variants
  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary-hover px-8 py-4 font-semibold',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    tertiary: 'text-black/50 font-semibold hover:text-primary flex gap-2 w-fit items-center uppercase',
  };

  // Define styles for sizes
  const sizeStyles = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2',
    large: 'px-6 py-3 text-lg',
  };

  return (
    <button
      onClick={onClick}
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;