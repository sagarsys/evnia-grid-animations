# Evnia Grid System Documentation

## Overview

The Evnia Grid System is a reusable, configurable grid layout system built with React and CSS. It supports dynamic aspect ratios, cell spanning, animated borders, and hover effects. The system is designed to be completely reusable across different grid configurations.

## Core Components

### 1. Grid Component (`src/components/Grid.tsx`)

The main grid container that creates a CSS Grid layout.

```tsx
interface GridProps {
  rows: number;
  columns: number;
  gap?: number;
  className?: string;
  children?: React.ReactNode;
}

<Grid rows={2} columns={3} gap={0}>
  {/* GridCell components go here */}
</Grid>
```

**Key Features:**
- **Dynamic aspect ratio**: Calculates `--grid-aspect-ratio` based on `columns / rows`
- **Flexible children**: Accepts any React children (typically GridCell components)
- **Configurable gap**: Optional spacing between cells

### 2. GridCell Component (`src/components/GridCell.tsx`)

Wraps content within the grid and handles cell spanning.

```tsx
interface GridCellProps {
  id: string;
  colSpan?: number;
  rowSpan?: number;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

<GridCell 
  id="cell-1" 
  colSpan={2} 
  rowSpan={1}
  className="custom-cell"
  style={{ '--hover-image': "url('/image.jpg')" }}
>
  <div>Content here</div>
</GridCell>
```

**Key Features:**
- **Cell spanning**: `colSpan` and `rowSpan` for multi-cell content
- **Custom styling**: Accepts `className` and `style` props
- **Content flexibility**: Any React content as children

### 3. GridBorderOverlay Component (`src/components/GridBorderOverlay.tsx`)

Creates animated border lines that overlay the grid.

```tsx
interface GridBorderOverlayProps {
  rows: number;
  columns: number;
}

<GridBorderOverlay rows={2} columns={3} />
```

**Key Features:**
- **Dynamic line generation**: Creates borders based on grid dimensions
- **Animated drawing**: Lines draw from origin points with staggered timing
- **Overlay positioning**: Absolute positioning over grid content

## Grid Architecture

### Basic Grid Structure

```
┌─────────────────────────────────────┐
│           grid-wrapper              │
│  ┌─────────────────────────────────┐ │
│  │         Grid (CSS Grid)        │ │
│  │  ┌─────┬─────┬─────┐           │ │
│  │  │Cell1│Cell2│Cell3│           │ │
│  │  ├─────┼─────┼─────┤           │ │
│  │  │Cell4│Cell5│Cell6│           │ │
│  │  └─────┴─────┴─────┘           │ │
│  └─────────────────────────────────┘ │
│  ┌─────────────────────────────────┐ │
│  │    GridBorderOverlay           │ │
│  │  (Animated border lines)       │ │
│  └─────────────────────────────────┘ │
└─────────────────────────────────────┘
```

### Animation Flow Diagram

```
1. Page Load
   ↓
2. Border Lines Draw (0.2s - 0.8s)
   ├─ Horizontal lines: 0.2s, 0.3s, 0.4s
   └─ Vertical lines: 0.5s, 0.6s, 0.7s, 0.8s
   ↓
3. Content Fades In (1.2s - 1.8s)
   ├─ Cell 1: 1.2s
   ├─ Cell 2: 1.4s
   └─ Cell 3: 1.6s
   ↓
4. Hover Effects (On hover)
   ├─ Image slides in from direction
   └─ Smooth transition (0.5s)
```

### Component Hierarchy

```
GridWrapper (aspect-ratio container)
├── Grid (CSS Grid layout)
│   ├── GridCell (spans 1 column)
│   ├── GridCell (spans 2 columns)
│   └── GridCell (spans 3 columns)
└── GridBorderOverlay (animated borders)
    ├── Horizontal lines (rows + 1)
    └── Vertical lines (columns + 1)
```

### CSS Grid Layout

The system uses CSS Grid for flexible layouts:

```css
.grid-container {
  display: grid;
  grid-template-rows: repeat(2, 1fr);    /* 2 rows */
  grid-template-columns: repeat(3, 1fr); /* 3 columns */
  gap: 0px;
}
```

### Dynamic Aspect Ratio

The grid wrapper maintains proper aspect ratio:

```css
.grid-wrapper {
  aspect-ratio: var(--grid-aspect-ratio, 3 / 2);
  position: relative;
}
```

**JavaScript calculation:**
```tsx
const gridStyle = {
  '--grid-aspect-ratio': `${columns} / ${rows}`,
  // ... other styles
};
```

## Cell Spanning System

### Basic Cell (1x1)
```tsx
<GridCell id="cell-1">
  <div>Single cell content</div>
</GridCell>
```

### Horizontal Spanning (2 columns)
```tsx
<GridCell id="cell-2" colSpan={2}>
  <div>Spans 2 columns</div>
</GridCell>
```

### Vertical Spanning (2 rows)
```tsx
<GridCell id="cell-3" rowSpan={2}>
  <div>Spans 2 rows</div>
</GridCell>
```

### Complex Spanning (2x2)
```tsx
<GridCell id="cell-4" colSpan={2} rowSpan={2}>
  <div>Spans 2x2 area</div>
</GridCell>
```

## Nested Grid System

For complex layouts within spanned cells:

### 2-Column Nested Grid
```tsx
<GridCell colSpan={2} className="cell-with-inner-grid">
  <div className="inner-grid">
    <div className="inner-cell empty-cell"></div>
    <div className="inner-cell content-cell">
      <div>Content in right column</div>
    </div>
  </div>
</GridCell>
```

```css
.inner-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 100%;
}
```

### 3-Column Nested Grid
```tsx
<GridCell colSpan={3} className="cell-with-inner-grid">
  <div className="inner-grid-3">
    <div className="inner-cell empty-cell"></div>
    <div className="inner-cell content-cell">
      <div>Content in middle column</div>
    </div>
    <div className="inner-cell empty-cell"></div>
  </div>
</GridCell>
```

```css
.inner-grid-3 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  height: 100%;
}
```

## Animation System

### Border Line Animations

The `GridBorderOverlay` creates animated border lines:

```tsx
const horizontalLines = Array.from({ length: rows + 1 }, (_, i) => ({
  id: `h-${i}`,
  top: `${(i / rows) * 100}%`,
  delay: 0.2 + (i * 0.1) // Staggered delay
}));

const verticalLines = Array.from({ length: columns + 1 }, (_, i) => ({
  id: `v-${i}`,
  left: `${(i / columns) * 100}%`,
  delay: 0.5 + (i * 0.1) // Staggered delay
}));
```

**Animation Timing:**
- **Horizontal lines**: Start at 0.2s, each line +0.1s delay
- **Vertical lines**: Start at 0.5s, each line +0.1s delay
- **Duration**: 1s per line
- **Easing**: `ease-in-out`

### Hover Image Animations

Generic hover system with multiple animation directions:

```tsx
<GridCell 
  className="hover-image slide-from-left"
  style={{ '--hover-image': "url('/image.jpg')" }}
>
  <div>Content</div>
</GridCell>
```

**Available Animation Classes:**
- `slide-from-left`: Image slides from left to right
- `slide-from-right`: Image slides from right to left
- `slide-from-bottom`: Image slides from bottom to top
- `slide-from-top`: Image slides from top to bottom

**CSS Implementation:**
```css
.hover-image::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background-image: var(--hover-image);
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.hover-image.slide-from-left:hover::before {
  animation: slideFromLeft 0.5s ease-out forwards;
}
```

### Content Fade Animations

Text content fades in with staggered timing:

```css
.cell-content {
  opacity: 0;
  transform: translateX(-20px);
  animation: fadeInFromLeft 0.8s ease-out forwards;
}

.cell-3000 .cell-content { animation-delay: 1.2s; }
.cell-7000 .cell-content { animation-delay: 1.4s; }
.cell-5000 .cell-content { animation-delay: 1.6s; }
```

## Usage Examples

### Basic 2x2 Grid
```tsx
<div className="grid-wrapper" style={{ '--grid-aspect-ratio': '2 / 2' }}>
  <Grid rows={2} columns={2} gap={0}>
    <GridCell id="top-left">
      <div className="cell-content">Top Left</div>
    </GridCell>
    <GridCell id="top-right">
      <div className="cell-content">Top Right</div>
    </GridCell>
    <GridCell id="bottom-left">
      <div className="cell-content">Bottom Left</div>
    </GridCell>
    <GridCell id="bottom-right">
      <div className="cell-content">Bottom Right</div>
    </GridCell>
  </Grid>
  <GridBorderOverlay rows={2} columns={2} />
</div>
```

### Complex Layout with Spanning
```tsx
<div className="grid-wrapper" style={{ '--grid-aspect-ratio': '3 / 2' }}>
  <Grid rows={2} columns={3} gap={0}>
    {/* Single cell */}
    <GridCell id="cell-1">
      <div className="cell-content">Single</div>
    </GridCell>
    
    {/* Spans 2 columns */}
    <GridCell id="cell-2" colSpan={2}>
      <div className="cell-content">Spans 2 columns</div>
    </GridCell>
    
    {/* Spans 3 columns */}
    <GridCell id="cell-3" colSpan={3}>
      <div className="cell-content">Spans 3 columns</div>
    </GridCell>
  </Grid>
  <GridBorderOverlay rows={2} columns={3} />
</div>
```

### Grid with Hover Effects
```tsx
<GridCell 
  id="hover-cell"
  className="hover-image slide-from-left"
  style={{ '--hover-image': "url('/images/product.jpg')" }}
>
  <div className="cell-content">
    <h3>Product Name</h3>
    <p>Description</p>
  </div>
</GridCell>
```

## CSS Architecture

### Reusable Classes
```css
/* Grid system */
.grid-wrapper { /* Container with aspect ratio */ }
.grid-container { /* CSS Grid layout */ }
.grid-cell { /* Individual cell styling */ }

/* Animation system */
.hover-image { /* Base hover functionality */ }
.slide-from-left { /* Animation direction */ }
.slide-from-right { /* Animation direction */ }
.slide-from-bottom { /* Animation direction */ }
.slide-from-top { /* Animation direction */ }

/* Content system */
.cell-content { /* Content wrapper */ }
.cell-header { /* Header section */ }
.cell-title { /* Title styling */ }
.cell-description { /* Description styling */ }
```

### CSS Custom Properties
```css
.grid-wrapper {
  --grid-aspect-ratio: 3 / 2; /* Set by JavaScript */
}

.hover-image::before {
  --hover-image: url('/image.jpg'); /* Set by inline style */
}
```

## Best Practices

### 1. Grid Configuration
- **Always set aspect ratio**: `style={{ '--grid-aspect-ratio': 'columns / rows' }}`
- **Use GridBorderOverlay**: Match rows/columns with Grid component
- **Plan cell spanning**: Consider content layout before implementing

### 2. Animation Timing
- **Border animations**: 0.2s start, 0.1s stagger
- **Content animations**: 1.2s+ start (after borders)
- **Hover animations**: 0.5s duration, immediate trigger

### 3. Content Structure
- **Use semantic HTML**: Proper heading hierarchy
- **Consistent classes**: `.cell-content`, `.cell-header`, etc.
- **Accessible content**: Alt text for images, proper contrast

### 4. Performance
- **Optimize images**: Use appropriate formats and sizes
- **CSS animations**: Prefer CSS over JavaScript
- **Minimize repaints**: Use transform/opacity for animations

## Troubleshooting

### Common Issues

**1. Borders not showing:**
- Ensure `GridBorderOverlay` has correct rows/columns
- Check that `grid-wrapper` has `position: relative`

**2. Hover animations not working:**
- Verify `--hover-image` CSS variable is set
- Check that animation classes are applied correctly
- Ensure hover state triggers animation

**3. Cell spanning issues:**
- Verify `colSpan`/`rowSpan` values don't exceed grid bounds
- Check that parent grid has enough columns/rows

**4. Aspect ratio problems:**
- Ensure `--grid-aspect-ratio` is set correctly
- Verify CSS custom property syntax: `'3 / 2'` not `3/2`

### Debug Checklist
- [ ] Grid dimensions match GridBorderOverlay
- [ ] Aspect ratio is set on grid-wrapper
- [ ] Cell spanning doesn't exceed grid bounds
- [ ] Animation classes are applied correctly
- [ ] CSS custom properties are set properly
- [ ] Images are accessible and optimized

## File Structure

```
src/
├── components/
│   ├── Grid.tsx              # Main grid component
│   ├── Grid.css              # Grid base styles
│   ├── GridCell.tsx          # Cell wrapper component
│   ├── GridCell.css          # Cell base styles
│   ├── GridBorderOverlay.tsx # Border animation overlay
│   └── GridBorderOverlay.css # Border animation styles
├── app/
│   ├── page.tsx              # Demo page
│   └── page.css              # Page-specific styles
└── public/
    └── images/               # Hover effect images
```

This system provides a complete, reusable solution for creating animated grid layouts with flexible content and hover effects.
