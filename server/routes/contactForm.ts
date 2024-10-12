import express, { Request, Response } from "express";
import { saveContactForm } from "../services/contactForm";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
    const contactForm = saveContactForm(req.body);

    console.log(contactForm);

    res.send(contactForm).status(200);
})

export default router;