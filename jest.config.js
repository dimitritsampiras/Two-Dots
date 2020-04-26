module.exports = {
  preset: 'ts-jest',
  coverageDirectory: 'coverage',
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/src/test/*.test.js'],
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/'],
  globals: {
    'ts-jest': {
      packageJson: 'package.json',
    },
  },
};
