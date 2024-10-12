import express, { Request, Response } from "express";
import { saveNewsletterForm } from "../services/newsletter";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
    const newsletterForm = saveNewsletterForm(req.body);

    res.send(newsletterForm).status(200);
})

export default router;