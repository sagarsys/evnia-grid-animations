'use client';

import React from 'react';
import Grid from '@/components/Grid';
import GridCell from '@/components/GridCell';
import GridCellContent from '@/components/GridCellContent';
import CellContent from '@/components/CellContent';
import ProductContent from '@/components/ProductContent';
import './page.css';

export default function Home() {
  return (
    <div className="page-container">
      <div className="container">
        <div className="section">
          <Grid rows={2} columns={3} gap={0}>
          <GridCell 
            className="cell-3000"
            hoverImage="/images/ai-generated-8020817_1280.jpg"
            hoverDirection="left"
          >
            <GridCellContent>
              <ProductContent
                title="Evnia 3000 series"
                description="Our product series for the casual gamer. High performance, with distinguishable features for the entry level player."
              />
            </GridCellContent>
          </GridCell>

          <GridCell 
            colSpan={2}
            className="cell-7000"
            hoverImage="/images/istockphoto-1560833158-2048x2048.jpg"
            hoverDirection="right"
            innerGrid={true}
          >
            <GridCellContent innerCell={true}>
              <CellContent empty={true} />
            </GridCellContent>
            <GridCellContent innerCell={true}>
              <ProductContent
                title="Evnia 7000 series"
                description="Our product series for the avid gamer with an eye for design. A high-performance screen that fits into the most stunning environments."
              />
            </GridCellContent>
          </GridCell>

          <GridCell 
            colSpan={3}
            rowSpan={1}
            className="cell-5000 cell-with-inner-grid-3"
            hoverImage="/images/ai-generated-8531096_1280.webp"
            hoverDirection="bottom"
            innerGrid={true}
          >
            <GridCellContent innerCell={true}>
              <CellContent empty={true} />
            </GridCellContent>
            <GridCellContent innerCell={true}>
              <ProductContent
                title="Evnia 5000 series"
                description="Our product series for the intermediate gamer. High performance, with a futuristic design for the more enthusiastic player."
              />
            </GridCellContent>
            <GridCellContent innerCell={true}>
              <CellContent empty={true} />
            </GridCellContent>
          </GridCell>
          </Grid>
        </div>

        {/* Test Reusability: 2x1 Grid */}
        <div className="section">
          <Grid rows={1} columns={2} gap={0}>
          <GridCell className="cell-test-left">
            <GridCellContent>
              <ProductContent
                title="Left Section"
                description="Text content here"
                showArrow={false}
              />
            </GridCellContent>
          </GridCell>

          <GridCell className="cell-test-right">
            <GridCellContent>
              <ProductContent
                title="Right Section"
                description="Product display here"
                showArrow={false}
              />
            </GridCellContent>
          </GridCell>
          </Grid>
        </div>

        {/* Test Viewport Animations: Duplicate 3x2 Grid */}
        <div className="section">
          <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>
            Scroll down to see viewport-triggered animations
          </h2>
          <Grid rows={2} columns={3} gap={0}>
          <GridCell 
            className="cell-3000"
            hoverImage="/images/ai-generated-8020817_1280.jpg"
            hoverDirection="left"
          >
            <GridCellContent>
              <ProductContent
                title="Evnia 3000 series"
                description="Our product series for the casual gamer. High performance, with distinguishable features for the entry level player."
              />
            </GridCellContent>
          </GridCell>

          <GridCell 
            colSpan={2}
            className="cell-7000"
            hoverImage="/images/istockphoto-1560833158-2048x2048.jpg"
            hoverDirection="right"
            innerGrid={true}
          >
            <GridCellContent innerCell={true}>
              <CellContent empty={true} />
            </GridCellContent>
            <GridCellContent innerCell={true}>
              <ProductContent
                title="Evnia 7000 series"
                description="Our product series for the avid gamer with an eye for design. A high-performance screen that fits into the most stunning environments."
              />
            </GridCellContent>
          </GridCell>

          <GridCell 
            colSpan={3}
            rowSpan={1}
            className="cell-5000 cell-with-inner-grid-3"
            hoverImage="/images/ai-generated-8531096_1280.webp"
            hoverDirection="bottom"
            innerGrid={true}
          >
            <GridCellContent innerCell={true}>
              <CellContent empty={true} />
            </GridCellContent>
            <GridCellContent innerCell={true}>
              <ProductContent
                title="Evnia 5000 series"
                description="Our product series for the intermediate gamer. High performance, with a futuristic design for the more enthusiastic player."
              />
            </GridCellContent>
            <GridCellContent innerCell={true}>
              <CellContent empty={true} />
            </GridCellContent>
          </GridCell>
          </Grid>
        </div>
      </div>
    </div>
  );
}