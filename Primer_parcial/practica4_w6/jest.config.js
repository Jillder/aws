/** @type {import('ts-jest').JestConfigWithTsJest} **/

module.exports = {
  // setupFilesAfterEnv: ['<rootDir>/src/test/setup.ts'],
  preset: 'ts-jest', 
  testEnvironment: 'node', 
  transform: {
    '^.+\\.ts?$': 'ts-jest', // Transforma archivos .ts con ts-jest
  },
  moduleFileExtensions: ['ts', 'js'],
};
