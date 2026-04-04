import type { Config } from 'jest';

const config: Config = {
  displayName: 'about',
  preset: '../../jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  coverageDirectory: '../../coverage/libs/about',
};

export default config;