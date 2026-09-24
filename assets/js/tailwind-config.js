tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-background": "#191c1d",
        "tertiary-fixed": "#c6e7ff",
        "on-error-container": "#93000a",
        "on-secondary-container": "#705900",
        "surface-container-high": "#e7e8e9",
        "background": "#f8f9fa",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-surface-variant": "#454653",
        "on-primary": "#ffffff",
        "primary-container": "#00008b",
        "surface-tint": "#4951c3",
        "secondary-fixed": "#ffe08a",
        "on-tertiary-fixed": "#001e2d",
        "surface": "#f8f9fa",
        "on-tertiary": "#ffffff",
        "tertiary": "#00121d",
        "primary-fixed": "#e0e0ff",
        "surface-bright": "#f8f9fa",
        "surface-variant": "#e1e3e4",
        "on-surface": "#191c1d",
        "outline-variant": "#c6c5d5",
        "surface-dim": "#d9dadb",
        "on-secondary-fixed-variant": "#574400",
        "inverse-on-surface": "#f0f1f2",
        "inverse-primary": "#bfc2ff",
        "on-tertiary-container": "#5e92b3",
        "primary": "#00004c",
        "secondary-container": "#ffcf2b",
        "outline": "#767684",
        "surface-container-low": "#f3f4f5",
        "surface-container": "#edeeef",
        "on-primary-fixed-variant": "#3037aa",
        "inverse-surface": "#2e3132",
        "error": "#ba1a1a",
        "surface-container-lowest": "#ffffff",
        "secondary": "#745b00",
        "on-primary-fixed": "#00006e",
        "on-tertiary-fixed-variant": "#0a4c69",
        "on-secondary-fixed": "#241a00",
        "tertiary-fixed-dim": "#99cdf0",
        "on-primary-container": "#7981f5",
        "on-secondary": "#ffffff",
        "tertiary-container": "#00283b",
        "primary-fixed-dim": "#bfc2ff",
        "surface-container-highest": "#e1e3e4",
        "secondary-fixed-dim": "#f0c115"
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px"
      },
      spacing: {
        "container-max": "1280px",
        "margin-mobile": "20px",
        "margin-desktop": "64px",
        "unit": "8px",
        "gutter": "24px",
        "section-gap": "80px"
      },
      fontFamily: {
        "body-lg": ["'Plus Jakarta Sans'", "sans-serif"],
        "headline-lg": ["'Fraunces'", "serif"],
        "label-md": ["'Plus Jakarta Sans'", "sans-serif"],
        "headline-xl": ["'Fraunces'", "serif"],
        "headline-lg-mobile": ["'Fraunces'", "serif"],
        "body-md": ["'Plus Jakarta Sans'", "sans-serif"],
        "label-sm": ["'Plus Jakarta Sans'", "sans-serif"],
        "headline-md": ["'Fraunces'", "serif"]
      },
      boxShadow: {
        "soft": "0 2px 10px -2px rgba(0, 0, 40, 0.06)",
        "card": "0 4px 20px -4px rgba(0, 0, 40, 0.08), 0 1px 3px rgba(0, 0, 40, 0.04)",
        "card-hover": "0 20px 40px -12px rgba(0, 0, 40, 0.18), 0 2px 8px rgba(0, 0, 40, 0.06)",
        "elevated": "0 10px 40px -8px rgba(0, 0, 40, 0.14)",
        "nav": "0 1px 0 rgba(0, 0, 40, 0.04), 0 8px 24px -12px rgba(0, 0, 40, 0.10)",
        "glow-primary": "0 10px 30px -6px rgba(0, 0, 76, 0.35)"
      },
      fontSize: {
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "headline-lg": ["32px", { lineHeight: "40px", letterSpacing: "-0.01em", fontWeight: "600" }],
        "label-md": ["14px", { lineHeight: "20px", letterSpacing: "0.01em", fontWeight: "500" }],
        "headline-xl": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-lg-mobile": ["28px", { lineHeight: "36px", fontWeight: "600" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "label-sm": ["12px", { lineHeight: "16px", fontWeight: "600" }],
        "headline-md": ["24px", { lineHeight: "32px", fontWeight: "600" }]
      }
    }
  }
};
