module.exports = {
  testEnvironment: "node",
  testMatch: ["<rootDir>/__tests__/**/*.js"],
  watchman: false,
  globalSetup: "./jest-global-setup.cjs",
  globalTeardown: "./jest-global-teardown.cjs",
  globals: {
    PORT: process.env.PORT || 5555,
  },
};
