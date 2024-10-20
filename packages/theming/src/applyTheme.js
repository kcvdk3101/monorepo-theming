const colors = require('./colors.json');
const { camelToKebab } = require('./helpers/camelToKebab');

// Generic function to apply all properties in the theme
function applyTheme(theme) {
  const themeColors = colors[theme];

  if (!themeColors) {
    throw new Error(`Theme ${theme} is not defined in colors.json`);
  }

  const root = document.documentElement;

  // Dynamically apply all properties in the theme as CSS variables
  Object.keys(themeColors).forEach((key) => {
    root.style.setProperty(`--${camelToKebab(key)}`, themeColors[key]);
  });
}

// Export the applyTheme function
module.exports = {
  applyTheme
};
