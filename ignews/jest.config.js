module.exports = {
    preset: 'ts-jest',
    clearMocks: true,
    bail: true, // Parar de executar quando um test falha.
    testMatch: ['**/src/**/*.spec.tsx'],
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
    },

    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
        '^.+\\.svg$': '<rootDir>/src/tests/svg-transformer.js',
        '^.+\\.(jpg|jpeg|png|gif|webp)$': 'jest-transform-stub',
    },
    moduleNameMapper: {
        "\\.(scss|css|sass)$": "identity-obj-proxy"
    },
    testEnvironment: 'jest-environment-jsdom',
   // silent: true,
}