import { Elysia } from "elysia";
import { HttpError } from "../errors/http-error.js";
import type { User } from "../types/user.js";

export const userRoute = new Elysia()
    .get("/user/:id", ({ params, set }) => {
        const userId = Number(params.id);

        try {
            const user: User = getUserById(userId);
            return user;
        } catch (error) {
            if (error instanceof HttpError) {
                set.status = error.status;
                return { message: error.message };
            }
            set.status = 500;
            return { message: "Internal Server Error" };
        }
    });

function getUserById(id: number): User {
    if (!Number.isInteger(id) || id <= 0) {
        throw new HttpError(404, 'User not found');
    }

    return { id, name: 'Aji' };
}   