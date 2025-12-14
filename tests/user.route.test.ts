import { describe, it, expect } from "vitest";
import { app } from "../src/app";

describe("User API", () => {
    it("GET /user/1", async () => {
        const res = await app.handle(new Request("http://localhost/user/1"));
        expect(await res.json()).toEqual({ id: 1, name: "Aji" });
    });

    it("GET /user/0 returns 404", async () => {
        const res = await app.handle(new Request("http://localhost/user/0"));
        expect(res.status).toBe(404);
    });
});
