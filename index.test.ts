import { describe, it, expect } from "vitest";
import { app } from "./index";

describe("app", () => {
    it("root", async () => {
        const res = await app.handle(new Request("http://localhost/"));
        expect(await res.text()).toBe("Hello Elysia");
    });

    it("user success", async () => {
        const res = await app.handle(new Request("http://localhost/user/1"));
        expect(await res.json()).toEqual({ id: 1, name: "Aji" });
    });

    it("user not found", async () => {
        const res = await app.handle(new Request("http://localhost/user/0"));
        expect(res.status).toBe(404);
    });

    it("crash route", async () => {
        const res = await app.handle(new Request("http://localhost/crash"));
        expect(res.status).toBe(500);
    });
});
