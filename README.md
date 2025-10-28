# Evnia Grid System

A React component library for creating animated grid layouts with hover effects and flexible content.

## 🚀 Quick Start

```tsx
import { Grid, GridCell, GridCellContent, CellContent, ProductContent } from '@/components';

<Grid rows={2} columns={2}>
  <GridCell hoverImage="/image.jpg" hoverDirection="left">
    <GridCellContent>
      <CellContent>
        <ProductContent title="Product" description="Description" />
      </CellContent>
    </GridCellContent>
  </GridCell>
</Grid>
```

## 📦 Components

### Grid

Main container with type-safe children validation.

```tsx
<Grid rows={2} columns={3} gap={0}>
  {/* Only GridCell children allowed */}
</Grid>
```

### GridCell

Individual cell with spanning and hover support.

```tsx
<GridCell 
  colSpan={2} 
  hoverImage="/image.jpg" 
  hoverDirection="left"
  innerGrid={true}
>
  {/* Content */}
</GridCell>
```

### Content Components

- `GridCellContent` - Cell layout structure
- `CellContent` - Base content wrapper (`empty` prop for empty cells)
- `ProductContent` - Product-specific content with title, description, and optional arrow

## 🎨 Features

- **Type Safety** - TypeScript support with proper validation
- **Animated Borders** - Automatic border drawing animations
- **Hover Effects** - Image slide animations from 4 directions
- **Cell Spanning** - Support for multi-cell content
- **Inner Grids** - Complex nested layouts
- **Responsive** - Dynamic aspect ratios

## 🎯 Common Patterns

### Empty Cell

```tsx
<CellContent empty={true} />
```

### Product with Hover

```tsx
<GridCell hoverImage="/product.jpg" hoverDirection="left">
  <GridCellContent>
    <CellContent>
      <ProductContent title="Product" description="Description" />
    </CellContent>
  </GridCellContent>
</GridCell>
```

### Inner Grid Layout

```tsx
<GridCell colSpan={2} innerGrid={true}>
  <GridCellContent innerCell={true}>
    <CellContent empty={true} />
  </GridCellContent>
  <GridCellContent innerCell={true}>
    <CellContent>
      <ProductContent title="Product" description="Description" />
    </CellContent>
  </GridCellContent>
</GridCell>
```

## 🛠️ Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 File Structure

```text
src/components/
├── Grid.tsx             # Main grid
├── GridCell.tsx        # Cell component
├── GridCellContent.tsx # Cell layout
├── CellContent.tsx     # Content wrapper
├── ProductContent.tsx  # Product content
└── GridBorderOverlay.tsx # Animated borders
```

## 📚 Documentation

- [Quick Start Guide](./docs/QUICK_START.md) - Get up and running in 5 minutes
- [Full Documentation](./docs/GRID_SYSTEM_DOCUMENTATION.md) - Complete API reference

## 🚀 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
