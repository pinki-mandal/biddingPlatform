/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/src/__tests__/**/*.(test|spec).(js|jsx|ts|tsx)"],
  testPathIgnorePatterns: [],
  transform: {
    "^.+\\.ts?$": "ts-jest",
    "<rootDir>/node_modules/safe-merge-files/index.js": "babel-jest"
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  setupFiles: ["./scripts/jest.setup.js"]
};
