import React from 'react';
import './GridCellContent.css';

export interface GridCellContentProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  innerCell?: boolean; // New prop for inner cell wrapper
}

export const GridCellContent: React.FC<GridCellContentProps> = ({
  children,
  className = '',
  style,
  innerCell = false
}) => {
  const content = (
    <div className={`cell-content ${className}`} style={style}>
      {children}
    </div>
  );

  return innerCell ? (
    <div className="inner-cell content-cell">
      {content}
    </div>
  ) : content;
};

export default GridCellContent;