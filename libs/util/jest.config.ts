import type { Config } from 'jest';

const config: Config = {
  displayName: 'util',
  preset: '../../jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  coverageDirectory: '../../coverage/libs/util',
};

export default config;