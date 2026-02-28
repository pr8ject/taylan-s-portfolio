

# Redesign the Always Learning Page

The current timeline layout with large grey cards feels heavy and out of place compared to the rest of the portfolio's minimalist editorial style. Here's a cleaner approach:

## New Layout: Clean Grid Cards

Replace the timeline layout with a simpler, more elegant design:

- **Remove the vertical timeline** (line + dots) -- it adds visual clutter
- **Use a clean stacked card layout** with more breathing room
- For certificates **with images**: show a clean white card with the certificate image at a moderate size (max-w-xs), clickable to verify
- For certificates **without images**: show a minimal text-only card with just the details
- **Smaller image presentation**: constrain certificate images to ~320px max width so they look crisp, not stretched
- **White/clean background** for the image area instead of the grey `bg-muted/30` which makes it look dull
- Add a subtle **drop shadow** on the certificate image itself to make it feel like a real document sitting on the page
- Keep the card border minimal -- just a thin bottom border separator between entries rather than full bordered cards

## Specific Changes (1 file)

**`src/pages/AlwaysLearning.tsx`**:
- Remove the timeline vertical line and dot elements
- Remove `pl-12 md:pl-20` offset padding
- Redesign each certificate entry as a clean horizontal layout on desktop (image left, text right) and stacked on mobile
- Certificate image gets a subtle `shadow-lg` and `rounded` treatment to look like a real document
- Image max width capped at `max-w-xs` (320px) for crisp rendering
- Wrap images in clickable `<a>` tags linking to `verifyUrl`
- Add `gap-16` between entries for generous whitespace (matching portfolio's editorial feel)
- For placeholder certificates without images, show a clean text-only row with issuer/title/description

