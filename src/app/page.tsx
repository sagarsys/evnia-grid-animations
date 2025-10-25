'use client';

import React from 'react';
import Grid from '@/components/Grid';
import GridCell from '@/components/GridCell';
import GridBorderOverlay from '@/components/GridBorderOverlay';
import './page.css';

const ArrowIcon = () => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    style={{ color: '#1f2937' }}
  >
    <path 
      d="M7 17L17 7M17 7H7M17 7V17" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export default function Home() {
  return (
    <div className="page-container">
      <div className="container">
        <div className="grid-display">
          <div 
            className="grid-wrapper"
            style={{ '--grid-aspect-ratio': '3 / 2' } as React.CSSProperties}
          >
            <Grid rows={2} columns={3} gap={0}>
              <GridCell 
                id="evnia-3000"
                className="cell-3000 hover-image slide-from-left"
                style={{ '--hover-image': "url('data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><rect width='400' height='300' fill='%23e0e7ff'/><text x='200' y='150' text-anchor='middle' fill='%231f2937' font-size='24' font-family='Arial'>Evnia 3000 Image</text></svg>')" } as React.CSSProperties}
              >
                <div className="cell-content">
                  <div className="cell-header">
                    <div>
                      <h3 className="cell-title">Evnia 3000 series</h3>
                      <p className="cell-description">
                        Our product series for the casual gamer. High performance, with distinguishable features for the entry level player.
                      </p>
                    </div>
                    <ArrowIcon />
                  </div>
                </div>
              </GridCell>

              <GridCell 
                id="evnia-7000"
                colSpan={2}
                className="cell-7000 cell-with-inner-grid hover-image slide-from-right"
                style={{ '--hover-image': "url('data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><rect width='400' height='300' fill='%23dbeafe'/><text x='200' y='150' text-anchor='middle' fill='%231f2937' font-size='24' font-family='Arial'>Evnia 7000 Image</text></svg>')" } as React.CSSProperties}
              >
                <div className="inner-grid">
                  <div className="inner-cell empty-cell">
                    {/* Empty cell - just shows border */}
                  </div>
                  <div className="inner-cell content-cell">
                    <div className="cell-content">
                      <div className="cell-header">
                        <div>
                          <h3 className="cell-title">Evnia 7000 series</h3>
                          <p className="cell-description">
                            Our product series for the avid gamer with an eye for design. A high-performance screen that fits into the most stunning environments.
                          </p>
                        </div>
                        <ArrowIcon />
                      </div>
                    </div>
                  </div>
                </div>
              </GridCell>

              <GridCell 
                id="evnia-5000"
                colSpan={3}
                rowSpan={1}
                className="cell-5000 cell-with-inner-grid hover-image slide-from-bottom"
                style={{ '--hover-image': "url('data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><rect width='400' height='300' fill='%23cffafe'/><text x='200' y='150' text-anchor='middle' fill='%231f2937' font-size='24' font-family='Arial'>Evnia 5000 Image</text></svg>')" } as React.CSSProperties}
              >
                <div className="inner-grid-3">
                  <div className="inner-cell empty-cell">
                    {/* Empty cell - just shows border */}
                  </div>
                  <div className="inner-cell content-cell">
                    <div className="cell-content">
                      <div className="cell-header">
                        <div>
                          <h3 className="cell-title">Evnia 5000 series</h3>
                          <p className="cell-description">
                            Our product series for the intermediate gamer. High performance, with a futuristic design for the more enthusiastic player.
                          </p>
                        </div>
                        <ArrowIcon />
                      </div>
                    </div>
                  </div>
                  <div className="inner-cell empty-cell">
                    {/* Empty cell - just shows border */}
                  </div>
                </div>
              </GridCell>
            </Grid>
            <GridBorderOverlay rows={2} columns={3} />
          </div>
        </div>
      </div>
    </div>
  );
}