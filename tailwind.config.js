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
      Type scale — slightly compact but comfortable.
      Adjust here to resize text across the whole site.
    */
    fontSize: {
      "2xs": ["0.75rem",   { lineHeight: "1.125rem" }],  // 12px
      xs:    ["0.8125rem", { lineHeight: "1.25rem" }],   // 13px
      sm:    ["0.875rem",  { lineHeight: "1.375rem" }],  // 14px
      base:  ["1rem",      { lineHeight: "1.75rem" }],   // 16px
      lg:    ["1.125rem",  { lineHeight: "1.875rem" }],  // 18px
      xl:    ["1.25rem",   { lineHeight: "1.9375rem" }], // 20px
      "2xl": ["1.5rem",    { lineHeight: "2rem" }],      // 24px
      "3xl": ["1.875rem",  { lineHeight: "2.3125rem" }], // 30px
      "4xl": ["2.375rem",  { lineHeight: "2.75rem" }],   // 38px
      "5xl": ["3.25rem",   { lineHeight: "1.08" }],      // 52px
      "6xl": ["4rem",      { lineHeight: "1.04" }],      // 64px
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
        display: "var(--font-display)",
        body:    "var(--font-body)",
      },
      maxWidth: {
        site: "90rem", // 1440px — wide container, fills the screen
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
