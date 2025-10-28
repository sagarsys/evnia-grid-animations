import React from 'react';
import './ProductContent.css';

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

export interface ProductContentProps {
  title: string;
  description: string;
  showArrow?: boolean;
  className?: string;
}

export const ProductContent: React.FC<ProductContentProps> = ({
  title,
  description,
  showArrow = true,
  className = ''
}) => {
  return (
    <div className={`product-content ${className}`}>
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

export default ProductContent;
