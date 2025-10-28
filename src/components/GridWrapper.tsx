import React from 'react';
import Grid from './Grid';
import GridBorderOverlay from './GridBorderOverlay';
import GridCell from './GridCell';
import './GridWrapper.css';

export interface GridWrapperProps {
  rows: number;
  columns: number;
  gap?: number;
  className?: string;
  children: React.ReactElement<typeof GridCell> | React.ReactElement<typeof GridCell>[];
}

export const GridWrapper: React.FC<GridWrapperProps> = ({
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
    console.warn('GridWrapper only accepts GridCell children');
    return null;
  }).filter(Boolean);
  
  return (
    <div className="grid-display">
      <div 
        className={`grid-wrapper ${className}`}
        style={{ '--grid-aspect-ratio': aspectRatio } as React.CSSProperties}
      >
        <Grid rows={rows} columns={columns} gap={gap}>
          {validChildren}
        </Grid>
        <GridBorderOverlay rows={rows} columns={columns} />
      </div>
    </div>
  );
};

export default GridWrapper;
