import React from 'react';
import GridCellContent from './GridCellContent';
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
  children: React.ReactElement<typeof GridCellContent> | React.ReactElement<typeof GridCellContent>[];
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

  // Validate that all children are GridCellContent components
  const validChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === GridCellContent) {
      return child;
    }
    console.warn('GridCell only accepts GridCellContent children');
    return null;
  }).filter(Boolean);

  return (
    <div
      className={`grid-cell ${hoverClasses} ${innerGridClass} ${className}`}
      style={cellStyle}
    >
      {innerGrid ? (
        <div className="inner-grid">
          {validChildren}
        </div>
      ) : (
        validChildren
      )}
    </div>
  );
};

export default GridCell;
