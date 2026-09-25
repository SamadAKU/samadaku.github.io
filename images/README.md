# Photos go here

Drop your photos into this folder using these **exact filenames**. The site
is already wired up to look for them — no code changes needed.

| File to add          | Used for                                  | Recommended shape        |
| --------------------- | ------------------------------------------ | ------------------------- |
| `hero-photo.jpg`      | Small circular photo at the top of the page | Square (e.g. 500×500px)   |
| `about-photo.jpg`     | Larger portrait in the About section        | Portrait, 4:5 ratio (e.g. 800×1000px) |

## Rules

- **Filenames must match exactly** — same spelling, all lowercase, `.jpg` extension.
  `Hero-Photo.JPG` or `heroPhoto.jpg` will **not** be picked up.
- If your photo is a `.png` or `.webp`, either re-export it as a `.jpg`, or
  update the matching `src="images/..."` in `index.html` (two spots — search
  for `heroPhotoImg` and `aboutPhotoImg`) to point at your file's real name.
- Until a file is added, the site automatically shows a clean "SK" monogram
  in its place — nothing looks broken either way, so there's no rush.

## Tips

- Keep each file under ~500KB so the page loads fast. Any online image
  compressor (e.g. squoosh.app) works well for this.
- `object-fit: cover` is applied to both, so slightly-off-aspect-ratio
  photos will still be cropped cleanly — they don't need to be pixel-perfect.
