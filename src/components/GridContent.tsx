import React from 'react';
import './GridContent.css';

// Base grid content wrapper - handles both regular and empty content
export const GridContent: React.FC<{
  children?: React.ReactNode;
  empty?: boolean;
  className?: string;
}> = ({ children, empty = false, className = '' }) => (
  <div className={`grid-content ${empty ? 'empty' : ''} ${className}`}>
    {empty ? (
      /* Empty cell - just shows border */
      null
    ) : (
      children
    )}
  </div>
);

export default GridContent;
