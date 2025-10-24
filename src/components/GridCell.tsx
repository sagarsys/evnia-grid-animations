import React from 'react';
import './GridCell.css';

export interface GridCellProps {
  id: string;
  rowSpan?: number;
  colSpan?: number;
  className?: string;
  children: React.ReactNode;
}

export const GridCell: React.FC<GridCellProps> = ({
  id,
  rowSpan,
  colSpan,
  className = '',
  children
}) => {
  const cellStyle: React.CSSProperties = {
    gridRow: rowSpan ? `span ${rowSpan}` : 'auto',
    gridColumn: colSpan ? `span ${colSpan}` : 'auto',
  };

  return (
    <div
      key={id}
      className={`grid-cell ${className}`}
      style={cellStyle}
    >
      {children}
    </div>
  );
};

export default GridCell;
