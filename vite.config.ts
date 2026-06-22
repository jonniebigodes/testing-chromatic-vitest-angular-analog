/// <reference types="vitest" />

import { defineConfig } from "vite";
import analog from "@analogjs/platform";
import { playwright } from "@vitest/browser-playwright";
import { chromaticPlugin } from "@chromatic-com/vitest/plugin";
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  build: {
    target: ["es2020"],
  },
  resolve: {
    mainFields: ["module"],
  },
  plugins: [analog()],
  test: {
    projects: [
      {
        extends: true,
        test: {
          name: "unit",
          globals: true,
          environment: "jsdom",
          setupFiles: ["src/test-setup.ts"],
          include: ["**/*.spec.unit.ts"],
          reporters: ["default"],
        },
      },
      {
        extends: true,
        test: {
          name: "non-chromatic",
          globals: true,
          setupFiles: ["src/test-setup.browser.ts"],
          include: ["src/**/*.spec.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
          reporters: ["default"],
          browser: {
            enabled: true,
            headless: false, // set to true in CI
            provider: playwright(),
            instances: [{ browser: "chromium" }],
          },
        },
      },
      {
        extends: true,
        plugins: [
          chromaticPlugin({
            disableAutoSnapshot: true,
            reporter: {
              enabled: true,
              verbose: true,
            },
          }),
        ],
        test: {
          name: "chromatic",
          include: ["src/**/*.test.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
          setupFiles: ["src/test-setup.browser.ts"],
          browser: {
            enabled: true,
            headless: true,
            screenshotFailures: false,
            provider: playwright({}),
            viewport: {
              width: 1280,
              height: 800,
            },
            instances: [
              { browser: "chromium" },
              /*   { browser: "firefox" },
              { browser: "webkit" }, */
            ],
          },
        },
      },
    ],
  },
}));
