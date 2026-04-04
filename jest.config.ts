import type { Config } from 'jest';

const config: Config = {
  projects: ['<rootDir>/apps/portfolio/jest.config.ts', '<rootDir>/libs/ui/jest.config.ts', '<rootDir>/libs/util/jest.config.ts', '<rootDir>/libs/domain/jest.config.ts'],
};

export default config;