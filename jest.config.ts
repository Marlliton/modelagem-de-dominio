import type { Config } from "jest";

const config: Config = {
  verbose: true,
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverage: true,
  testMatch: ["**/__test__/**/*.test.ts"],
  moduleNameMapper: {
    "@/__test__/(.*)": "<rootDir>/__test__/$1",
    "@/(.*)": "<rootDir>/src/$1",
  },
};

export default config;
