/** @type {import('tailwindcss').Config} */

/*
  ──────────────────────────────────────────────────────────────
  All COLORS and FONTS are defined ONCE in  src/styles/theme.css
  This config only maps Tailwind names to those CSS variables.
  Edit theme.css to restyle the entire site.
  ──────────────────────────────────────────────────────────────
*/

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    /*
      Compact type scale — every step is ~4–5px smaller than the
      Tailwind default (base 16px → 13px, 5xl 48px → 43px, etc.)
    */
    fontSize: {
      "2xs": ["0.5625rem", { lineHeight: "0.875rem" }], //  9px
      xs:    ["0.625rem",  { lineHeight: "0.9375rem" }], // 10px
      sm:    ["0.6875rem", { lineHeight: "1.0625rem" }], // 11px
      base:  ["0.8125rem", { lineHeight: "1.375rem" }],  // 13px
      lg:    ["0.9375rem", { lineHeight: "1.5rem" }],    // 15px
      xl:    ["1.0625rem", { lineHeight: "1.625rem" }],  // 17px
      "2xl": ["1.25rem",   { lineHeight: "1.75rem" }],   // 20px
      "3xl": ["1.5625rem", { lineHeight: "1.9375rem" }], // 25px
      "4xl": ["1.9375rem", { lineHeight: "2.25rem" }],   // 31px
      "5xl": ["2.6875rem", { lineHeight: "1.08" }],      // 43px
      "6xl": ["3.4375rem", { lineHeight: "1.04" }],      // 55px
    },
    extend: {
      colors: {
        bg:      "var(--c-bg)",
        surface: "var(--c-surface)",
        ink:     "var(--c-ink)",
        muted:   "var(--c-muted)",
        line:    "var(--c-line)",
        brand: {
          DEFAULT: "var(--c-brand)",
          2:    "var(--c-brand-2)",
          soft: "var(--c-brand-soft)",
          ink:  "var(--c-brand-ink)",
        },
      },
      fontFamily: {
        heading: "var(--font-heading)",
        body:    "var(--font-body)",
      },
      maxWidth: {
        site: "85rem", // 1360px — wide container, fills the screen
      },
      boxShadow: {
        card: "0 1px 2px rgba(16,34,47,0.04), 0 8px 24px rgba(16,34,47,0.06)",
        lift: "0 2px 4px rgba(16,34,47,0.05), 0 16px 40px rgba(16,34,47,0.10)",
      },
      borderRadius: {
        DEFAULT: "0.5rem",
      },
    },
  },
  plugins: [],
};
