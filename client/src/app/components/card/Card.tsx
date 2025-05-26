'use client'
import Image from 'next/image'
import { motion } from 'motion/react'

import React from 'react';

type CardProps = {
  /** Optional heading text */
  title?: string;
  /** Card content */
  children: React.ReactNode;
  /** Additional Tailwind (or CSS) classes */
  className?: string;
};

const Card: React.FC<CardProps> = ({ title, children, className }) => {
  return (
    <div
      className={`
        border 
        border-gray-200 
        rounded-xl
        shadow-sm 
        p-4 
        ${className ?? ''}
      `}
    >
      {title && (
        <h2 className="text-lg font-semibold mb-2">
          {title}
        </h2>
      )}
      <div>{children}</div>
    </div>
  );
};

export default Card;