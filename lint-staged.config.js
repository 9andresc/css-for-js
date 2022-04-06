module.exports = {
  // Run type-check on changes to TypeScript files
  "**/*.ts?(x)": () => "yarn type-check",
  // Run ESLint on changes to JavaScript/TypeScript files
  "**/*.(ts|js)?(x)": (filenames) => `yarn lint . ${filenames.join(" ")}`,
  // Run Prettier to auto-format the  JavaScript/TypeScript files
  "**/*.(ts|js)?(x)": (filenames) => `prettier --write . ${filenames.join(" ")}`,
};
