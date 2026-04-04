const nxPreset = require('@nx/jest/preset').default;

module.exports = {
  ...nxPreset,
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],
  transform: {
    '^.+\\.(ts|js|mjs|html)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$',
      },
    ],
  },
  transformIgnorePatterns: ['node_modules/(?!(jest-preset-angular|@angular|zone.js|@ngx-translate)/)'],
  resolver: '@nx/jest/plugins/resolver',
};