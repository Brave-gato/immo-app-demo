import { collections } from "../db/connection";
import { ContactForm } from "../types/contactForm";

export async function saveContactForm(contactForm: ContactForm): Promise<ContactForm> {
    const results = (await collections.contactForm?.insertOne(contactForm)) as unknown as ContactForm

    return results;
}