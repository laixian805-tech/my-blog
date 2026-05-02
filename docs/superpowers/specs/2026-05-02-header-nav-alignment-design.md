# Header Nav Alignment Design

## Goal

Adjust the site header so the desktop navigation feels more structured, moves upward into the same visual band as the brand block, and aligns with the `tlx Wiki` title area.

## Scope

- Keep existing routes unchanged.
- Change desktop header layout from a two-row structure to a single main row.
- Update navigation labels and order on both desktop and mobile.
- Preserve responsive behavior by keeping the mobile hamburger menu pattern.

## Confirmed Decisions

### Layout

- Keep the brand block on the left with logo, `LEARNING PORTAL`, `tlx Wiki`, and the subtitle.
- Move desktop navigation into the same horizontal row as the brand block.
- Reduce vertical spacing in the header so navigation no longer appears detached on a second line.
- Align the desktop navigation group with the title area for a cleaner and more standard header rhythm.

### Navigation Labels And Order

Display labels should become:

1. `首页`
2. `导航`
3. `归档`
4. `安全`
5. `项目`
6. `课程`
7. `杂谈`

Route mapping stays unchanged:

- `/` -> `首页`
- `/nav` -> `导航`
- `/blog` -> `归档`
- `/security` -> `安全`
- `/projects` -> `项目`
- `/courses` -> `课程`
- `/talks` -> `杂谈`

### Visual Rules

- Keep the existing pill-style navigation treatment.
- Tighten header padding and horizontal spacing for a more orderly look.
- Keep desktop navigation right-aligned on wider screens.
- Fall back to the mobile menu on smaller screens instead of forcing cramped desktop navigation.

## Implementation Notes

- Update `data/headerNavLinks.ts` for label text and order.
- Update `components/Header.tsx` so desktop navigation sits in the main header row.
- Keep `components/MobileNav.tsx` behavior unchanged except for consuming the updated nav data.

## Validation

- Desktop header shows brand block and navigation in one row.
- Navigation is visually higher than before and no longer separated into a second row.
- Labels and order match: `首页 - 导航 - 归档 - 安全 - 项目 - 课程 - 杂谈`.
- Mobile menu shows the same label set and order.
- Existing routes still navigate to the same pages.
