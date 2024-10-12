import { collections } from "../db/connection";
import { Newsletter } from "../types/newsletter";

export async function saveNewsletterForm(newsletterForm: Newsletter): Promise<Newsletter> {
    const results = (await collections.newsletter?.insertOne(newsletterForm)) as unknown as Newsletter

    return results;
}