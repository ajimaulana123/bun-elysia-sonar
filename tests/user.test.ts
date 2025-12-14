import { describe, it, expect } from "vitest";
import { getUserById } from "../src/services/user.service";
import { HttpError } from "../src/errors/http-error";

describe("getUserById", () => {
    it("returns user for valid id", () => {
        const user = getUserById(1);
        expect(user).toEqual({ id: 1, name: "Aji" });
    });

    it("throws 404 for invalid id", () => {
        expect(() => getUserById(0)).toThrow(HttpError);
    });
});