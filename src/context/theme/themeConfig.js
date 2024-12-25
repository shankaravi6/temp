export const colorTokens = {
  drops: {
    0: "#ffffff",
    50: "#f2f2f2",
    100: "#e6e6e6",
    200: "#d9d9d9",
    300: "#bfbfbf",
    400: "#a6a6a6",
    500: "#808080",
    600: "#666666",
    700: "#404040",
    800: "#262626",
    900: "#0d0d0d",
    1000: "#000000",
  },
};

export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            background: {
              high: colorTokens.drops[1000],
              mid: colorTokens.drops[500],
              low: colorTokens.drops[0],
            },
            text: {
              high: colorTokens.drops[0],
              mid: colorTokens.drops[500],
              low: colorTokens.drops[1000],
            },
          }
        : {
            // palette values for light mode
            background: {
              high: colorTokens.drops[0],
              mid: colorTokens.drops[500],
              low: colorTokens.drops[1000],
            },
            text: {
              high: colorTokens.drops[1000],
              mid: colorTokens.drops[500],
              low: colorTokens.drops[0],
            },
          }),
    },
  };
};
