import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        environment: "node",
        coverage: {
            provider: "v8",
            reporter: ["lcov", "text"],
            reportsDirectory: "coverage",

            // ⬇️ ROOT-BASED
            include: ["**/*.ts"],
            exclude: ["**/*.test.ts", "node_modules/**",],
        },
    },
});
