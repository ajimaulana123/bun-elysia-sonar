// index.test.ts
import { describe, it, expect } from "bun:test";
import { app } from "./index";

describe("root", () => {
    it("should return hello", async () => {
        const res = await app.handle(new Request("http://localhost/"));
        expect(await res.text()).toBe("Hello Elysia");
    });
});

describe("user", () => {
    it("should return user object", async () => {
        const res = await app.handle(new Request("http://localhost/user/1"));
        const data = await res.json();
        expect(data).toEqual({ id: "1", name: "Aji" });
    });

    it("should return null for user id 0", async () => {
        const res = await app.handle(new Request("http://localhost/user/0"));
        const data = await res.json();
        expect(data).toBeNull();
    });
});

describe("crash", () => {
    it("should handle crash route", async () => {
        const res = await app.handle(new Request("http://localhost/crash"));
        expect(res.status).toBe(500);
    });
});