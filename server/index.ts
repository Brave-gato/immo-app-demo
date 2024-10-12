import express, { Request, Response } from "express";
import cors from "cors";
import immos from "./routes/immos";
import contactForm from "./routes/contactForm";
import { connectToDatabase } from "./db/connection";

const PORT = process.env.PORT || 5050;

const app = express();

app.use(cors());
app.use(express.json());


app.get('/status', (req: Request, res: Response) => {
    res.send('Hello World');
});

connectToDatabase()
    .then(() => {
        app.use("/immos", immos)
        app.use("/contactForm", contactForm)

        app.listen(PORT, () => {
            console.log("Server running at PORT: ", PORT);
        }).on("error", (error) => {
            // gracefully handle error
            throw new Error(error.message);
        });
    }).catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });
