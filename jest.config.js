module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules', '/.next/'],
  bail: 1,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)?'],
  coverageReporters: ['lcov', 'text'],
};
