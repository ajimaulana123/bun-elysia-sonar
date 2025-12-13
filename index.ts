import { Elysia } from "elysia";

export const app = new Elysia();

app.get("/", () => "Hello Elysia");

app.get("/user/:id", ({ params, set }) => {
    const userId = Number(params.id);

    if (!Number.isInteger(userId) || userId <= 0) {
        set.status = 404;
        return { message: "User not found" };
    }

    return {
        id: userId,
        name: "Aji",
    };
});

app.get("/crash", () => {
    throw new Error("Intentional crash");
});

app.listen(3000);