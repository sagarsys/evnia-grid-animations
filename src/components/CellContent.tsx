import React from 'react';
import './CellContent.css';

export interface CellContentProps {
  children?: React.ReactNode;
  empty?: boolean;
  className?: string;
}

export const CellContent: React.FC<CellContentProps> = ({ 
  children, 
  empty = false, 
  className = '' 
}) => {
  if (empty) {
    return (
      <div className={`cell-content empty ${className}`}>
        {/* Empty cell - just shows border */}
      </div>
    );
  }

  return (
    <div className={`cell-content ${className}`}>
      {children}
    </div>
  );
};

export default CellContent;
