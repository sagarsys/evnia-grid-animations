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
    drawDelay: 0.1 + (i * 0.1),
    fadeDelay: 0.1 + (i * 0.1)
  }));

  // Generate vertical lines (columns + 1)
  const verticalLines = Array.from({ length: columns + 1 }, (_, i) => ({
    id: `v-${i}`,
    left: `${(i / columns) * 100}%`,
    drawDelay: 0.5, // All vertical lines start together
    fadeDelay: 0.5 + (i * 0.1) // Staggered fade-in for vertical lines
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
            '--draw-delay': `${line.drawDelay}s`,
            '--fade-delay': `${line.fadeDelay}s`,
            animationDelay: `var(--draw-delay), var(--fade-delay)`
          } as React.CSSProperties}
        />
      ))}
      
      {/* Vertical lines */}
      {verticalLines.map((line) => (
        <div
          key={line.id}
          className="border-line vertical-line"
          style={{
            left: line.left,
            '--draw-delay': `${line.drawDelay}s`,
            '--fade-delay': `${line.fadeDelay}s`,
            animationDelay: `var(--draw-delay), var(--fade-delay)`
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default GridBorderOverlay;
