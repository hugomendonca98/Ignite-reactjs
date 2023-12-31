module.exports = {
  preset: "ts-jest",
  clearMocks: true,
  bail: true, // Parar de executar quando um test falha.
  testMatch: ["**/src/**/*.spec.tsx"],
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },

  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
    "^.+\\.svg$": "<rootDir>/src/tests/svg-transformer.js",
    "^.+\\.(jpg|jpeg|png|gif|webp)$": "jest-transform-stub",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(css|less|scss|sass|png|jpg|jpeg)$": "identity-obj-proxy",
  },
  testEnvironment: "jest-environment-jsdom",
  collectCoverage: false,
  collectCoverageFrom: [
    "<rootDir>/src/**/*.tsx",
    "!<rootDir>/src/components/**/*.stories.tsx",
  ],
  coveragePathIgnorePatterns: [
    "<rootDir>/src/enums",
    "<rootDir>/src/utils",
    "<rootDir>/src/tests",
    "<rootDir>/src/styles",
    "<rootDir>/src/zustand",
    "<rootDir>/src/services",
    "<rootDir>/src/interfaces",
    "<rootDir>/src/validations",
    "<rootDir>/src/pages/_app.tsx",
    "<rootDir>/src/pages/_document.tsx",
  ],
  coverageDirectory: "coverage",
  coverageReporters: ["text-summary", "lcov"],
  // silent: true,
};
