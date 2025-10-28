import React from 'react';
import './GridCell.css';

export interface GridCellProps {
  id?: string;
  rowSpan?: number;
  colSpan?: number;
  className?: string;
  style?: React.CSSProperties;
  hoverImage?: string;
  hoverDirection?: 'left' | 'right' | 'top' | 'bottom';
  innerGrid?: boolean; // New prop to enable inner grid
  children: React.ReactNode;
}

export const GridCell: React.FC<GridCellProps> = ({
  rowSpan,
  colSpan,
  className = '',
  style,
  hoverImage,
  hoverDirection = 'left',
  innerGrid = false,
  children
}) => {
  const cellStyle: React.CSSProperties = {
    gridRow: rowSpan ? `span ${rowSpan}` : 'auto',
    gridColumn: colSpan ? `span ${colSpan}` : 'auto',
    ...(hoverImage && {
      '--hover-image': `url(${hoverImage})`,
    }),
    ...style,
  };

  const hoverClasses = hoverImage ? `hover-image slide-from-${hoverDirection}` : '';
  const innerGridClass = innerGrid ? 'cell-with-inner-grid' : '';

  return (
    <div
      className={`grid-cell ${hoverClasses} ${innerGridClass} ${className}`}
      style={cellStyle}
    >
      {innerGrid ? (
        <div className="inner-grid">
          {children}
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default GridCell;
