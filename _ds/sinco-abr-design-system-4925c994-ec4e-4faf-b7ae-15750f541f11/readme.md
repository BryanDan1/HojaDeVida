# SINCO ABR — Design System

A design system for **SINCO ABR** (*Administración de Bienes Raíces*), the real‑estate / rental‑property administration module of the SINCO enterprise software suite. ABR manages lease contracts (*contratos de arrendamiento*), tenants and owners (*arrendatarios / propietarios*), billing, portfolio/collections (*cartera*), treasury (*tesorería*) and a large catalogue of operational reports (*informes*) for property‑management companies in Colombia.

The product is a dense, data‑heavy internal ERP web app: Spanish UI, compact controls, lots of tables, filters and reports. This system distills its real implementation into reusable tokens, components, UI kits and guidance so any new screen or artifact looks native to ABR.

> **Everything here is derived from the real frontend codebase, not invented.**

## Sources

- **Codebase:** `clientapp/` — the SINCO ABR React frontend (`Aplicaciones/WebApi/ABR.API/clientapp`). Read‑only, mounted during authoring.
  - Theme entry: `src/App.tsx` (extends `SincoTheme` from `@sinco/react`)
  - Full alternate theme: `src/recursos/temas/TemaBase.ts` — palette, typography, breakpoints, elevations, component density overrides
  - Global CSS: `src/index.css` — reset, scrollbar, legacy focus, report‑table styling
  - Generic component library: `src/componentes/Generales/` — the in‑app design system (BotonIcono, Dialog, Tabla, Acordeon, Menu, Encabezado, Tarjetas, InputGeneral, FooterActions, Empty, …)
  - Report catalogue + copy: `src/constantes/CardsMenus.ts`
- **Stack (real app):** React 18 + TypeScript, **MUI v5.15** (+ `@mui/x-data-grid-pro`, `@mui/x-date-pickers`), Emotion + styled‑components, `@sinco/react` corporate theme, Roboto + Nunito (`@fontsource`), FontAwesome + MUI icons, Chart.js, react‑hook‑form, Zustand, Axios.

This system re‑implements the *look* in dependency‑free React + CSS variables (no MUI) so it can be dropped into any HTML artifact. It is a cosmetic recreation, not the production code.

---

## Content fundamentals

**Language is Spanish, always.** Every label, title, helper text, identifier and report name is in Spanish (Colombian). Code identifiers in the source are Spanish too (`Encabezado`, `BotonIcono`, `arrendatario`).

- **Voice:** institutional, functional, neutral. The app describes what a screen or report does in plain operational terms — e.g. *“El informe presenta las obligaciones pendientes de contratos de arrendamiento…”*. No marketing tone, no exclamation, no emoji.
- **Person:** mixed but consistent. Instructional copy addresses the user as **tú** (*“Podrás consultar…”, “En esta opción podrás agregar, eliminar, consultar y editar…”*). Report descriptions are impersonal third person (*“El informe presenta…”, “Se podrá visualizar…”*).
- **Casing:**
  - **Report / module / view titles → UPPERCASE** (`INMUEBLES ARRENDADOS`, `CARTERA POR EDADES`, `GESTIÓN DE CONTRATO`). This is the strongest copy convention in the product.
  - **Descriptions, helper text, field labels, buttons → sentence case** (`Selecciona y consulta informes…`, `Buscar tercero`, `Guardar`, `Consultar`).
  - Buttons never use `text-transform: uppercase` (MUI default is overridden to `none`).
- **Domain vocabulary (keep these exact terms):** contrato, arrendatario, coarrendatario, propietario, beneficiario, tercero, inmueble, canon, cartera, recaudo, comprobante de ingreso/egreso, cuota, prórroga, terminación, siniestro, regional.
- **Money:** Colombian pesos, formatted `$ 1.850.000` (thousands separator `.`), right‑aligned in tables with tabular numerals.
- **Required fields:** marked with a red asterisk `*`. Validation errors are short, specific, in red (`Correo no válido`).
- **No emoji. No icon‑emoji.** Iconography is line/solid SVG only (see Iconography).

---

## Visual foundations

**Overall feeling:** a clean, compact, trustworthy corporate ERP. White cards on a light‑grey app canvas, restrained blue accent, generous use of dense tables, subtle blue‑tinted shadows. Nothing flashy — clarity and density over decoration.

- **Color:** Primary is corporate blue `#1e62a1` (used for accents, active nav, focus, primary buttons, the animated card top‑line). Secondary is cyan `#0cbbe2` (used sparingly, e.g. drawer headers). The **SINCO brand mark is terracotta `#c76949`** — it appears on the logo tile, login brand panel and the top‑bar mark, and as the legacy focus color; it is a *brand* color, not a UI accent. Neutrals are a cool blue‑grey scale (`#FAFBFF → #101840`). Semantic colors: error `#d14343`, warning `#fb8500`, info `#2d9fc5`, success `#8fc93a`.
- **Typography:** **Nunito** for headings (h1–h6) — friendly, rounded, often light at large sizes (h1 is weight 300). **Roboto** for everything else (body, inputs, tables, buttons). The app runs *compact*: base body text is 13–15px depending on breakpoint, table/caption text drops to 11–13px. Headings are not huge — h6 (16px) is the most common view title.
- **Spacing:** 4px base unit (`theme.spacing(1) = 4px`). Common steps 4 / 8 / 12 / 16 / 20 / 24. Layout is dense; controls default to MUI `small`/`dense`.
- **Backgrounds:** flat. App canvas `#f5f5f5`, surfaces white. No gradients in‑app (the only gradient is a faint radial wash on the terracotta login panel). No textures, no photography, no full‑bleed imagery. Spot **line/flat illustrations** appear in empty states and report tiles.
- **Corner radii:** inputs & buttons `0.375rem` (6px); cards, accordions (outer ends) and report tables `10px`; chips/fab pill (999px). Scrollbar thumb `10px`.
- **Cards:** white, `10px` radius, soft **blue‑tinted shadow** (`rgba(24,39,75,…)`, elevation‑1). The signature interaction: on hover a **primary‑blue line grows along the top edge** (0 → 6px) and the card lifts to elevation‑4. Cursor pointer.
- **Shadows / elevation:** a full elevation‑1…24 set, all tinted with `rgba(24,39,75,…)` (a deep blue), never neutral grey/black. Headers use elevation‑1, menus elevation‑2/4, dialogs elevation‑24.
- **Borders:** inputs use `rgba(16,24,64,0.23)` (notched‑outline) at rest, `#ced4da` for legacy inputs, `#dc3545` on error. Dividers are `rgba(16,24,64,0.12)`. Accordions are bordered in primary blue. Report tables use `#969FAF` borders.
- **Focus:** blue ring `box-shadow: 0 0 0 3px <primary @ ~.62>` + primary border on the focused control. (A legacy terracotta focus ring `0 0 0 3px rgba(173,91,64,.5)` survives on Bootstrap‑style `.form-control` inputs.)
- **Hover states:** faint carbon overlay `rgba(16,24,64,0.04)` on list items / icon buttons / table rows; contained buttons darken to their `dark` shade; cards grow the top line.
- **Press / selected:** selected nav items take the `primary[50]` tint (`#e9f1f8`) with primary text & icon; list selection overlay `rgba(16,24,64,0.08)`.
- **Animation:** subtle and short. Card top‑line `300ms linear`; drawer width transitions; accordion chevron `rotate(180deg)`. No bounce, no parallax, no decorative motion. Respect reduced‑motion.
- **Transparency / blur:** modal scrim `rgba(16,24,64,.45)`. No glassmorphism / backdrop‑blur.
- **Layout rules:** permanent left nav drawer (250px expanded, ~57px collapsed rail) with a primary Fab toggle; content centered in a ~1020px column; sticky group headers (`#E4ECF4`) in long forms; a fixed bottom **FooterActions** bar (white, top border, right‑aligned actions, `z-index:100`) on edit screens.
- **Imagery vibe:** illustrations are flat, modern, lightly colored (real‑estate / finance motifs — houses, calculators, wallets); empty‑state illustrations are cooler blue/grey line art. All on transparent PNG.

---

## Iconography

- **Primary icon set:** **Material Symbols / MUI Icons** (`@mui/icons-material`) — outline‑leaning, used for all actions & navigation (`EditOutlined`, `CloseOutlined`, `ExpandMore`, `InfoOutlined`, `MenuOpen`, `History`, `CheckCircle`, `ArrowBack`, `FileCopyOutlined`). This is the dominant set.
- **FontAwesome** (solid & regular) is also available in‑app.
- **Custom SINCO icons:** a set of domain SVG React components in `src/recursos/iconos/` (`Fa*`), e.g. `FaFileContract`, `FaHandshake`, `FaPeopleRoof`, `FaHouseCircleCheck`, `FaMapLocationDot`, `FaCity`, `FaBuildingUser`, `FaHandHoldingDollar`. These are simple single‑path SVGs drawn in `primary.main` by default. They cover real‑estate / contract concepts the generic sets lack.
- **No emoji, no unicode glyph icons.** Status is shown with colored `Chip`s (+ optional dot), never emoji.
- **In this system:** because the MUI icon font isn't bundled here, the cards / UI kit draw a small set of equivalent inline SVGs (same outline style, ~1.6–1.8 stroke). When building production ABR screens, prefer the real `@mui/icons-material` components. The line‑art illustration PNGs are copied into `assets/illustrations/` and `assets/` (empty states); the SINCO logo is `assets/logo_ABR.jpg`.

---

## Index / manifest

**Root**
- `styles.css` — global entry point (consumers link this). `@import`s only.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css` (radii + elevation), `base.css` (reset, scrollbar, report table).
- `readme.md` — this guide.
- `SKILL.md` — Agent‑Skill wrapper.
- `assets/` — `logo_ABR.jpg`, empty‑state PNGs, `illustrations/` (report/spot art), `svg/` (Excel, empty‑machine, accordion chevron).

**Foundation cards** — `guidelines/*.card.html` (render in the Design System tab): primary/secondary, semantic states, grey scale, text+brand, headings, body, font families, spacing scale, radii+focus, elevation, logo, illustrations.

**Components** — dependency‑free React, namespace `window.SINCOABRDesignSystem_4925c9`:
- `components/forms/` — **Button** (BotonIcono), **IconButton**, **TextField**, **Select**, **Checkbox**, **Switch**
- `components/feedback/` — **Alert**, **Chip**, **Dialog**, **EmptyState**
- `components/data-display/` — **Card** (Tarjeta, hover top‑line), **Table** (dense, `#E4ECF4` header), **Accordion**
- `components/navigation/` — **PageHeader** (Encabezado), **Tabs**, **SideMenu** (permanent drawer)

**UI kit** — `ui_kits/abr_app/` — interactive recreation of the ABR app: login → app shell (top bar + side menu + header) → Informes tile grid → Reporte (filters + table) → Contrato detail (tabs + accordion). Entry: `ui_kits/abr_app/index.html`.

---

## Notes & caveats

- Fonts (Roboto, Nunito) load from **Google Fonts** — the same families the app ships via `@fontsource`. No local font binaries were available to copy, so there are no `@font-face` rules; swap to bundled `@fontsource` files for production parity.
- Icons here are **inline SVG stand‑ins** for `@mui/icons-material`; use the real MUI icon components in production ABR code.
- Components are **cosmetic recreations** in plain React + CSS variables — not the MUI/styled‑components originals. Behavior is simplified (e.g. Table has no real pagination/edit‑in‑row, date pickers and data‑grid are not reproduced).
