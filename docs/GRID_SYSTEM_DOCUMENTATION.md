# Evnia Grid System Documentation

> **Quick Start**: See [QUICK_START.md](./QUICK_START.md) for a 5-minute getting started guide.

## Overview

The Evnia Grid System is a reusable, configurable grid layout system built with React and CSS. It supports dynamic aspect ratios, cell spanning, animated borders, and hover effects with a clean separation between grid logic and content.

## Table of Contents

- [Core Components](#core-components)
- [Grid Architecture](#grid-architecture)
- [Cell Spanning System](#cell-spanning-system)
- [Animation System](#animation-system)
- [Usage Examples](#usage-examples)
- [CSS Architecture](#css-architecture)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)
- [API Reference](#api-reference)

## Core Components

### 1. GridWrapper Component (`src/components/GridWrapper.tsx`)

The main wrapper that combines the grid with its aspect ratio and border overlay.

```tsx
interface GridWrapperProps {
  rows: number;
  columns: number;
  gap?: number;
  className?: string;
  children: React.ReactElement<typeof GridCell> | React.ReactElement<typeof GridCell>[];
}

<GridWrapper rows={2} columns={3} gap={0}>
  {/* GridCell components go here */}
</GridWrapper>
```

**Key Features:**

- **Type-safe children**: Only accepts `GridCell` components
- **Automatic aspect ratio**: Calculates `--grid-aspect-ratio` based on `columns / rows`
- **Integrated border overlay**: Automatically includes `GridBorderOverlay`
- **Validation**: Warns if non-GridCell children are provided

### 2. Grid Component (`src/components/Grid.tsx`)

The CSS Grid container that creates the layout structure.

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

### 3. GridCell Component (`src/components/GridCell.tsx`)

Wraps content within the grid and handles cell spanning with enhanced functionality.

```tsx
interface GridCellProps {
  id?: string;
  rowSpan?: number;
  colSpan?: number;
  className?: string;
  style?: React.CSSProperties;
  hoverImage?: string;
  hoverDirection?: 'left' | 'right' | 'top' | 'bottom';
  innerGrid?: boolean; // New prop for automatic inner grid handling
  children: React.ReactNode;
}

<GridCell 
  colSpan={2}
  className="cell-7000"
  hoverImage="/images/product.jpg"
  hoverDirection="right"
  innerGrid={true}
>
  {/* Content goes here */}
</GridCell>
```

**Key Features:**

- **Props-based hover images**: Clean API with `hoverImage` and `hoverDirection` props
- **Automatic inner grid**: `innerGrid={true}` automatically wraps children in inner grid
- **Cell spanning**: `colSpan` and `rowSpan` for multi-cell content
- **Type-safe hover directions**: Limited to valid animation directions

### 4. GridCellContent Component (`src/components/GridCellContent.tsx`)

Handles the layout structure for individual cell content.

```tsx
interface GridCellContentProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  innerCell?: boolean; // For inner grid cells
}

<GridCellContent innerCell={true}>
  <CellContent>
    <ProductContent title="Product" description="Description" />
  </CellContent>
</GridCellContent>
```

**Key Features:**

- **Layout structure**: Handles cell content positioning
- **Inner cell support**: `innerCell` prop for nested grid layouts
- **Content flexibility**: Accepts any React children

### 5. CellContent Component (`src/components/CellContent.tsx`)

Base content wrapper that handles both regular and empty content.

```tsx
interface CellContentProps {
  children?: React.ReactNode;
  empty?: boolean;
  className?: string;
}

// Empty cell
<CellContent empty={true} />

// Regular content
<CellContent>
  <ProductContent title="Product" description="Description" />
</CellContent>
```

**Key Features:**

- **Unified API**: Single component for both empty and regular content
- **Clean logic**: Early return pattern for better readability
- **Flexible content**: Accepts any React children

### 6. ProductContent Component (`src/components/ProductContent.tsx`)

Dedicated component for product-specific content and styling.

```tsx
interface ProductContentProps {
  title: string;
  description: string;
  showArrow?: boolean;
  className?: string;
}

<ProductContent
  title="Evnia 3000 series"
  description="Our product series for the casual gamer."
  showArrow={true}
/>
```

**Key Features:**

- **Product-specific styling**: Handles all product data and styling
- **Configurable arrow**: `showArrow` prop to control arrow visibility
- **Type-safe props**: Full TypeScript support for product data

### 7. GridBorderOverlay Component (`src/components/GridBorderOverlay.tsx`)

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

### Component Hierarchy

```text
GridWrapper (type-safe container)
├── Grid (CSS Grid layout)
│   ├── GridCell (with innerGrid support)
│   │   ├── GridCellContent (layout structure)
│   │   │   └── CellContent (base content wrapper)
│   │   │       └── ProductContent (product-specific content)
│   │   └── GridCell (nested inner grid)
│   │       ├── GridCellContent (innerCell={true})
│   │       │   └── CellContent (empty={true})
│   │       └── GridCellContent (innerCell={true})
│   │           └── CellContent
│   │               └── ProductContent
│   └── GridCell (spans multiple columns)
└── GridBorderOverlay (animated borders)
    ├── Horizontal lines (rows + 1)
    └── Vertical lines (columns + 1)
```

### Basic Grid Structure

```text
┌─────────────────────────────────────┐
│           GridWrapper               │
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

```text
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
const aspectRatio = `${columns} / ${rows}`;
const gridStyle = {
  '--grid-aspect-ratio': aspectRatio,
  // ... other styles
};
```

## Cell Spanning System

### Basic Cell (1x1)

```tsx
<GridCell className="cell-3000">
  <GridCellContent>
    <CellContent>
      <ProductContent
        title="Evnia 3000 series"
        description="Our product series for the casual gamer."
      />
    </CellContent>
  </GridCellContent>
</GridCell>
```

### Horizontal Spanning (2 columns)

```tsx
<GridCell colSpan={2} className="cell-7000">
  <GridCellContent>
    <CellContent>
      <ProductContent
        title="Evnia 7000 series"
        description="High-performance gaming monitor."
      />
    </CellContent>
  </GridCellContent>
</GridCell>
```

### Complex Inner Grid (2 columns with nested layout)

```tsx
<GridCell 
  colSpan={2}
  className="cell-7000"
  innerGrid={true}
>
  <GridCellContent innerCell={true}>
    <CellContent empty={true} />
  </GridCellContent>
  <GridCellContent innerCell={true}>
    <CellContent>
      <ProductContent
        title="Evnia 7000 series"
        description="High-performance gaming monitor."
      />
    </CellContent>
  </GridCellContent>
</GridCell>
```

### 3-Column Inner Grid

```tsx
<GridCell 
  colSpan={3}
  className="cell-5000 cell-with-inner-grid-3"
  innerGrid={true}
>
  <GridCellContent innerCell={true}>
    <CellContent empty={true} />
  </GridCellContent>
  <GridCellContent innerCell={true}>
    <CellContent>
      <ProductContent
        title="Evnia 5000 series"
        description="Intermediate gaming monitor."
      />
    </CellContent>
  </GridCellContent>
  <GridCellContent innerCell={true}>
    <CellContent empty={true} />
  </GridCellContent>
</GridCell>
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

### Props-Based Hover Image Animations

Clean API for hover effects with type-safe directions:

```tsx
<GridCell 
  className="cell-3000"
  hoverImage="/images/evnia-3000.jpg"
  hoverDirection="left"
>
  <GridCellContent>
    <CellContent>
      <ProductContent
        title="Evnia 3000 series"
        description="Our product series for the casual gamer."
      />
    </CellContent>
  </GridCellContent>
</GridCell>
```

**Available Animation Directions:**

- `left`: Image slides from left to right
- `right`: Image slides from right to left
- `bottom`: Image slides from bottom to top
- `top`: Image slides from top to bottom

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
<GridWrapper rows={2} columns={2} gap={0}>
  <GridCell className="cell-1">
    <GridCellContent>
      <CellContent>
        <ProductContent
          title="Top Left"
          description="Description here"
        />
      </CellContent>
    </GridCellContent>
  </GridCell>
  <GridCell className="cell-2">
    <GridCellContent>
      <CellContent>
        <ProductContent
          title="Top Right"
          description="Description here"
        />
      </CellContent>
    </GridCellContent>
  </GridCell>
  <GridCell className="cell-3">
    <GridCellContent>
      <CellContent>
        <ProductContent
          title="Bottom Left"
          description="Description here"
        />
      </CellContent>
    </GridCellContent>
  </GridCell>
  <GridCell className="cell-4">
    <GridCellContent>
      <CellContent>
        <ProductContent
          title="Bottom Right"
          description="Description here"
        />
      </CellContent>
    </GridCellContent>
  </GridCell>
</GridWrapper>
```

### Complex Layout with Inner Grids

```tsx
<GridWrapper rows={2} columns={3} gap={0}>
  {/* Single cell */}
  <GridCell className="cell-3000">
    <GridCellContent>
      <CellContent>
        <ProductContent
          title="Evnia 3000 series"
          description="Our product series for the casual gamer."
        />
      </CellContent>
    </GridCellContent>
  </GridCell>
  
  {/* 2-column inner grid */}
  <GridCell 
    colSpan={2}
    className="cell-7000"
    hoverImage="/images/evnia-7000.jpg"
    hoverDirection="right"
    innerGrid={true}
  >
    <GridCellContent innerCell={true}>
      <CellContent empty={true} />
    </GridCellContent>
    <GridCellContent innerCell={true}>
      <CellContent>
        <ProductContent
          title="Evnia 7000 series"
          description="High-performance gaming monitor."
        />
      </CellContent>
    </GridCellContent>
  </GridCell>
  
  {/* 3-column inner grid */}
  <GridCell 
    colSpan={3}
    className="cell-5000 cell-with-inner-grid-3"
    hoverImage="/images/evnia-5000.jpg"
    hoverDirection="bottom"
    innerGrid={true}
  >
    <GridCellContent innerCell={true}>
      <CellContent empty={true} />
    </GridCellContent>
    <GridCellContent innerCell={true}>
      <CellContent>
        <ProductContent
          title="Evnia 5000 series"
          description="Intermediate gaming monitor."
        />
      </CellContent>
    </GridCellContent>
    <GridCellContent innerCell={true}>
      <CellContent empty={true} />
    </GridCellContent>
  </GridCell>
</GridWrapper>
```

## CSS Architecture

### Component-Specific Styles

```css
/* GridWrapper styles */
.grid-wrapper { /* Container with aspect ratio */ }
.grid-display { /* Display wrapper */ }

/* Grid system */
.grid-container { /* CSS Grid layout */ }
.grid-cell { /* Individual cell styling */ }

/* Content components */
.cell-content { /* Base content wrapper */ }
.grid-content { /* GridContent component */ }
.product-content { /* ProductContent component */ }
.product-header { /* Product header layout */ }
.product-title { /* Product title styling */ }
.product-description { /* Product description styling */ }

/* Animation system */
.hover-image { /* Base hover functionality */ }
.slide-from-left { /* Animation direction */ }
.slide-from-right { /* Animation direction */ }
.slide-from-bottom { /* Animation direction */ }
.slide-from-top { /* Animation direction */ }

/* Inner grid system */
.inner-grid { /* 2-column inner grid */ }
.inner-grid-3 { /* 3-column inner grid */ }
.inner-cell { /* Inner cell styling */ }
.cell-with-inner-grid { /* Inner grid container */ }
.cell-with-inner-grid-3 { /* 3-column inner grid container */ }
```

### CSS Custom Properties

```css
.grid-wrapper {
  --grid-aspect-ratio: 3 / 2; /* Set by JavaScript */
}

.hover-image::before {
  --hover-image: url('/image.jpg'); /* Set by props */
}
```

## Best Practices

### 1. Component Usage

- **Use GridWrapper**: Always wrap grids with `GridWrapper` for type safety
- **Props-based hover**: Use `hoverImage` and `hoverDirection` props instead of CSS variables
- **Inner grid support**: Use `innerGrid={true}` for complex layouts
- **Content separation**: Use `CellContent` for base content, `ProductContent` for product data

### 2. Grid Configuration

- **Always set aspect ratio**: `GridWrapper` handles this automatically
- **Plan cell spanning**: Consider content layout before implementing
- **Use type-safe children**: `GridWrapper` only accepts `GridCell` components

### 3. Animation Timing

- **Border animations**: 0.2s start, 0.1s stagger
- **Content animations**: 1.2s+ start (after borders)
- **Hover animations**: 0.5s duration, immediate trigger

### 4. Content Structure

- **Use semantic components**: `ProductContent` for product data
- **Consistent patterns**: `GridCellContent` → `CellContent` → `ProductContent`
- **Empty cells**: Use `CellContent empty={true}` for empty cells

### 5. Performance

- **Optimize images**: Use appropriate formats and sizes
- **CSS animations**: Prefer CSS over JavaScript
- **Minimize repaints**: Use transform/opacity for animations

## Troubleshooting

### Common Issues

**1. TypeScript errors with GridWrapper:**

- Ensure all children are `GridCell` components
- Check that `GridCell` is properly imported

**2. Hover animations not working:**

- Verify `hoverImage` and `hoverDirection` props are set
- Check that animation classes are applied correctly
- Ensure hover state triggers animation

**3. Inner grid not working:**

- Set `innerGrid={true}` on `GridCell`
- Use `innerCell={true}` on `GridCellContent` for inner cells
- Apply appropriate CSS classes for grid template

**4. Content not displaying:**

- Ensure proper component hierarchy: `GridCellContent` → `CellContent` → `ProductContent`
- Check that `ProductContent` has required `title` and `description` props

### Debug Checklist

- [ ] GridWrapper children are all GridCell components
- [ ] Inner grid has `innerGrid={true}` and `innerCell={true}` props
- [ ] Hover props are set correctly (`hoverImage`, `hoverDirection`)
- [ ] Content hierarchy is correct
- [ ] CSS classes are applied properly
- [ ] Images are accessible and optimized

## File Structure

```text
src/
├── components/
│   ├── GridWrapper.tsx          # Main wrapper with type safety
│   ├── GridWrapper.css          # Wrapper styles
│   ├── Grid.tsx                 # CSS Grid component
│   ├── Grid.css                 # Grid base styles
│   ├── GridCell.tsx             # Cell wrapper with enhanced features
│   ├── GridCell.css             # Cell base styles
│   ├── GridCellContent.tsx      # Cell content layout
│   ├── GridCellContent.css      # Cell content styles
│   ├── CellContent.tsx          # Base content wrapper
│   ├── CellContent.css          # Content styles
│   ├── ProductContent.tsx       # Product-specific content
│   ├── ProductContent.css       # Product content styles
│   ├── GridBorderOverlay.tsx    # Border animation overlay
│   └── GridBorderOverlay.css    # Border animation styles
├── app/
│   ├── page.tsx                 # Demo page
│   └── page.css                 # Page-specific styles
└── public/
    └── images/                  # Hover effect images
```

## Component API Reference

### GridWrapper

```tsx
interface GridWrapperProps {
  rows: number;
  columns: number;
  gap?: number;
  className?: string;
  children: React.ReactElement<typeof GridCell> | React.ReactElement<typeof GridCell>[];
}
```

### GridCell

```tsx
interface GridCellProps {
  id?: string;
  rowSpan?: number;
  colSpan?: number;
  className?: string;
  style?: React.CSSProperties;
  hoverImage?: string;
  hoverDirection?: 'left' | 'right' | 'top' | 'bottom';
  innerGrid?: boolean;
  children: React.ReactNode;
}
```

### CellContent

```tsx
interface CellContentProps {
  children?: React.ReactNode;
  empty?: boolean;
  className?: string;
}
```

### ProductContent

```tsx
interface ProductContentProps {
  title: string;
  description: string;
  showArrow?: boolean;
  className?: string;
}
```

This system provides a complete, reusable solution for creating animated grid layouts with flexible content, type safety, and clean separation of concerns.
