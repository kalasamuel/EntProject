# SkillUp Template Design System

This document records the design language of the supplied reference template. The
reference files are preserved unchanged in `reference-template/template/` and are
the authoritative source for future application work.

## Reference files

- `reference-template/template/index.html`
- `reference-template/template/styles.css`
- `reference-template/template/script.js`

## Design tokens

The template defines these CSS custom properties in `:root`:

| Token | Value | Use |
| --- | --- | --- |
| `--primary-purple` | `#4B24C5` | Brand colour, primary actions, logo and emphasis |
| `--accent-orange` | `#FF665E` | Secondary heading emphasis |
| `--bg-gradient` | `linear-gradient(145deg, #F8F5FF 0%, #FFFFFF 40%)` | Page background |
| `--text-dark` | `#1A1A1A` | Main text |
| `--text-gray` | `#4A4A4A` | Supporting text |
| `--border-color` | `#EAEAEA` | Light button border |
| `--yellow-card` | `#FFF5D1` | Yellow feature card |
| `--blue-card` | `#DDF3FF` | Blue feature card |

Additional fixed colours used by decorative elements include `#FFD147` (yellow
dot), `#40C4FF` (cyan dot), `#F17540` (orange shape), `#FF4D6D` (pink/red
shapes), `#CBB9FF` (purple card decoration), `#D4A017` (yellow icon), and
`#0091EA` (blue icon).

## Typography

- Body font: `Inter`, loaded from Google Fonts, with a sans-serif fallback.
- Logo and handwritten annotation font: `Caveat`, weight 700.
- Body text uses regular, medium, semibold, and bold weights.
- The hero heading is large, heavy, tightly spaced, and uses coloured inline
  words for emphasis.

## Page background and composition

- The body uses the soft lavender-to-white diagonal gradient.
- Horizontal overflow is explicitly hidden.
- Content is layered above decorative elements with a positive z-index.
- Desktop header and main content use `60px` horizontal padding.
- The layout uses generous whitespace, rounded shapes, and a wide horizontal
  composition rather than a dense dashboard grid.

## Header and navigation

- Header is a horizontal flex row with space between the logo, navigation, and
  actions.
- The `SkillUp` logo uses the Caveat handwritten style in primary purple.
- Navigation links are dark, medium-weight text with a purple hover state.
- The Courses link includes a small Font Awesome chevron.
- Header actions are ordered as search, Login, and Join Us.
- Search is a white, circular icon button with a soft shadow.
- Login is a transparent pill with a light border.
- Join Us is a filled purple pill with white text.

## Hero layout

- The hero is a two-column flex layout with a text-led left side and visual
  collage on the right.
- The left column contains the large headline, supporting subtitle, social-proof
  avatar row, full-width call-to-action, and an annotated video preview.
- The headline uses primary purple for “Tech”, accent orange for “Teaching”, and
  an inline purple SVG star.
- The CTA is a full-width purple pill with generous vertical padding.
- “How It Works!” is italic and paired with a hand-drawn SVG arrow.
- The video preview is a shallow rounded capsule with a cropped image, white
  border, soft shadow, and circular play button.

## Illustration and decorative elements

- Three floating circles sit outside the primary content: purple, yellow, and
  cyan.
- The right-side hero collage uses three narrow columns, image capsules, and
  abstract semicircle blocks.
- Image containers use large pill radii (`100px`) and `object-fit: cover`.
- The collage columns are vertically offset to create an editorial, staggered
  composition.
- SVG is used for the star, hand-drawn arrows, and the flower-like blue-card
  decoration.
- Font Awesome 6.4.0 supplies interface icons including search, chevron,
  play, question mark, and chart line.

## Cards and feature section

- The feature area is a two-part flex layout: explanatory copy on the left and
  two feature cards on the right.
- Feature cards have `24px` rounded corners, generous padding, and hidden
  overflow.
- The yellow card uses `#FFF5D1`; the blue card uses `#DDF3FF`.
- Each card includes a circular icon, a heading, and supporting copy.
- Decorative purple corner/flower shapes sit behind card content.
- Card content is layered above decorations with a positive z-index.

## Controls and interaction language

- Buttons are rounded pills or circles with clear filled/outlined contrast.
- Interactive elements use pointer cursors.
- Navigation links transition to primary purple on hover.
- The template JavaScript provides three lightweight behaviours:
  - The video play button logs the trailer action.
  - The CTA logs the free-trial action.
  - Carousel indicators switch the active indicator class.

## Extension rules

Future pages must retain:

1. The purple-led palette and lavender gradient background.
2. Inter body typography and Caveat branding/annotation typography.
3. Rounded pill controls, circular icon treatments, and soft shadows.
4. Generous whitespace and horizontal navigation conventions.
5. Abstract SVG/shape decorations and editorial collage styling where imagery is
   used.
6. The original reference directory as immutable design evidence.

