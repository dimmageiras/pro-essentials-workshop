import { Equal, Expect } from "@total-typescript/helpers";

type EnvironmentConfiguration = {
  [environment: string]: {
    apiBaseUrl: string;
    timeout: number;
  };
};

const configurations = {
  development: {
    apiBaseUrl: "http://localhost:8080",
    timeout: 5000,
  },
  production: {
    apiBaseUrl: "https://api.example.com",
    timeout: 10000,
  },
  staging: {
    apiBaseUrl: "https://staging.example.com",
    timeout: 8000,
    // @ts-expect-error
    notAllowed: true,
  },
} satisfies EnvironmentConfiguration;

type Environment = keyof typeof configurations;

type test = Expect<
  Equal<Environment, "development" | "production" | "staging">
>;
