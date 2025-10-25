import React from 'react';
import './GridBorderOverlay.css';

export interface GridBorderOverlayProps {
  rows: number;
  columns: number;
  className?: string;
}

export const GridBorderOverlay: React.FC<GridBorderOverlayProps> = ({
  rows,
  columns,
  className = ''
}) => {
  // Generate horizontal lines (rows + 1)
  const horizontalLines = Array.from({ length: rows + 1 }, (_, i) => ({
    id: `h-${i}`,
    top: `${(i / rows) * 100}%`,
    delay: 0.2 + (i * 0.1)
  }));

  // Generate vertical lines (columns + 1)
  const verticalLines = Array.from({ length: columns + 1 }, (_, i) => ({
    id: `v-${i}`,
    left: `${(i / columns) * 100}%`,
    delay: 0.5 + (i * 0.1)
  }));

  return (
    <div className={`grid-border-overlay ${className}`}>
      {/* Horizontal lines */}
      {horizontalLines.map((line) => (
        <div
          key={line.id}
          className="border-line horizontal-line"
          style={{
            top: line.top,
            animationDelay: `${line.delay}s`
          }}
        />
      ))}
      
      {/* Vertical lines */}
      {verticalLines.map((line) => (
        <div
          key={line.id}
          className="border-line vertical-line"
          style={{
            left: line.left,
            animationDelay: `${line.delay}s`
          }}
        />
      ))}
    </div>
  );
};

export default GridBorderOverlay;
