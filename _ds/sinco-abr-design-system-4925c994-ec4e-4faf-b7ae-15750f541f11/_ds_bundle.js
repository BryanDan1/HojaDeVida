/* @ds-bundle: {"format":3,"namespace":"SINCOABRDesignSystem_4925c9","components":[{"name":"Accordion","sourcePath":"components/data-display/Accordion.jsx"},{"name":"Card","sourcePath":"components/data-display/Card.jsx"},{"name":"Table","sourcePath":"components/data-display/Table.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Chip","sourcePath":"components/feedback/Chip.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"PageHeader","sourcePath":"components/navigation/PageHeader.jsx"},{"name":"SideMenu","sourcePath":"components/navigation/SideMenu.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/data-display/Accordion.jsx":"d33a59f51cea","components/data-display/Card.jsx":"747d7a77ce2e","components/data-display/Table.jsx":"675ec47f3fb8","components/feedback/Alert.jsx":"3518c011407c","components/feedback/Chip.jsx":"f7474c15ca15","components/feedback/Dialog.jsx":"5d1a9bf0826f","components/feedback/EmptyState.jsx":"021bb124c4a9","components/forms/Button.jsx":"b7a5863f7273","components/forms/Checkbox.jsx":"6eb783a7e8ee","components/forms/IconButton.jsx":"55b7c8d79345","components/forms/Select.jsx":"fb762ec02950","components/forms/Switch.jsx":"0e3c8f9c8a16","components/forms/TextField.jsx":"98ca36ea879a","components/navigation/PageHeader.jsx":"f5c858e7e33e","components/navigation/SideMenu.jsx":"64180c419b88","components/navigation/Tabs.jsx":"9a8f1e87d6c2","ui_kits/abr_app/LoginScreen.jsx":"7c3ce0908bf3","ui_kits/abr_app/app.jsx":"5621c1f6646d","ui_kits/abr_app/data.jsx":"9cd03c475807","ui_kits/abr_app/screens.jsx":"2bb1afedfc76"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SINCOABRDesignSystem_4925c9 = window.SINCOABRDesignSystem_4925c9 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/data-display/Accordion.jsx
try { (() => {
const CSS = `
.abr-acc { font-family: var(--abr-font-body); }
.abr-acc__item { background: #fff; border: 1px solid var(--abr-primary-main); }
.abr-acc__item + .abr-acc__item { border-top: 0; }
.abr-acc__item:first-child { border-radius: var(--abr-radius-card) var(--abr-radius-card) 0 0; }
.abr-acc__item:last-child { border-radius: 0 0 var(--abr-radius-card) var(--abr-radius-card); }
.abr-acc__item:only-child { border-radius: var(--abr-radius-card); }
.abr-acc__sum {
  display: flex; align-items: center; gap: 8px; width: 100%; text-align: left;
  appearance: none; -webkit-appearance: none;
  background: #fff; border: none; cursor: pointer; padding: 10px 14px;
  font-size: var(--abr-subtitle1-size); font-weight: var(--abr-fw-medium); color: var(--abr-text-body);
}
.abr-acc__chev { margin-left: auto; color: var(--abr-primary-main); display: inline-flex; transition: transform .2s ease; }
.abr-acc__item--open .abr-acc__chev { transform: rotate(180deg); }
.abr-acc__details { padding: 16px; border-top: 1px solid rgba(0,0,0,.125); font-size: var(--abr-body1-size); color: var(--abr-text-body); line-height: 1.5; }
`;
function useStyleOnce(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const s = document.createElement('style');
    s.id = id;
    s.textContent = css;
    document.head.appendChild(s);
  }, []);
}
const Chevron = () => /*#__PURE__*/React.createElement("svg", {
  width: "22",
  height: "22",
  viewBox: "0 0 24 24",
  fill: "none"
}, /*#__PURE__*/React.createElement("path", {
  d: "M7 10l5 5 5-5",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));

/**
 * Accordion group with primary-bordered panels and rounded outer ends.
 * `items` are { title, content }. Multiple can be open at once.
 */
function Accordion({
  items = [],
  defaultOpen = [],
  style
}) {
  useStyleOnce('abr-acc-css', CSS);
  const [open, setOpen] = React.useState(() => new Set(defaultOpen));
  const toggle = i => setOpen(prev => {
    const next = new Set(prev);
    next.has(i) ? next.delete(i) : next.add(i);
    return next;
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "abr-acc",
    style: style
  }, items.map((it, i) => {
    const isOpen = open.has(i);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: `abr-acc__item${isOpen ? ' abr-acc__item--open' : ''}`
    }, /*#__PURE__*/React.createElement("button", {
      className: "abr-acc__sum",
      onClick: () => toggle(i),
      "aria-expanded": isOpen
    }, it.title, /*#__PURE__*/React.createElement("span", {
      className: "abr-acc__chev"
    }, /*#__PURE__*/React.createElement(Chevron, null))), isOpen && /*#__PURE__*/React.createElement("div", {
      className: "abr-acc__details"
    }, it.content));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Card.jsx
try { (() => {
const CSS = `
.abr-card {
  position: relative; background: var(--abr-bg-paper); border-radius: var(--abr-radius-card);
  box-shadow: var(--abr-shadow-card); font-family: var(--abr-font-body); overflow: hidden;
  display: flex; flex-direction: column;
}
.abr-card--hover { cursor: pointer; transition: box-shadow .2s ease; }
.abr-card__line { height: 0; background: var(--abr-primary-main); transition: height .25s linear; }
.abr-card--hover:hover .abr-card__line { height: 6px; }
.abr-card--hover:hover { box-shadow: var(--abr-elevation-4); }
.abr-card__body { padding: 16px; display: flex; flex-direction: column; gap: 8px; flex: 1; }
.abr-card__img { display: flex; align-items: center; justify-content: center; padding-top: 8px; }
.abr-card__img img { width: 70px; height: 70px; object-fit: contain; }
.abr-card__title { font-family: var(--abr-font-heading); font-weight: var(--abr-fw-semibold); font-size: var(--abr-h6-size); color: var(--abr-text-body); }
.abr-card__title--center { text-align: center; }
.abr-card__desc { font-size: var(--abr-body2-size); color: var(--abr-text-secondary); line-height: 1.45; }
`;
function useStyleOnce(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const s = document.createElement('style');
    s.id = id;
    s.textContent = css;
    document.head.appendChild(s);
  }, []);
}

/**
 * Surface card with the corporate blue-tinted shadow. When `hover` is set it
 * grows an animated primary line along the top edge — the ABR module/report
 * tile behavior (Tarjetas).
 */
function Card({
  image,
  title,
  description,
  children,
  hover = false,
  onClick,
  centerTitle = false,
  style
}) {
  useStyleOnce('abr-card-css', CSS);
  const hasPreset = image || title || description;
  return /*#__PURE__*/React.createElement("div", {
    className: `abr-card${hover ? ' abr-card--hover' : ''}`,
    onClick: onClick,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "abr-card__line"
  }), hasPreset ? /*#__PURE__*/React.createElement("div", {
    className: "abr-card__body"
  }, image && /*#__PURE__*/React.createElement("div", {
    className: "abr-card__img"
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: ""
  })), title && /*#__PURE__*/React.createElement("div", {
    className: `abr-card__title${centerTitle ? ' abr-card__title--center' : ''}`
  }, title), description && /*#__PURE__*/React.createElement("div", {
    className: "abr-card__desc"
  }, description), children) : /*#__PURE__*/React.createElement("div", {
    className: "abr-card__body"
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Card.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Table.jsx
try { (() => {
const CSS = `
.abr-table-wrap { background: var(--abr-bg-paper); border-radius: var(--abr-radius-input); box-shadow: var(--abr-shadow-card); overflow: hidden; font-family: var(--abr-font-body); }
.abr-table { width: 100%; border-collapse: collapse; }
.abr-table thead th {
  background: var(--abr-table-header); color: var(--abr-text-disabled);
  font-size: var(--abr-subtitle2-size); font-weight: var(--abr-fw-medium); text-align: left;
  padding: 6px 10px; white-space: nowrap;
}
.abr-table thead th.abr-th--num { text-align: right; }
.abr-table tbody td {
  font-size: var(--abr-body2-size); color: var(--abr-text-body);
  padding: 6px 10px; border-bottom: 1px solid rgba(224,224,224,1);
}
.abr-table tbody td.abr-td--num { text-align: right; font-variant-numeric: tabular-nums; }
.abr-table tbody tr:last-child td { border-bottom: 0; }
.abr-table tbody tr:hover td { background: var(--abr-action-hover); }
.abr-table__foot { display: flex; align-items: center; justify-content: flex-end; gap: 8px; padding: 8px 12px; font-size: var(--abr-body2-size); color: var(--abr-text-secondary); border-top: 1px solid var(--abr-divider); }
`;
function useStyleOnce(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const s = document.createElement('style');
    s.id = id;
    s.textContent = css;
    document.head.appendChild(s);
  }, []);
}

/**
 * Compact data table with the #E4ECF4 header, 3px-dense cells and hover rows.
 * `columns` are { key, label, align?, render? }; `rows` are plain objects.
 */
function Table({
  columns = [],
  rows = [],
  footer,
  style
}) {
  useStyleOnce('abr-table-css', CSS);
  return /*#__PURE__*/React.createElement("div", {
    className: "abr-table-wrap",
    style: style
  }, /*#__PURE__*/React.createElement("table", {
    className: "abr-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    className: c.align === 'right' ? 'abr-th--num' : '',
    style: {
      width: c.width
    }
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    className: c.align === 'right' ? 'abr-td--num' : ''
  }, c.render ? c.render(r[c.key], r) : r[c.key])))))), footer && /*#__PURE__*/React.createElement("div", {
    className: "abr-table__foot"
  }, footer));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Table.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
const CSS = `
.abr-alert {
  display: flex; gap: 10px; align-items: flex-start; font-family: var(--abr-font-body);
  padding: 8px 14px; border-radius: var(--abr-radius-input); border: 1px solid transparent;
  font-size: var(--abr-body2-size); line-height: 1.45;
}
.abr-alert__icon { flex: none; margin-top: 1px; display: inline-flex; }
.abr-alert__icon svg { width: 18px; height: 18px; }
.abr-alert__body { flex: 1; }
.abr-alert__title { font-weight: var(--abr-fw-semibold); font-size: var(--abr-subtitle2-size); margin-bottom: 1px; }
.abr-alert--error { background: color-mix(in srgb, var(--abr-error-main) 10%, #fff); border-color: color-mix(in srgb, var(--abr-error-main) 35%, transparent); color: var(--abr-error-dark); }
.abr-alert--warning { background: color-mix(in srgb, var(--abr-warning-main) 10%, #fff); border-color: color-mix(in srgb, var(--abr-warning-main) 35%, transparent); color: var(--abr-warning-dark); }
.abr-alert--info { background: color-mix(in srgb, var(--abr-info-main) 10%, #fff); border-color: color-mix(in srgb, var(--abr-info-main) 35%, transparent); color: var(--abr-info-dark); }
.abr-alert--success { background: color-mix(in srgb, var(--abr-success-main) 12%, #fff); border-color: color-mix(in srgb, var(--abr-success-main) 40%, transparent); color: var(--abr-success-dark); }
`;
function useStyleOnce(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const s = document.createElement('style');
    s.id = id;
    s.textContent = css;
    document.head.appendChild(s);
  }, []);
}
const ICONS = {
  error: /*#__PURE__*/React.createElement("path", {
    d: "M12 8v5m0 3h.01M12 3l9 16H3l9-16z",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }),
  warning: /*#__PURE__*/React.createElement("path", {
    d: "M12 9v4m0 3h.01M10.3 3.9 2.4 17.5A1.8 1.8 0 0 0 4 20.2h16a1.8 1.8 0 0 0 1.6-2.7L13.7 3.9a1.8 1.8 0 0 0-3.4 0z",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }),
  info: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9",
    stroke: "currentColor",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 11v5m0-8h.01",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  })),
  success: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9",
    stroke: "currentColor",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m8 12 3 3 5-6",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))
};

/** Inline status banner (MUI Alert) — error / warning / info / success. */
function Alert({
  severity = 'info',
  title,
  children,
  style
}) {
  useStyleOnce('abr-alert-css', CSS);
  return /*#__PURE__*/React.createElement("div", {
    className: `abr-alert abr-alert--${severity}`,
    style: style,
    role: "alert"
  }, /*#__PURE__*/React.createElement("span", {
    className: "abr-alert__icon"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none"
  }, ICONS[severity])), /*#__PURE__*/React.createElement("div", {
    className: "abr-alert__body"
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "abr-alert__title"
  }, title), /*#__PURE__*/React.createElement("div", null, children)));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Chip.jsx
try { (() => {
/* color → [main, strong(text), soft(bg)] CSS values */
const COLORS = {
  primary: ['var(--abr-primary-main)', 'var(--abr-primary-dark)', 'var(--abr-primary-50)'],
  success: ['var(--abr-success-main)', 'var(--abr-success-dark)', 'color-mix(in srgb, var(--abr-success-main) 16%, #fff)'],
  warning: ['var(--abr-warning-main)', 'var(--abr-warning-dark)', 'color-mix(in srgb, var(--abr-warning-main) 16%, #fff)'],
  error: ['var(--abr-error-main)', 'var(--abr-error-dark)', 'color-mix(in srgb, var(--abr-error-main) 13%, #fff)'],
  info: ['var(--abr-info-main)', 'var(--abr-info-dark)', 'color-mix(in srgb, var(--abr-info-main) 14%, #fff)'],
  neutral: ['var(--abr-grey-600)', 'var(--abr-grey-800)', 'var(--abr-grey-200)']
};
const BASE = `
.abr-chip {
  display: inline-flex; align-items: center; gap: 5px; font-family: var(--abr-font-body);
  font-size: 12px; font-weight: var(--abr-fw-medium); line-height: 1; white-space: nowrap;
  padding: 5px 10px; border-radius: 999px; border: 1px solid transparent;
}
.abr-chip__dot { width: 7px; height: 7px; border-radius: 50%; background-color: currentColor; flex: none; }
`;
const COLOR_CSS = Object.entries(COLORS).map(([name, [main, strong, soft]]) => `
.abr-chip--soft.abr-chip--${name} { background-color: ${soft}; color: ${strong}; }
.abr-chip--solid.abr-chip--${name} { background-color: ${main}; color: #fff; }
.abr-chip--outlined.abr-chip--${name} { background-color: transparent; color: ${strong}; border-color: color-mix(in srgb, ${main} 45%, transparent); }
`).join('');
const CSS = BASE + COLOR_CSS;
function useStyleOnce(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const s = document.createElement('style');
    s.id = id;
    s.textContent = css;
    document.head.appendChild(s);
  }, []);
}

/** Status pill / chip used in tables and headers to convey contract or document state. */
function Chip({
  label,
  children,
  color = 'neutral',
  variant = 'soft',
  dot = false,
  style
}) {
  useStyleOnce('abr-chip-css', CSS);
  const safeColor = COLORS[color] ? color : 'neutral';
  return /*#__PURE__*/React.createElement("span", {
    className: `abr-chip abr-chip--${variant} abr-chip--${safeColor}`,
    style: style
  }, dot && /*#__PURE__*/React.createElement("span", {
    className: "abr-chip__dot"
  }), label || children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Chip.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
const CSS = `
.abr-dialog__overlay { position: absolute; inset: 0; background: rgba(16,24,64,.45); display: flex; align-items: center; justify-content: center; z-index: 1300; }
.abr-dialog {
  background: var(--abr-bg-paper); border-radius: var(--abr-radius-input); box-shadow: var(--abr-elevation-24);
  width: min(520px, calc(100% - 48px)); max-height: calc(100% - 64px); display: flex; flex-direction: column;
  font-family: var(--abr-font-body); overflow: hidden;
}
.abr-dialog__head { display: flex; align-items: center; justify-content: space-between; padding: 12px 20px; }
.abr-dialog__title { font-family: var(--abr-font-heading); font-size: var(--abr-h6-size); font-weight: var(--abr-fw-semibold); color: var(--abr-text-body); }
.abr-dialog__x { border: none; background: transparent; cursor: pointer; color: var(--abr-action-active); display: inline-flex; padding: 4px; border-radius: 999px; appearance: none; -webkit-appearance: none; }
.abr-dialog__x:hover { background: var(--abr-action-hover); }
.abr-dialog__divider { height: 1px; background: var(--abr-divider); }
.abr-dialog__content { padding: 20px 24px; overflow: auto; font-size: var(--abr-body1-size); line-height: 1.5; color: var(--abr-text-body); }
.abr-dialog__content::-webkit-scrollbar { width: 4px; }
.abr-dialog__content::-webkit-scrollbar-thumb { background: var(--abr-primary-main); }
.abr-dialog__actions { display: flex; justify-content: flex-end; gap: 8px; padding: 12px 20px; }
`;
function useStyleOnce(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const s = document.createElement('style');
    s.id = id;
    s.textContent = css;
    document.head.appendChild(s);
  }, []);
}
const Close = () => /*#__PURE__*/React.createElement("svg", {
  width: "18",
  height: "18",
  viewBox: "0 0 24 24",
  fill: "none"
}, /*#__PURE__*/React.createElement("path", {
  d: "M6 6l12 12M18 6 6 18",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round"
}));

/**
 * Modal dialog (DialogsComp). Renders a centered card over a scrim with a
 * titled header, divider, scrollable content and a right-aligned action row.
 * For layout it positions absolutely within its nearest positioned ancestor.
 */
function Dialog({
  open = true,
  title,
  children,
  actions,
  onClose,
  style
}) {
  useStyleOnce('abr-dialog-css', CSS);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "abr-dialog__overlay",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "abr-dialog",
    style: style,
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "abr-dialog__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "abr-dialog__title"
  }, title), onClose && /*#__PURE__*/React.createElement("button", {
    className: "abr-dialog__x",
    onClick: onClose,
    "aria-label": "Cerrar"
  }, /*#__PURE__*/React.createElement(Close, null))), /*#__PURE__*/React.createElement("div", {
    className: "abr-dialog__divider"
  }), /*#__PURE__*/React.createElement("div", {
    className: "abr-dialog__content"
  }, children), actions && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "abr-dialog__divider"
  }), /*#__PURE__*/React.createElement("div", {
    className: "abr-dialog__actions"
  }, actions))));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
const CSS = `
.abr-empty { display: flex; flex-direction: column; align-items: center; gap: 14px; padding: 28px 16px; background: var(--abr-bg-paper); font-family: var(--abr-font-body); text-align: center; }
.abr-empty__img { width: 220px; max-width: 60%; height: auto; }
.abr-empty__text { max-width: 560px; color: var(--abr-text-secondary); font-size: var(--abr-body1-size); line-height: 1.5; }
.abr-empty__title { font-family: var(--abr-font-heading); font-weight: var(--abr-fw-semibold); font-size: var(--abr-h6-size); color: var(--abr-text-body); margin-bottom: -6px; }
`;
function useStyleOnce(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const s = document.createElement('style');
    s.id = id;
    s.textContent = css;
    document.head.appendChild(s);
  }, []);
}

/**
 * Empty / no-results state — centered line-art illustration plus a muted
 * message. Pass an image src (use the line-art illustrations in assets/).
 */
function EmptyState({
  image,
  title,
  text,
  children,
  style
}) {
  useStyleOnce('abr-empty-css', CSS);
  return /*#__PURE__*/React.createElement("div", {
    className: "abr-empty",
    style: style
  }, image && /*#__PURE__*/React.createElement("img", {
    className: "abr-empty__img",
    src: image,
    alt: ""
  }), title && /*#__PURE__*/React.createElement("div", {
    className: "abr-empty__title"
  }, title), text && /*#__PURE__*/React.createElement("div", {
    className: "abr-empty__text"
  }, text), children);
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* color → [main token, dark token] */
const COLORS = {
  primary: ['--abr-primary-main', '--abr-primary-dark'],
  secondary: ['--abr-secondary-main', '--abr-secondary-dark'],
  error: ['--abr-error-main', '--abr-error-dark'],
  success: ['--abr-success-main', '--abr-success-dark'],
  warning: ['--abr-warning-main', '--abr-warning-dark']
};
const BASE = `
.abr-btn {
  font-family: var(--abr-font-body);
  appearance: none; -webkit-appearance: none;
  font-size: var(--abr-subtitle1-size);
  font-weight: var(--abr-fw-medium);
  text-transform: none;
  line-height: 1;
  display: inline-flex; align-items: center; justify-content: center;
  gap: 0.3rem; white-space: nowrap;
  padding: 4px 10px; min-height: 30px;
  border-radius: var(--abr-radius-input);
  border: 1px solid transparent;
  background-color: transparent;
  cursor: pointer;
  transition: box-shadow .15s ease;
  user-select: none;
}
.abr-btn:focus-visible { outline: none; box-shadow: var(--abr-focus-shadow); }
.abr-btn[disabled] { cursor: default; pointer-events: none; }
.abr-btn--medium { min-height: 36px; padding: 6px 14px; }

.abr-btn--contained { color: #fff; }
.abr-btn--contained[disabled] { background-color: var(--abr-action-disabled-bg); color: var(--abr-action-disabled); border-color: transparent; }
.abr-btn--outlined { background-color: transparent; }
.abr-btn--outlined[disabled] { color: var(--abr-action-disabled); border-color: var(--abr-action-disabled-bg); }
.abr-btn--text { background-color: transparent; border-color: transparent; }
.abr-btn--text[disabled] { color: var(--abr-action-disabled); }
`;
const COLOR_CSS = Object.entries(COLORS).map(([name, [main, dark]]) => `
.abr-btn--contained.abr-btn--${name} { background-color: var(${main}); border-color: var(${main}); }
.abr-btn--contained.abr-btn--${name}:hover:not([disabled]) { background-color: var(${dark}); border-color: var(${dark}); }
.abr-btn--outlined.abr-btn--${name} { color: var(${main}); border-color: color-mix(in srgb, var(${main}) 50%, transparent); }
.abr-btn--outlined.abr-btn--${name}:hover:not([disabled]) { background-color: color-mix(in srgb, var(${main}) 6%, transparent); border-color: var(${main}); }
.abr-btn--text.abr-btn--${name} { color: var(${main}); }
.abr-btn--text.abr-btn--${name}:hover:not([disabled]) { background-color: color-mix(in srgb, var(${main}) 6%, transparent); }
`).join('');
const CSS = BASE + COLOR_CSS;
function useStyleOnce(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const s = document.createElement('style');
    s.id = id;
    s.textContent = css;
    document.head.appendChild(s);
  }, []);
}

/**
 * BotonIcono — the standard ABR action button. Outlined primary by default,
 * compact, no text-transform, icon + label with a small gap.
 */
function Button({
  children,
  icon,
  variant = 'outlined',
  color = 'primary',
  size = 'small',
  disabled = false,
  type = 'button',
  onClick,
  style,
  ...rest
}) {
  useStyleOnce('abr-button-css', CSS);
  const safeColor = COLORS[color] ? color : 'primary';
  const cls = `abr-btn abr-btn--${variant} abr-btn--${safeColor} abr-btn--${size}`;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: cls,
    disabled: disabled,
    onClick: onClick,
    style: style
  }, rest), icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.abr-check { display: inline-flex; align-items: center; gap: 8px; font-family: var(--abr-font-body); font-size: var(--abr-body1-size); color: var(--abr-text-body); cursor: pointer; user-select: none; }
.abr-check input { position: absolute; opacity: 0; width: 0; height: 0; }
.abr-check__box {
  width: 18px; height: 18px; border-radius: 3px; border: 2px solid var(--abr-action-active);
  display: inline-flex; align-items: center; justify-content: center; flex: none;
  transition: background-color .15s ease, border-color .15s ease; background: #fff;
}
.abr-check__box svg { opacity: 0; transition: opacity .1s ease; }
.abr-check input:checked + .abr-check__box { background: var(--abr-primary-main); border-color: var(--abr-primary-main); }
.abr-check input:checked + .abr-check__box svg { opacity: 1; }
.abr-check input:focus-visible + .abr-check__box { box-shadow: var(--abr-focus-shadow); }
.abr-check--disabled { color: var(--abr-text-disabled); cursor: default; }
.abr-check--disabled .abr-check__box { border-color: var(--abr-action-disabled); }
`;
function useStyleOnce(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const s = document.createElement('style');
    s.id = id;
    s.textContent = css;
    document.head.appendChild(s);
  }, []);
}

/** Compact checkbox with primary-filled checked state. */
function Checkbox({
  label,
  checked,
  defaultChecked,
  disabled = false,
  onChange,
  style,
  ...rest
}) {
  useStyleOnce('abr-check-css', CSS);
  return /*#__PURE__*/React.createElement("label", {
    className: `abr-check${disabled ? ' abr-check--disabled' : ''}`,
    style: style
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled,
    onChange: onChange
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "abr-check__box"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12l5 5L20 6",
    stroke: "#fff",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const COLORS = {
  default: 'var(--abr-action-active)',
  primary: 'var(--abr-primary-main)',
  secondary: 'var(--abr-secondary-main)',
  error: 'var(--abr-error-main)'
};
const BASE = `
.abr-iconbtn {
  display: inline-flex; align-items: center; justify-content: center;
  appearance: none; -webkit-appearance: none;
  border: none; background-color: transparent; cursor: pointer; border-radius: 999px;
  transition: box-shadow .15s ease; padding: 0;
}
.abr-iconbtn--small { width: 30px; height: 30px; }
.abr-iconbtn--medium { width: 38px; height: 38px; }
.abr-iconbtn:hover:not([disabled]) { background-color: var(--abr-action-hover); }
.abr-iconbtn:focus-visible { outline: none; box-shadow: var(--abr-focus-shadow); }
.abr-iconbtn[disabled] { color: var(--abr-action-disabled); pointer-events: none; }
`;
const COLOR_CSS = Object.entries(COLORS).map(([name, val]) => `
.abr-iconbtn--${name} { color: ${val}; }
`).join('');
const CSS = BASE + COLOR_CSS;
function useStyleOnce(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const s = document.createElement('style');
    s.id = id;
    s.textContent = css;
    document.head.appendChild(s);
  }, []);
}

/** Compact, circular icon-only button used for inline row actions (edit, history, close). */
function IconButton({
  children,
  color = 'default',
  size = 'small',
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  useStyleOnce('abr-iconbtn-css', CSS);
  const safeColor = COLORS[color] ? color : 'default';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: `abr-iconbtn abr-iconbtn--${size} abr-iconbtn--${safeColor}`,
    disabled: disabled,
    onClick: onClick,
    style: style
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.abr-select { display: inline-flex; flex-direction: column; font-family: var(--abr-font-body); }
.abr-select__label { font-size: 12px; color: var(--abr-text-secondary); margin-bottom: 4px; line-height: 17px; }
.abr-select__label .req { color: var(--abr-error-main); margin-left: 2px; }
.abr-select__wrap { position: relative; display: flex; align-items: center; }
.abr-select__control {
  appearance: none; -webkit-appearance: none;
  font-family: var(--abr-font-body); font-size: var(--abr-body1-size); color: var(--abr-text-body);
  width: 100%; padding: 7px 36px 7px 13px; min-height: 36px; background: #fff;
  border: 1px solid var(--abr-outline); border-radius: var(--abr-radius-input);
  transition: box-shadow .15s ease; outline: none; cursor: pointer;
}
.abr-select__control:hover { border-color: var(--abr-text-secondary); }
.abr-select__control:focus { border-color: var(--abr-primary-main); box-shadow: var(--abr-focus-shadow); }
.abr-select__control:disabled { background: var(--abr-grey-100); color: var(--abr-text-disabled); cursor: default; }
.abr-select__chev { position: absolute; right: 11px; pointer-events: none; color: var(--abr-action-active); display: inline-flex; }
`;
function useStyleOnce(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const s = document.createElement('style');
    s.id = id;
    s.textContent = css;
    document.head.appendChild(s);
  }, []);
}
const Chevron = () => /*#__PURE__*/React.createElement("svg", {
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none"
}, /*#__PURE__*/React.createElement("path", {
  d: "M7 10l5 5 5-5",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));

/** Outlined compact select matching the TextField styling. */
function Select({
  label,
  value,
  options = [],
  required = false,
  disabled = false,
  onChange,
  fullWidth = false,
  placeholder,
  style,
  ...rest
}) {
  useStyleOnce('abr-select-css', CSS);
  return /*#__PURE__*/React.createElement("label", {
    className: "abr-select",
    style: {
      width: fullWidth ? '100%' : undefined,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "abr-select__label"
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "req"
  }, "*")), /*#__PURE__*/React.createElement("span", {
    className: "abr-select__wrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    className: "abr-select__control",
    value: value,
    disabled: disabled,
    onChange: onChange
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map((o, i) => {
    const val = typeof o === 'string' ? o : o.value;
    const lbl = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: i,
      value: val
    }, lbl);
  })), /*#__PURE__*/React.createElement("span", {
    className: "abr-select__chev"
  }, /*#__PURE__*/React.createElement(Chevron, null))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.abr-switch { display: inline-flex; align-items: center; gap: 10px; font-family: var(--abr-font-body); font-size: var(--abr-body1-size); color: var(--abr-text-body); cursor: pointer; user-select: none; }
.abr-switch input { position: absolute; opacity: 0; width: 0; height: 0; }
.abr-switch__track {
  width: 34px; height: 14px; border-radius: 999px; background: var(--abr-grey-500);
  position: relative; transition: background-color .15s ease; flex: none;
}
.abr-switch__thumb {
  position: absolute; top: -3px; left: -1px; width: 20px; height: 20px; border-radius: 50%;
  background: #fff; box-shadow: var(--abr-elevation-2); transition: transform .15s ease;
}
.abr-switch input:checked + .abr-switch__track { background: color-mix(in srgb, var(--abr-primary-main) 50%, transparent); }
.abr-switch input:checked + .abr-switch__track .abr-switch__thumb { transform: translateX(16px); background: var(--abr-primary-main); }
.abr-switch input:focus-visible + .abr-switch__track .abr-switch__thumb { box-shadow: var(--abr-focus-shadow); }
.abr-switch--disabled { color: var(--abr-text-disabled); cursor: default; }
`;
function useStyleOnce(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const s = document.createElement('style');
    s.id = id;
    s.textContent = css;
    document.head.appendChild(s);
  }, []);
}

/** Compact toggle switch with primary-on state. */
function Switch({
  label,
  checked,
  defaultChecked,
  disabled = false,
  onChange,
  style,
  ...rest
}) {
  useStyleOnce('abr-switch-css', CSS);
  return /*#__PURE__*/React.createElement("label", {
    className: `abr-switch${disabled ? ' abr-switch--disabled' : ''}`,
    style: style
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled,
    onChange: onChange
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "abr-switch__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "abr-switch__thumb"
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.abr-field { display: inline-flex; flex-direction: column; gap: 0; font-family: var(--abr-font-body); position: relative; }
.abr-field__wrap { position: relative; display: flex; align-items: center; }
.abr-field__input {
  font-family: var(--abr-font-body); font-size: var(--abr-body1-size); color: var(--abr-text-body);
  width: 100%; padding: 7px 13px; min-height: 36px; background: #fff;
  border: 1px solid var(--abr-outline); border-radius: var(--abr-radius-input);
  transition: box-shadow .15s ease; outline: none;
}
.abr-field__input::placeholder { color: var(--abr-text-disabled); }
.abr-field__input:hover { border-color: var(--abr-text-secondary); }
.abr-field__input:focus { border-color: var(--abr-primary-main); box-shadow: var(--abr-focus-shadow); }
.abr-field--error .abr-field__input { border-color: var(--abr-input-border-error); }
.abr-field--error .abr-field__input:focus { box-shadow: 0 0 0 3px color-mix(in srgb, var(--abr-input-border-error) 30%, transparent); }
.abr-field__input:disabled { background: var(--abr-grey-100); color: var(--abr-text-disabled); }
.abr-field__label {
  font-size: 12px; font-weight: var(--abr-fw-regular); color: var(--abr-text-secondary);
  margin-bottom: 4px; line-height: 17px;
}
.abr-field__label .req { color: var(--abr-error-main); margin-left: 2px; }
.abr-field__icon { position: absolute; right: 11px; display: inline-flex; color: var(--abr-action-active); pointer-events: none; }
.abr-field__icon svg, .abr-field__icon img { width: 18px; height: 18px; }
.abr-field--has-icon .abr-field__input { padding-right: 36px; }
.abr-field__help { font-size: var(--abr-caption-size); color: var(--abr-text-secondary); margin-top: 3px; letter-spacing: .4px; }
.abr-field--error .abr-field__help { color: var(--abr-error-main); }
`;
function useStyleOnce(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const s = document.createElement('style');
    s.id = id;
    s.textContent = css;
    document.head.appendChild(s);
  }, []);
}

/** Outlined, compact text input with floating-style label, optional trailing icon and helper/error text. */
function TextField({
  label,
  value,
  placeholder,
  type = 'text',
  icon,
  error = false,
  helperText,
  required = false,
  disabled = false,
  onChange,
  fullWidth = false,
  style,
  ...rest
}) {
  useStyleOnce('abr-field-css', CSS);
  const cls = `abr-field${error ? ' abr-field--error' : ''}${icon ? ' abr-field--has-icon' : ''}`;
  return /*#__PURE__*/React.createElement("label", {
    className: cls,
    style: {
      width: fullWidth ? '100%' : undefined,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "abr-field__label"
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "req"
  }, "*")), /*#__PURE__*/React.createElement("span", {
    className: "abr-field__wrap"
  }, /*#__PURE__*/React.createElement("input", _extends({
    className: "abr-field__input",
    type: type,
    value: value,
    placeholder: placeholder,
    disabled: disabled,
    onChange: onChange
  }, rest)), icon && /*#__PURE__*/React.createElement("span", {
    className: "abr-field__icon"
  }, icon)), helperText && /*#__PURE__*/React.createElement("span", {
    className: "abr-field__help"
  }, helperText));
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/navigation/PageHeader.jsx
try { (() => {
const CSS = `
.abr-header {
  display: flex; align-items: center; justify-content: space-between; gap: 16px;
  background: var(--abr-bg-paper); box-shadow: var(--abr-elevation-1);
  padding: 8px 16px; font-family: var(--abr-font-body); min-height: 52px;
}
.abr-header__left { display: flex; align-items: center; gap: 12px; }
.abr-header__back { border: none; background: transparent; cursor: pointer; color: var(--abr-primary-main); display: inline-flex; padding: 6px; border-radius: 999px; appearance: none; -webkit-appearance: none; }
.abr-header__back:hover { background: var(--abr-action-hover); }
.abr-header__titles { display: flex; flex-direction: column; }
.abr-header__title { font-family: var(--abr-font-heading); font-size: var(--abr-h6-size); font-weight: var(--abr-fw-semibold); color: var(--abr-text-body); line-height: 1.2; }
.abr-header__desc { font-size: var(--abr-body2-size); color: var(--abr-text-secondary); }
.abr-header__actions { display: flex; align-items: center; gap: 12px; }
.abr-header__info { color: var(--abr-action-active); display: inline-flex; padding: 6px; cursor: pointer; }
`;
function useStyleOnce(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const s = document.createElement('style');
    s.id = id;
    s.textContent = css;
    document.head.appendChild(s);
  }, []);
}
const Back = () => /*#__PURE__*/React.createElement("svg", {
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none"
}, /*#__PURE__*/React.createElement("path", {
  d: "M15 5l-7 7 7 7",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
const Info = () => /*#__PURE__*/React.createElement("svg", {
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none"
}, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "9",
  stroke: "currentColor",
  strokeWidth: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 11v5m0-8h.01",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round"
}));

/**
 * View header (Encabezado): optional back button, title (Nunito h6) + muted
 * description, right-aligned action buttons and an info affordance.
 */
function PageHeader({
  title,
  description,
  onBack,
  actions,
  showInfo = true,
  style
}) {
  useStyleOnce('abr-header-css', CSS);
  return /*#__PURE__*/React.createElement("div", {
    className: "abr-header",
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "abr-header__left"
  }, onBack && /*#__PURE__*/React.createElement("button", {
    className: "abr-header__back",
    onClick: onBack,
    "aria-label": "Regresar"
  }, /*#__PURE__*/React.createElement(Back, null)), /*#__PURE__*/React.createElement("div", {
    className: "abr-header__titles"
  }, /*#__PURE__*/React.createElement("span", {
    className: "abr-header__title"
  }, title), description && /*#__PURE__*/React.createElement("span", {
    className: "abr-header__desc"
  }, description))), /*#__PURE__*/React.createElement("div", {
    className: "abr-header__actions"
  }, actions, showInfo && /*#__PURE__*/React.createElement("span", {
    className: "abr-header__info"
  }, /*#__PURE__*/React.createElement(Info, null))));
}
Object.assign(__ds_scope, { PageHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/PageHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SideMenu.jsx
try { (() => {
const CSS = `
.abr-menu { display: flex; flex-direction: column; background: var(--abr-bg-default); height: 100%; font-family: var(--abr-font-body); transition: width .3s ease; flex: none; }
.abr-menu__fab {
  width: 56px; height: 40px; border: none; cursor: pointer; color: #fff; background: var(--abr-primary-main);
  appearance: none; -webkit-appearance: none;
  border-radius: 0 999px 999px 0; display: inline-flex; align-items: center; justify-content: center;
  box-shadow: var(--abr-elevation-2); align-self: flex-start; margin-bottom: 8px;
}
.abr-menu__list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; }
.abr-menu__item {
  display: flex; align-items: center; gap: 16px; padding: 8px 14px; cursor: pointer; border: none; background: transparent;
  appearance: none; -webkit-appearance: none;
  font-family: var(--abr-font-body); font-size: 14px; color: var(--abr-text-body); width: 100%; text-align: left;
}
.abr-menu__item:hover { background: var(--abr-action-hover); }
.abr-menu__item--active { background: var(--abr-primary-50); color: var(--abr-primary-main); }
.abr-menu__icon { display: inline-flex; flex: none; width: 24px; justify-content: center; color: inherit; }
.abr-menu__item--active .abr-menu__icon { color: var(--abr-primary-main); }
.abr-menu__label { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.abr-menu--collapsed .abr-menu__label { display: none; }
.abr-menu--collapsed .abr-menu__item { justify-content: center; }
`;
function useStyleOnce(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const s = document.createElement('style');
    s.id = id;
    s.textContent = css;
    document.head.appendChild(s);
  }, []);
}
const Burger = () => /*#__PURE__*/React.createElement("svg", {
  width: "22",
  height: "22",
  viewBox: "0 0 24 24",
  fill: "none"
}, /*#__PURE__*/React.createElement("path", {
  d: "M4 6h16M4 12h11M4 18h16M19 9l3 3-3 3",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));

/**
 * Permanent left navigation drawer (Menu). Expands to 250px / collapses to a
 * rail via a primary Fab toggle. `items` are { label, icon, key }. Active item
 * gets the primary[50] tint with primary text/icon.
 */
function SideMenu({
  items = [],
  activeKey,
  onSelect,
  defaultOpen = true,
  style
}) {
  useStyleOnce('abr-menu-css', CSS);
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("nav", {
    className: `abr-menu${open ? '' : ' abr-menu--collapsed'}`,
    style: {
      width: open ? 250 : 57,
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "abr-menu__fab",
    onClick: () => setOpen(o => !o),
    "aria-label": "Men\xFA"
  }, /*#__PURE__*/React.createElement(Burger, null)), /*#__PURE__*/React.createElement("ul", {
    className: "abr-menu__list"
  }, items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it.key
  }, /*#__PURE__*/React.createElement("button", {
    className: `abr-menu__item${activeKey === it.key ? ' abr-menu__item--active' : ''}`,
    onClick: () => onSelect && onSelect(it.key),
    title: it.label
  }, /*#__PURE__*/React.createElement("span", {
    className: "abr-menu__icon"
  }, it.icon), /*#__PURE__*/React.createElement("span", {
    className: "abr-menu__label"
  }, it.label))))));
}
Object.assign(__ds_scope, { SideMenu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SideMenu.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
const CSS = `
.abr-tabs { font-family: var(--abr-font-body); }
.abr-tabs__bar { display: flex; gap: 4px; border-bottom: 1px solid var(--abr-divider); }
.abr-tabs__tab {
  border: none; background: transparent; cursor: pointer; padding: 9px 16px;
  appearance: none; -webkit-appearance: none;
  font-family: var(--abr-font-body); font-size: var(--abr-subtitle1-size); font-weight: var(--abr-fw-medium);
  color: var(--abr-text-secondary); position: relative; text-transform: none;
  border-radius: 6px 6px 0 0;
}
.abr-tabs__tab:hover { color: var(--abr-text-body); background: var(--abr-action-hover); }
.abr-tabs__tab--active { color: var(--abr-primary-main); }
.abr-tabs__tab--active::after { content: ''; position: absolute; left: 8px; right: 8px; bottom: -1px; height: 2px; background: var(--abr-primary-main); border-radius: 2px 2px 0 0; }
.abr-tabs__panel { padding: 16px 2px; font-size: var(--abr-body1-size); color: var(--abr-text-body); }
`;
function useStyleOnce(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const s = document.createElement('style');
    s.id = id;
    s.textContent = css;
    document.head.appendChild(s);
  }, []);
}

/**
 * Tab panel. `tabs` are { label, content }. Controlled via `value`/`onChange`
 * or self-managed when uncontrolled.
 */
function Tabs({
  tabs = [],
  value,
  defaultValue = 0,
  onChange,
  style
}) {
  useStyleOnce('abr-tabs-css', CSS);
  const [internal, setInternal] = React.useState(defaultValue);
  const active = value !== undefined ? value : internal;
  const select = i => {
    if (value === undefined) setInternal(i);
    onChange && onChange(i);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "abr-tabs",
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "abr-tabs__bar",
    role: "tablist"
  }, tabs.map((t, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    role: "tab",
    "aria-selected": active === i,
    className: `abr-tabs__tab${active === i ? ' abr-tabs__tab--active' : ''}`,
    onClick: () => select(i)
  }, t.label))), /*#__PURE__*/React.createElement("div", {
    className: "abr-tabs__panel",
    role: "tabpanel"
  }, tabs[active] && tabs[active].content));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/abr_app/LoginScreen.jsx
try { (() => {
/* SINCO ABR — Login screen. Terracotta brand panel + compact login form. */
const {
  Button,
  TextField,
  Checkbox
} = window.SINCOABRDesignSystem_4925c9;
function LoginScreen({
  onLogin
}) {
  const [user, setUser] = React.useState('jrestrepo');
  const [pass, setPass] = React.useState('••••••••');
  return /*#__PURE__*/React.createElement("div", {
    className: "abrk-login"
  }, /*#__PURE__*/React.createElement("div", {
    className: "abrk-login__brand"
  }, /*#__PURE__*/React.createElement("div", {
    className: "abrk-login__logo"
  }, /*#__PURE__*/React.createElement("span", {
    className: "abrk-login__sinco"
  }, "SINCO"), /*#__PURE__*/React.createElement("span", {
    className: "abrk-login__rule"
  }), /*#__PURE__*/React.createElement("span", {
    className: "abrk-login__abr"
  }, "ABR")), /*#__PURE__*/React.createElement("p", {
    className: "abrk-login__tagline"
  }, "Administraci\xF3n de Bienes Ra\xEDces")), /*#__PURE__*/React.createElement("div", {
    className: "abrk-login__panel"
  }, /*#__PURE__*/React.createElement("form", {
    className: "abrk-login__form",
    onSubmit: e => {
      e.preventDefault();
      onLogin();
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "abr-h4",
    style: {
      marginBottom: 4
    }
  }, "Iniciar sesi\xF3n"), /*#__PURE__*/React.createElement("p", {
    className: "abr-body2",
    style: {
      color: 'var(--abr-text-secondary)',
      marginBottom: 18
    }
  }, "Ingresa con tu usuario corporativo"), /*#__PURE__*/React.createElement(TextField, {
    label: "Usuario",
    value: user,
    onChange: e => setUser(e.target.value),
    fullWidth: true,
    required: true,
    icon: /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "8",
      r: "4",
      stroke: "currentColor",
      strokeWidth: "1.8"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M4 21c0-4 3.6-7 8-7s8 3 8 7",
      stroke: "currentColor",
      strokeWidth: "1.8",
      strokeLinecap: "round"
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 14
    }
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "Contrase\xF1a",
    type: "password",
    value: pass,
    onChange: e => setPass(e.target.value),
    fullWidth: true,
    required: true,
    icon: /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "4",
      y: "10",
      width: "16",
      height: "10",
      rx: "2",
      stroke: "currentColor",
      strokeWidth: "1.8"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8 10V7a4 4 0 0 1 8 0v3",
      stroke: "currentColor",
      strokeWidth: "1.8"
    }))
  }), /*#__PURE__*/React.createElement("div", {
    className: "abrk-login__row"
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Recordarme",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement("a", {
    className: "abrk-login__link",
    href: "#",
    onClick: e => e.preventDefault()
  }, "\xBFOlvidaste tu contrase\xF1a?")), /*#__PURE__*/React.createElement(Button, {
    variant: "contained",
    type: "submit",
    style: {
      width: '100%',
      height: 40,
      marginTop: 4
    }
  }, "Ingresar"), /*#__PURE__*/React.createElement("p", {
    className: "abrk-login__ver"
  }, "Versi\xF3n 3.18.2 \xB7 \xA9 SINCO Software"))));
}
window.LoginScreen = LoginScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/abr_app/LoginScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/abr_app/app.jsx
try { (() => {
/* SINCO ABR — app shell: top bar + side menu + routed content. */
const {
  SideMenu,
  PageHeader,
  Tabs,
  Button,
  EmptyState
} = window.SINCOABRDesignSystem_4925c9;
function TopBar({
  onLogout
}) {
  const Bell = window.ABRIcons.bell;
  return /*#__PURE__*/React.createElement("header", {
    className: "abrk-topbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "abrk-topbar__brand"
  }, /*#__PURE__*/React.createElement("span", {
    className: "abrk-topbar__mark"
  }, "ABR"), /*#__PURE__*/React.createElement("span", {
    className: "abrk-topbar__product"
  }, "SINCO \xB7 Administraci\xF3n de Bienes Ra\xEDces")), /*#__PURE__*/React.createElement("div", {
    className: "abrk-topbar__right"
  }, /*#__PURE__*/React.createElement("button", {
    className: "abrk-topbar__icon",
    "aria-label": "Notificaciones"
  }, /*#__PURE__*/React.createElement(Bell, {
    size: 20
  }), /*#__PURE__*/React.createElement("span", {
    className: "abrk-topbar__dot"
  })), /*#__PURE__*/React.createElement("div", {
    className: "abrk-topbar__user",
    onClick: onLogout,
    title: "Cerrar sesi\xF3n"
  }, /*#__PURE__*/React.createElement("span", {
    className: "abrk-topbar__avatar"
  }, "JR"), /*#__PURE__*/React.createElement("span", {
    className: "abrk-topbar__name"
  }, "Juan Restrepo"))));
}
function AppShell({
  onLogout
}) {
  const I = window.ABRIcons;
  const [section, setSection] = React.useState('informes');
  const [report, setReport] = React.useState(null);
  const [tab, setTab] = React.useState(0);
  const navItems = [{
    key: 'contratos',
    label: 'Gestión de contrato',
    icon: /*#__PURE__*/React.createElement(I.contrato, null)
  }, {
    key: 'cartera',
    label: 'Cartera',
    icon: /*#__PURE__*/React.createElement(I.cartera, null)
  }, {
    key: 'informes',
    label: 'Informes',
    icon: /*#__PURE__*/React.createElement(I.informes, null)
  }, {
    key: 'tesoreria',
    label: 'Tesorería',
    icon: /*#__PURE__*/React.createElement(I.tesoreria, null)
  }, {
    key: 'maestros',
    label: 'Maestros',
    icon: /*#__PURE__*/React.createElement(I.maestros, null)
  }];
  const goSection = k => {
    setSection(k);
    setReport(null);
    setTab(0);
  };
  let header, body;
  if (section === 'informes' && !report) {
    header = /*#__PURE__*/React.createElement(PageHeader, {
      title: "INFORMES",
      description: "Selecciona y consulta informes de gesti\xF3n del contrato"
    });
    body = /*#__PURE__*/React.createElement(window.InformesScreen, {
      onOpen: setReport
    });
  } else if (section === 'informes' && report) {
    header = /*#__PURE__*/React.createElement(PageHeader, {
      title: report.titulo,
      description: report.desc,
      onBack: () => setReport(null),
      actions: /*#__PURE__*/React.createElement(Button, {
        icon: /*#__PURE__*/React.createElement(I.excel, {
          size: 16
        })
      }, "Exportar")
    });
    body = /*#__PURE__*/React.createElement(window.ReporteScreen, null);
  } else if (section === 'contratos') {
    header = /*#__PURE__*/React.createElement(PageHeader, {
      title: "GESTI\xD3N DE CONTRATO",
      description: "Contrato ABR-001042 \xB7 Mar\xEDa Restrepo V\xE9lez",
      actions: /*#__PURE__*/React.createElement(Button, {
        variant: "contained",
        icon: /*#__PURE__*/React.createElement(I.plus, {
          size: 16
        })
      }, "Nuevo")
    });
    body = /*#__PURE__*/React.createElement(Tabs, {
      value: tab,
      onChange: setTab,
      tabs: [{
        label: 'General',
        content: /*#__PURE__*/React.createElement(window.ContratoScreen, null)
      }, {
        label: 'Documentos',
        content: /*#__PURE__*/React.createElement(EmptyState, {
          image: "../../assets/illustrations/buscar_tercero.png",
          text: "A\xFAn no hay documentos cargados para este contrato."
        })
      }, {
        label: 'Auditoría',
        content: /*#__PURE__*/React.createElement(EmptyState, {
          image: "../../assets/estado_sin_registros.png",
          text: "No se registran cambios en el periodo seleccionado."
        })
      }]
    });
  } else {
    const titles = {
      cartera: 'CARTERA',
      tesoreria: 'TESORERÍA',
      maestros: 'MAESTROS'
    };
    header = /*#__PURE__*/React.createElement(PageHeader, {
      title: titles[section],
      description: "M\xF3dulo en construcci\xF3n para esta demostraci\xF3n"
    });
    body = /*#__PURE__*/React.createElement(EmptyState, {
      image: "../../assets/empty_state_2.png",
      title: "Secci\xF3n de muestra",
      text: "Esta vista forma parte del UI kit y queda intencionalmente vac\xEDa."
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "abrk-app"
  }, /*#__PURE__*/React.createElement(TopBar, {
    onLogout: onLogout
  }), /*#__PURE__*/React.createElement("div", {
    className: "abrk-app__main"
  }, /*#__PURE__*/React.createElement(SideMenu, {
    items: navItems,
    activeKey: section,
    onSelect: goSection
  }), /*#__PURE__*/React.createElement("div", {
    className: "abrk-app__content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "abrk-app__header"
  }, header), /*#__PURE__*/React.createElement("div", {
    className: "abrk-app__scroll"
  }, /*#__PURE__*/React.createElement("div", {
    className: "abrk-app__inner"
  }, body)))));
}
function App() {
  const [authed, setAuthed] = React.useState(false);
  return authed ? /*#__PURE__*/React.createElement(AppShell, {
    onLogout: () => setAuthed(false)
  }) : /*#__PURE__*/React.createElement(window.LoginScreen, {
    onLogin: () => setAuthed(true)
  });
}
window.ABRApp = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/abr_app/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/abr_app/data.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* SINCO ABR — shared mock data + inline icons for the UI kit. */
const Icon = (paths, vb = '0 0 24 24') => ({
  size = 20,
  ...rest
}) => /*#__PURE__*/React.createElement("svg", _extends({
  width: size,
  height: size,
  viewBox: vb,
  fill: "none"
}, rest), paths);
window.ABRIcons = {
  contrato: Icon(/*#__PURE__*/React.createElement("path", {
    d: "M6 2h8l4 4v16H6z M14 2v4h4 M8 12h7M8 16h5",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinejoin: "round",
    strokeLinecap: "round"
  })),
  cartera: Icon(/*#__PURE__*/React.createElement("path", {
    d: "M3 7h16v12H3z M3 7l3-4h10l3 4 M16 13h.01",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinejoin: "round"
  })),
  informes: Icon(/*#__PURE__*/React.createElement("path", {
    d: "M4 20V10M10 20V4M16 20v-7M20 20H3",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  })),
  tesoreria: Icon(/*#__PURE__*/React.createElement("path", {
    d: "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })),
  maestros: Icon(/*#__PURE__*/React.createElement("path", {
    d: "M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z M12 12l8-4.5M12 12v9M12 12L4 7.5",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinejoin: "round"
  })),
  excel: Icon(/*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M5 3h9l5 5v13H5z",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 12l4 5m0-5l-4 5",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round"
  }))),
  filter: Icon(/*#__PURE__*/React.createElement("path", {
    d: "M3 5h18l-7 8v6l-4-2v-4L3 5z",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinejoin: "round"
  })),
  search: Icon(/*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7",
    stroke: "currentColor",
    strokeWidth: "1.8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 20l-3-3",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }))),
  edit: Icon(/*#__PURE__*/React.createElement("path", {
    d: "M4 20h4l10-10-4-4L4 16v4z",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinejoin: "round"
  })),
  history: Icon(/*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M3 12a9 9 0 1 0 3-6.7L3 8",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 4v4h4M12 8v4l3 2",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))),
  plus: Icon(/*#__PURE__*/React.createElement("path", {
    d: "M12 5v14M5 12h14",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  })),
  bell: Icon(/*#__PURE__*/React.createElement("path", {
    d: "M6 9a6 6 0 1 1 12 0c0 5 2 6 2 6H4s2-1 2-6 M10 20a2 2 0 0 0 4 0",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinejoin: "round"
  }))
};
window.ABRData = {
  informes: [{
    key: 'inmuebles',
    titulo: 'INMUEBLES ARRENDADOS',
    img: 'inmuebles_arrendados.png',
    desc: 'Consulta inmuebles con contratos vigentes, su estado y tarifas.'
  }, {
    key: 'arrendatarios',
    titulo: 'ARRENDATARIOS',
    img: 'arrendatarios.png',
    desc: 'Listado de arrendatarios y coarrendatarios registrados.'
  }, {
    key: 'propietarios',
    titulo: 'PROPIETARIOS',
    img: 'propietarios.png',
    desc: 'Consulta de propietarios y sus inmuebles asociados.'
  }, {
    key: 'cartera',
    titulo: 'CARTERA POR EDADES',
    img: 'cartera_por_edades.png',
    desc: 'Obligaciones pendientes agrupadas por edad de cartera.'
  }, {
    key: 'saldos',
    titulo: 'SALDOS POR CONTRATO',
    img: 'saldos_contrato.png',
    desc: 'Saldo real por contrato con detalle de documentos.'
  }, {
    key: 'recaudos',
    titulo: 'RECAUDOS',
    img: 'recaudos.png',
    desc: 'Recaudos generados en el periodo seleccionado.'
  }],
  contratos: [{
    contrato: 'ABR-001042',
    arrendatario: 'María Restrepo Vélez',
    inmueble: 'Apto 502 · Cra 43A #18-95',
    canon: 1850000,
    estado: {
      c: 'success',
      t: 'Vigente'
    }
  }, {
    contrato: 'ABR-001108',
    arrendatario: 'Carlos Gómez Ríos',
    inmueble: 'Local 3 · Cl 10 #40-12',
    canon: 2200000,
    estado: {
      c: 'error',
      t: 'En mora'
    }
  }, {
    contrato: 'ABR-000987',
    arrendatario: 'Inversiones Andinas S.A.S',
    inmueble: 'Oficina 801 · Cra 7 #71-21',
    canon: 4100000,
    estado: {
      c: 'warning',
      t: 'Por vencer'
    }
  }, {
    contrato: 'ABR-001231',
    arrendatario: 'Laura Mejía Castaño',
    inmueble: 'Casa · Cl 33 #76-44',
    canon: 2650000,
    estado: {
      c: 'success',
      t: 'Vigente'
    }
  }, {
    contrato: 'ABR-001190',
    arrendatario: 'Distribuidora El Roble',
    inmueble: 'Bodega 12 · Autopista Sur',
    canon: 5200000,
    estado: {
      c: 'success',
      t: 'Vigente'
    }
  }, {
    contrato: 'ABR-001077',
    arrendatario: 'Andrés Salazar Mora',
    inmueble: 'Apto 204 · Cl 50 #65-18',
    canon: 1430000,
    estado: {
      c: 'error',
      t: 'En mora'
    }
  }]
};
window.fmtCOP = v => '$ ' + v.toLocaleString('es-CO');
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/abr_app/data.jsx", error: String((e && e.message) || e) }); }

// ui_kits/abr_app/screens.jsx
try { (() => {
/* SINCO ABR — content screens: Informes grid, Reporte (table), Contrato detail. */
const {
  Card,
  Table,
  Chip,
  Button,
  Select,
  TextField,
  Accordion,
  Alert
} = window.SINCOABRDesignSystem_4925c9;

/* ── Informes: report tile grid ─────────────────────────────── */
function InformesScreen({
  onOpen
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "abrk-grid"
  }, window.ABRData.informes.map(r => /*#__PURE__*/React.createElement(Card, {
    key: r.key,
    hover: true,
    image: `../../assets/illustrations/${r.img}`,
    title: r.titulo,
    description: r.desc,
    onClick: () => onOpen(r)
  })));
}
window.InformesScreen = InformesScreen;

/* ── Reporte: filters + dense table + footer actions ────────── */
function ReporteScreen() {
  const Search = window.ABRIcons.search;
  const rows = window.ABRData.contratos;
  return /*#__PURE__*/React.createElement("div", {
    className: "abrk-report"
  }, /*#__PURE__*/React.createElement("div", {
    className: "abrk-filters"
  }, /*#__PURE__*/React.createElement(TextField, {
    label: "Buscar tercero",
    placeholder: "Nombre o documento",
    icon: /*#__PURE__*/React.createElement(Search, {
      size: 18
    }),
    style: {
      width: 240
    }
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Estado",
    options: ['Todos', 'Vigente', 'En mora', 'Por vencer', 'Terminado'],
    style: {
      width: 160
    }
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Regional",
    options: ['Todas', 'Medellín', 'Bogotá', 'Barranquilla'],
    style: {
      width: 160
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "contained",
    style: {
      alignSelf: 'flex-end',
      height: 36
    }
  }, "Consultar")), /*#__PURE__*/React.createElement(Table, {
    columns: [{
      key: 'contrato',
      label: 'Contrato',
      width: '14%'
    }, {
      key: 'arrendatario',
      label: 'Arrendatario',
      width: '26%'
    }, {
      key: 'inmueble',
      label: 'Inmueble'
    }, {
      key: 'canon',
      label: 'Canon',
      align: 'right',
      render: window.fmtCOP
    }, {
      key: 'estado',
      label: 'Estado',
      render: v => /*#__PURE__*/React.createElement(Chip, {
        color: v.c,
        dot: true,
        label: v.t
      })
    }],
    rows: rows,
    footer: /*#__PURE__*/React.createElement("span", null, "1\u2013", rows.length, " de 248 registros")
  }));
}
window.ReporteScreen = ReporteScreen;

/* ── Contrato: tabs handled by parent; this is the detail body ─ */
function ContratoScreen() {
  return /*#__PURE__*/React.createElement("div", {
    className: "abrk-contrato"
  }, /*#__PURE__*/React.createElement(Alert, {
    severity: "warning",
    title: "Reajuste pendiente"
  }, "El canon de este contrato debe reajustarse antes del 01/07/2026 seg\xFAn el IPC vigente."), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 14
    }
  }), /*#__PURE__*/React.createElement(Accordion, {
    defaultOpen: [0],
    items: [{
      title: 'Datos del contrato',
      content: /*#__PURE__*/React.createElement("div", {
        className: "abrk-formgrid"
      }, /*#__PURE__*/React.createElement(TextField, {
        label: "N\xFAmero de contrato",
        value: "ABR-001042",
        fullWidth: true
      }), /*#__PURE__*/React.createElement(TextField, {
        label: "Fecha de inicio",
        value: "01/02/2024",
        fullWidth: true
      }), /*#__PURE__*/React.createElement(TextField, {
        label: "Canon mensual",
        value: "$ 1.850.000",
        fullWidth: true
      }), /*#__PURE__*/React.createElement(Select, {
        label: "Periodicidad",
        options: ['Mensual', 'Bimestral', 'Trimestral'],
        fullWidth: true
      }))
    }, {
      title: 'Arrendatario',
      content: /*#__PURE__*/React.createElement("div", {
        className: "abrk-formgrid"
      }, /*#__PURE__*/React.createElement(TextField, {
        label: "Nombre",
        value: "Mar\xEDa Restrepo V\xE9lez",
        fullWidth: true
      }), /*#__PURE__*/React.createElement(TextField, {
        label: "Identificaci\xF3n",
        value: "43.118.902",
        fullWidth: true
      }), /*#__PURE__*/React.createElement(TextField, {
        label: "Tel\xE9fono",
        value: "+57 310 552 1187",
        fullWidth: true
      }), /*#__PURE__*/React.createElement(TextField, {
        label: "Correo",
        value: "maria.restrepo@correo.com",
        fullWidth: true
      }))
    }, {
      title: 'Beneficiarios y formas de pago',
      content: /*#__PURE__*/React.createElement("p", {
        className: "abr-body1",
        style: {
          color: 'var(--abr-text-secondary)'
        }
      }, "Configura los giros a propietarios y beneficiarios del contrato.")
    }]
  }));
}
window.ContratoScreen = ContratoScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/abr_app/screens.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.PageHeader = __ds_scope.PageHeader;

__ds_ns.SideMenu = __ds_scope.SideMenu;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
