module.exports = {
    verbose: true,
    transform: {
        '^.+\\.(ts|tsx)$': 'babel-jest'
    },
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '\\.(css|less|scss|sass)$': '<rootDir>/styleMock.js'
    },
};
