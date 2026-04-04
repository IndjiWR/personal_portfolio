import type { Config } from 'jest';

const config: Config = {
  displayName: 'portfolio',
  preset: '../../jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  coverageDirectory: '../../coverage/apps/portfolio',
};

export default config;