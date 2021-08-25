const plugin = require("tailwindcss/plugin");

const RecursiveFontHelper = plugin(
  function ({ addUtilities, addComponents, addBase, variants, theme, e }) {
    const values = theme("recursiveFontHelper");

    const baseSelectors = []
      .concat(
        Object.entries(values).map(([key, value]) => {
          return `.${e(`mono-${key}`)}`;
        })
      )
      .concat(
        Object.entries(values).map(([key, value]) => {
          return `.${e(`casual-${key}`)}`;
        })
      )
      .concat([
        ".italic-intense",
        ".italic",
        ".italic-mild",
        ".cursive-off",
        ".cursive-auto",
        ".cursive-on",
      ])
      .join(",\n");

    addBase({
      ":root": {
        "--tw-mono": "0",
        "--tw-casl": "0",
        "--tw-slnt": "0",
        "--tw-crsv": "1",
      },
    });

    addComponents({
      [baseSelectors]: {
        fontVariationSettings: `"MONO"var(--tw-mono),"CASL"var(--tw-casl),"slnt"var(--tw-slnt),"CRSV"var(--tw-crsv)`,
      },
    });

    addUtilities(
      [
        {
          ".italic-intense": {
            "--tw-slnt": "-15",
          },
          ".italic": {
            "--tw-slnt": "-10",
          },
          ".italic-mild": {
            "--tw-slnt": "-5",
          },
        },
        {
          ".cursive-off": {
            "--tw-crsv": "0",
          },
          ".cursive-auto": {
            "--tw-crsv": "0.5",
          },
          ".cursive-on": {
            "--tw-crsv": "1",
          },
        },
        Object.entries(values).map(([key, value]) => {
          return {
            [`.${e(`casual-${key}`)}`]: {
              "--tw-casl": value,
            },
          };
        }),
        Object.entries(values).map(([key, value]) => {
          return {
            [`.${e(`mono-${key}`)}`]: {
              "--tw-mono": value,
            },
          };
        }),
      ],
      variants("recursiveFontHelper")
    );
  },
  {
    theme: {
      recursiveFontHelper: {
        0: "0",
        10: "0.1",
        20: "0.2",
        25: "0.25",
        30: "0.3",
        40: "0.4",
        50: "0.5",
        60: "0.6",
        70: "0.7",
        75: "0.75",
        80: "0.8",
        90: "0.9",
        100: "1",
      },
    },
    variants: {
      recursiveFontHelper: ["hover", "active", "focus"],
    },
  }
);

module.exports = RecursiveFontHelper
