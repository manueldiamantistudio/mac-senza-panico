import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 transform active:scale-95";
  const variants = {
    primary: "bg-apple-blue hover:bg-apple-blueHover text-white shadow-lg shadow-blue-500/30 rounded-full px-8 py-3.5 text-lg",
    secondary: "bg-white text-apple-dark border border-gray-200 hover:bg-gray-50 rounded-full px-6 py-3 text-base"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};