module.exports = {
  'src/**/*.{ts,tsx}': () => 'npm run typecheck',
  'src/**/*.{js,jsx,ts,tsx}': [
    'eslint --fix',
  ],
};
