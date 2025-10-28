import React from 'react';
import GridWrapper from './GridWrapper';
import GridCell from './GridCell';
import GridCellContent from './GridCellContent';
import ProductContent from './ProductContent';

// Example demonstrating the new props-based hover image approach
export const GridCellExample: React.FC = () => {
  return (
    <div>
      <h2>GridCell with Props-Based Hover Images</h2>
      
      <GridWrapper rows={2} columns={2} gap={8}>
        {/* Top Left - Slide from left */}
        <GridCell 
          className="cell-example-1"
          hoverImage="/images/ai-generated-8020817_1280.jpg"
          hoverDirection="left"
        >
          <GridCellContent>
            <ProductContent
              title="Slide from Left"
              description="Hover to see image slide in from the left"
            />
          </GridCellContent>
        </GridCell>

        {/* Top Right - Slide from right */}
        <GridCell 
          className="cell-example-2"
          hoverImage="/images/istockphoto-1560833158-2048x2048.jpg"
          hoverDirection="right"
        >
          <GridCellContent>
            <ProductContent
              title="Slide from Right"
              description="Hover to see image slide in from the right"
            />
          </GridCellContent>
        </GridCell>

        {/* Bottom Left - Slide from top */}
        <GridCell 
          className="cell-example-3"
          hoverImage="/images/ai-generated-8531096_1280.webp"
          hoverDirection="top"
        >
          <GridCellContent>
            <ProductContent
              title="Slide from Top"
              description="Hover to see image slide in from the top"
            />
          </GridCellContent>
        </GridCell>

        {/* Bottom Right - Slide from bottom */}
        <GridCell 
          className="cell-example-4"
          hoverImage="/images/ai-generated-8020817_1280.jpg"
          hoverDirection="bottom"
        >
          <GridCellContent>
            <ProductContent
              title="Slide from Bottom"
              description="Hover to see image slide in from the bottom"
            />
          </GridCellContent>
        </GridCell>
      </GridWrapper>
    </div>
  );
};

export default GridCellExample;
