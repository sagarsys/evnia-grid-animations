# Evnia Grid System - Quick Start

## 🚀 Get Started in 5 Minutes

The Evnia Grid System is a React component library for creating animated grid layouts. Here's everything you need to know to get started.

## 📦 Basic Usage

### 1. Simple Grid
```tsx
import { GridWrapper, GridCell, GridCellContent, CellContent, ProductContent } from '@/components';

<GridWrapper rows={2} columns={2}>
  <GridCell className="cell-1">
    <GridCellContent>
      <CellContent>
        <ProductContent title="Product 1" description="Description" />
      </CellContent>
    </GridCellContent>
  </GridCell>
  <GridCell className="cell-2">
    <GridCellContent>
      <CellContent>
        <ProductContent title="Product 2" description="Description" />
      </CellContent>
    </GridCellContent>
  </GridCell>
</GridWrapper>
```

### 2. Grid with Hover Effects
```tsx
<GridCell 
  className="cell-1"
  hoverImage="/images/product.jpg"
  hoverDirection="left"
>
  <GridCellContent>
    <CellContent>
      <ProductContent title="Product" description="Hover me!" />
    </CellContent>
  </GridCellContent>
</GridCell>
```

### 3. Complex Layout (Inner Grid)
```tsx
<GridCell colSpan={2} innerGrid={true}>
  <GridCellContent innerCell={true}>
    <CellContent empty={true} />
  </GridCellContent>
  <GridCellContent innerCell={true}>
    <CellContent>
      <ProductContent title="Product" description="Right side" />
    </CellContent>
  </GridCellContent>
</GridCell>
```

## 🧩 Component Cheat Sheet

| Component | Purpose | Key Props |
|-----------|---------|-----------|
| `GridWrapper` | Main container | `rows`, `columns`, `gap` |
| `GridCell` | Individual cell | `colSpan`, `rowSpan`, `hoverImage`, `hoverDirection`, `innerGrid` |
| `GridCellContent` | Cell layout | `innerCell` |
| `CellContent` | Content wrapper | `empty` |
| `ProductContent` | Product data | `title`, `description`, `showArrow` |

## 🎨 Hover Directions

```tsx
hoverDirection="left"    // ← slides from left
hoverDirection="right"   // → slides from right  
hoverDirection="top"     // ↑ slides from top
hoverDirection="bottom"  // ↓ slides from bottom
```

## 📐 Common Patterns

### Empty Cell
```tsx
<CellContent empty={true} />
```

### Product with Arrow
```tsx
<ProductContent 
  title="Product Name" 
  description="Description"
  showArrow={true} 
/>
```

### Product without Arrow
```tsx
<ProductContent 
  title="Product Name" 
  description="Description"
  showArrow={false} 
/>
```

## 🎯 Complete Example

```tsx
import { GridWrapper, GridCell, GridCellContent, CellContent, ProductContent } from '@/components';

export default function MyGrid() {
  return (
    <GridWrapper rows={2} columns={3}>
      {/* Single cell with hover */}
      <GridCell 
        className="cell-1"
        hoverImage="/images/product1.jpg"
        hoverDirection="left"
      >
        <GridCellContent>
          <CellContent>
            <ProductContent 
              title="Product 1" 
              description="Description here" 
            />
          </CellContent>
        </GridCellContent>
      </GridCell>

      {/* 2-column inner grid */}
      <GridCell colSpan={2} innerGrid={true}>
        <GridCellContent innerCell={true}>
          <CellContent empty={true} />
        </GridCellContent>
        <GridCellContent innerCell={true}>
          <CellContent>
            <ProductContent 
              title="Product 2" 
              description="Right side content" 
            />
          </CellContent>
        </GridCellContent>
      </GridCell>

      {/* 3-column span */}
      <GridCell colSpan={3}>
        <GridCellContent>
          <CellContent>
            <ProductContent 
              title="Full Width Product" 
              description="Spans all columns" 
            />
          </CellContent>
        </GridCellContent>
      </GridCell>
    </GridWrapper>
  );
}
```

## 🎨 Styling

Add your own CSS classes to customize appearance:

```tsx
<GridCell className="my-custom-cell">
  <GridCellContent>
    <CellContent>
      <ProductContent 
        title="Custom Styled" 
        description="Add your CSS classes"
        className="my-product-style"
      />
    </CellContent>
  </GridCellContent>
</GridCell>
```

## ⚡ That's It!

You now know everything needed to create animated grid layouts. The system handles:
- ✅ Automatic aspect ratios
- ✅ Animated borders
- ✅ Hover effects
- ✅ Cell spanning
- ✅ Type safety

For advanced usage, see the full [GRID_SYSTEM_DOCUMENTATION.md](./GRID_SYSTEM_DOCUMENTATION.md).
