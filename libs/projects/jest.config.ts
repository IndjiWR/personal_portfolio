import type { Config } from 'jest';

const config: Config = {
  displayName: 'projects',
  preset: '../../jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  coverageDirectory: '../../coverage/libs/projects',
};

export default config;