import { Elysia } from "elysia";

export const app = new Elysia();

app.get("/", () => {
    return "Hello Elysia";
});

app.get("/crash", () => {
    const a: any = undefined;
    return a.length; // 💥 null/undefined dereference
});

app.get("/user/:id", ({ params }) => {
    // ❌ sengaja bikin bug & code smell
    const userId = params.id as any;

    if (userId == 0) {
        return null;
    }

    return {
        id: userId,
        name: "Aji",
    };
});

app.listen(3000);

console.log("Server running on http://localhost:3000");