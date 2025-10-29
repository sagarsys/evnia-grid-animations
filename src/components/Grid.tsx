import React from 'react';
import GridBorderOverlay from './GridBorderOverlay';
import GridCell from './GridCell';
import useInView from '../hooks/useInView';
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
  const [gridRef, isInView] = useInView({ threshold: 0.1, triggerOnce: true });
  
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
      ref={gridRef}
      className={`grid-wrapper ${className}`}
      style={{ 
        '--grid-aspect-ratio': aspectRatio,
        '--animation-state': isInView ? 'running' : 'paused'
      } as React.CSSProperties}
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
