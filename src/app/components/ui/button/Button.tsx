import React, { ReactNode } from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  customProp?: string;
  active?: boolean;
  children: ReactNode;
  detailsPage?: boolean
  cart?: boolean
  clear?: boolean
  editProduct?: boolean
  continueShopping?: boolean
}

const Button: React.FC<ButtonProps> = ({ customProp, continueShopping = false, editProduct = false, cart = false, clear = false, detailsPage = false, active, children, ...props }) => {
  const baseStyles = 'font-bold w-full h-10 py-2 px-4 rounded-md focus:outline-none transition duration-300 hover:scale-100';
  const buttonStyles = clsx(baseStyles, {
    'bg-green-500 text-white shadow-md hover:bg-green-600': !active,
    'bg-red-500 text-white shadow-md hover:bg-red-600': active,
    'bg-green-500 text-white shadow-md hover:bg-green-600 w-36': detailsPage,
    'bg-slate-500 text-white shadow-md hover:bg-blue-800 underline w-52': continueShopping,
    'bg-orange-500 text-white shadow-md hover:bg-orange-600 w-52': editProduct,
    'bg-red-500 text-white shadow-md hover:bg-red-600 w-36': cart,
    'bg-red-700 text-white shadow-md hover:bg-red-800 w-36': clear,
  });

  return (
    <button style={{width: `${detailsPage ? '144px' : null}`}} className={buttonStyles} {...props}>
      {children}
    </button>
  );
};

export default Button;