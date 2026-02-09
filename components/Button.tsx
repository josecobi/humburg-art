import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  fullWidth?: boolean;
}

export default function Button({
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  type = 'button',
  disabled = false,
  fullWidth = false,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-4 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-primary-900 text-white hover:bg-blue-700 focus:ring-blue-500/50 shadow-sm hover:shadow-md',
    secondary: 'bg-white text-primary-900 border-2 border-primary-900 hover:bg-blue-700 hover:text-white hover:border-blue-700 focus:ring-blue-500/50 shadow-sm hover:shadow-md',
    outline: 'border-2 border-white text-white hover:bg-blue-700 hover:border-blue-700 focus:ring-blue-400/50 shadow-sm hover:shadow-md',
    ghost: 'text-primary-900 border-b-2 border-primary-900 pb-1 hover:text-blue-700 hover:border-blue-700 hover:gap-2 focus:ring-blue-500/30 rounded-none',
    accent: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500/50 shadow-md hover:shadow-lg',
  };

  const sizes = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-8 py-4 text-base sm:text-lg',
    lg: 'px-10 py-5 text-lg sm:text-xl',
  };

  const widthClass = fullWidth ? 'w-full' : '';
  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
    >
      {children}
    </button>
  );
}
