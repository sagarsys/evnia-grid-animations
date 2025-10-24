import React from 'react';
import './Grid.css';

export interface GridProps {
  rows: number;
  columns: number;
  gap?: number;
  className?: string;
  children?: React.ReactNode;
}

export const Grid: React.FC<GridProps> = ({ 
  rows, 
  columns, 
  gap = 8, 
  className = '',
  children
}) => {
  const gridStyle: React.CSSProperties = {
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: `${gap}px`,
    '--grid-aspect-ratio': `${columns} / ${rows}`,
  } as React.CSSProperties;

  return (
    <div 
      className={`grid-container ${className}`}
      style={gridStyle}
    >
      {children}
    </div>
  );
};

export default Grid;

