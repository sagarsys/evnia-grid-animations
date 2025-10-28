# Evnia Grid System

A React component library for creating animated grid layouts with hover effects and flexible content.

## 🚀 Quick Start

```tsx
import { GridWrapper, GridCell, GridCellContent, CellContent, ProductContent } from '@/components';

<GridWrapper rows={2} columns={2}>
  <GridCell hoverImage="/image.jpg" hoverDirection="left">
    <GridCellContent>
      <CellContent>
        <ProductContent title="Product" description="Description" />
      </CellContent>
    </GridCellContent>
  </GridCell>
</GridWrapper>
```

## 📦 Components

### GridWrapper

Main container with type-safe children validation.

```tsx
<GridWrapper rows={2} columns={3} gap={0}>
  {/* Only GridCell children allowed */}
</GridWrapper>
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

## 📚 Documentation

- [Quick Start Guide](./QUICK_START.md) - Get up and running in 5 minutes
- [Full Documentation](./GRID_SYSTEM_DOCUMENTATION.md) - Complete API reference

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

## 🛠️ Installation

```bash
npm install
npm run dev
```

## 📁 File Structure

```text
src/components/
├── GridWrapper.tsx      # Main wrapper
├── Grid.tsx            # CSS Grid
├── GridCell.tsx        # Cell component
├── GridCellContent.tsx # Cell layout
├── CellContent.tsx     # Content wrapper
├── ProductContent.tsx  # Product content
└── GridBorderOverlay.tsx # Animated borders
```

That's it! Check the [Quick Start Guide](./QUICK_START.md) for detailed examples.
