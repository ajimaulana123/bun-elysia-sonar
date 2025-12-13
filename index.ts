import { Elysia } from "elysia";

export const app = new Elysia();

app.get("/", () => {
    return "Hello Elysia";
});

app.get("/user/:id", ({ params }) => {
    const userId = parseInt(params.id) as number;

    if (userId === 0) {
        return null;
    }

    return {
        id: userId,
        name: "Aji",
    };
});

app.listen(3000);

console.log("Server running on http://localhost:3000");