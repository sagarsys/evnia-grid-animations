import React from 'react';
import './Content.css';

// Base content wrapper - no styling, just structure
export const Content: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => (
  <div className={`content ${className}`}>
    {children}
  </div>
);

// Empty content for empty cells
export const EmptyContent: React.FC<{
  className?: string;
}> = ({ className = '' }) => (
  <div className={`content empty ${className}`}>
    {/* Empty cell - just shows border */}
  </div>
);

// Product content - handles all product-specific logic
export const ProductContent: React.FC<{
  title: string;
  description: string;
  showArrow?: boolean;
  className?: string;
}> = ({ title, description, showArrow = true, className = '' }) => {
  const ArrowIcon = () => (
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ color: '#1f2937' }}
    >
      <path 
        d="M7 17L17 7M17 7H7M17 7V17" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div className={`content product ${className}`}>
      <div className="product-header">
        <div>
          <h3 className="product-title">{title}</h3>
          <p className="product-description">{description}</p>
        </div>
        {showArrow && <ArrowIcon />}
      </div>
    </div>
  );
};
