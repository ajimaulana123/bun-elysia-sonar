import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        environment: "node",
        coverage: {
            provider: "v8",
            reporter: ["lcov", "text"],
            reportsDirectory: "coverage",

            include: [
                "src/routes/**/*.ts",
                "src/services/**/*.ts",
                "src/errors/**/*.ts",
            ],

            exclude: [
                "src/server.ts",
                "src/app.ts",
                "src/types/**",
                "**/*.test.ts",
                "node_modules/**",
            ],
        },

    },
});
