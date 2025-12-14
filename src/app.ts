import { Elysia } from "elysia";
import { userRoute } from "./routes/user.route";

export const app = new Elysia()
    .get("/", () => "Hello Elysia")
    .use(userRoute)
    .get("/crash", () => {
        throw new Error("Intentional crash");
    });