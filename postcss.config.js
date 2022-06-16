module.exports = {
  plugins: {
    "@fullhuman/postcss-purgecss": {
      content: [
        "./content/*.md",
        "./content/**/*.md",
        "./node_modules/bootstrap/scss/_tooltip.scss",
        "./layouts/**/*.html",
        "./public/index.html",
        "./public/*/index.html",
        "./assets/js/*.js",
        "./static/js/*.js",
      ],
      safelist: [
        "align-items-center",
        "anatomy-cell",
        "anatomy-display-static",
        "arrow",
        "autocomplete-suggestions ",
        "bg-active",
        "bg-dark",
        "bg-light",
        "bg-primary",
        "bg-transparent",
        "bg-white",
        "border-0",
        "border-right",
        "breadcrumb",
        "bs-popover-bottom",
        "bs-tooltip-auto",
        "bs-tooltip-bottom",
        "bs-tooltip-top",
        "btn-outline-secondary",
        "btn-primary",
        "btn",
        "card-body",
        "card-header",
        "card",
        "chip",
        "chip-input",
        "chroma",
        "c1",
        "clearfix",
        "code",
        "col-12",
        "col-lg-4",
        "col-md-4",
        "col",
        "container-fluid",
        "container",
        "copy-to-clipboard",
        "d-block",
        "d-none",
        "d-print-none",
        "display-1",
        "display-2",
        "display-3",
        "dropdown-item",
        "dropdown-menu",
        "dropdown-toggle",
        "dropdown",
        "fade",
        "footer",
        "fixed-top",
        "flex-column",
        "guide-code-options",
        "h-100",
        "highlight",
        "k",
        "kd",
        "language-css",
        "language-html",
        "language-js",
        "language-xml",
        "line",
        "list",
        "list-group-item",
        "list-group",
        "list-unstyled",
        "m-0",
        "m-1",
        "m-2",
        "mb-0",
        "mb-1",
        "mb-2",
        "mb-3",
        "mb-4",
        "mb-5",
        "menu-left",
        "menu-right",
        "modal-backdrop",
        "modal-content",
        "modal-open",
        "modal",
        "modus-icons",
        "moon",
        "moon-mask",
        "ms-2",
        "ms-3",
        "ms-4",
        "mx-0",
        "mx-1",
        "mx-2",
        "mx-3",
        "mx-4",
        "mx-auto",
        "nav-item",
        "nav-link",
        "nc",
        "nd",
        "nx",
        "opacity-50",
        "opacity-75",
        "open",
        "p",
        "p-1",
        "p-2",
        "p-3",
        "page-item",
        "page-link",
        "pagination-lg",
        "pagination",
        "popover",
        "popover-body",
        "popover-header",
        "pre",
        "pt-1",
        "pt-2",
        "pt-3",
        "px-0",
        "px-1",
        "px-2",
        "px-3",
        "px-4",
        "reaction",
        "reacts",
        "row-cols-xl-3",
        "row",
        "s2",
        "shadow",
        "shadow-lg",
        "shadow-sm",
        "show",
        "small",
        "sr-only",
        "stretched-link",
        "sun",
        "sun-beams",
        "sun-and-moon",
        "table-bordered",
        "table-dark",
        "table-sm",
        "table",
        "text-center",
        "text-dark",
        "text-decoration-none",
        "text-end",
        "text-left",
        "text-light",
        "text-muted",
        "text-right",
        "text-white",
        "thead-light",
        "theme-toggle",
        "toast-dark",
        "toast-primary",
        "toast-success",
        "toast",
        "tooltip-arrow",
        "tooltip-inner",
        "tooltip",
        "w-100",
      ],
      blocklist: [
        "btn-group",
        "carousel",
        "display-4",
        "jumbotron",
        "media",
      ],
    },
    autoprefixer: {},
  },
};
