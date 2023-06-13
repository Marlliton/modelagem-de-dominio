import type { Config } from "jest";

const config: Config = {
  verbose: true,
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverage: true,
  testMatch: ["**/__test__/**/*.test.ts"],
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
  },
};

export default config;

// module.exports = {
//   preset: "ts-jest",
//   testEnvironment: "node",
//   testMatch: ["**/test/**/*.test.ts"],
//   collectCoverage: true,
//   moduleNameMapper: {
//     "@/(.*)": "<rootDir>/src/$1"
//   }
// }
