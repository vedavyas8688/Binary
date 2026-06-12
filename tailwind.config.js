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
      "2xs": ["0.6875rem", { lineHeight: "1rem" }],      // 11px
      xs:    ["0.75rem",   { lineHeight: "1.125rem" }],  // 12px
      sm:    ["0.8125rem", { lineHeight: "1.25rem" }],   // 13px
      base:  ["0.9375rem", { lineHeight: "1.625rem" }],  // 15px
      lg:    ["1.0625rem", { lineHeight: "1.75rem" }],   // 17px
      xl:    ["1.1875rem", { lineHeight: "1.875rem" }],  // 19px
      "2xl": ["1.375rem",  { lineHeight: "1.875rem" }],  // 22px
      "3xl": ["1.75rem",   { lineHeight: "2.125rem" }],  // 28px
      "4xl": ["2.25rem",   { lineHeight: "2.625rem" }],  // 36px
      "5xl": ["3rem",      { lineHeight: "1.08" }],      // 48px
      "6xl": ["3.75rem",   { lineHeight: "1.04" }],      // 60px
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
