import React from 'react';
import GridBorderOverlay from './GridBorderOverlay';
import GridCell from './GridCell';
import './Grid.css';

export interface GridProps {
  rows: number;
  columns: number;
  gap?: number;
  className?: string;
  children: React.ReactElement<typeof GridCell> | React.ReactElement<typeof GridCell>[];
}

export const Grid: React.FC<GridProps> = ({
  rows,
  columns,
  gap = 0,
  className = '',
  children
}) => {
  const aspectRatio = `${columns} / ${rows}`;
  
  // Validate that all children are GridCell components
  const validChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === GridCell) {
      return child;
    }
    console.warn('Grid only accepts GridCell children');
    return null;
  }).filter(Boolean);

  // Grid styles
  const gridStyle: React.CSSProperties = {
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: `${gap}px`,
  };
  
  return (
    <div 
      className={`grid-wrapper ${className}`}
      style={{ '--grid-aspect-ratio': aspectRatio } as React.CSSProperties}
    >
      <div 
        className="grid-container"
        style={gridStyle}
      >
        {validChildren}
      </div>
      <GridBorderOverlay rows={rows} columns={columns} />
    </div>
  );
};

export default Grid;
