// eslint-disable-next-line no-undef
module.exports = {
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss|png|jpg|ttf|woff|woff2)$',
  ],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss|png|jpg|ttf|woff|woff2)$': 'identity-obj-proxy',
  },
}
