import { Collection, Db, MongoClient } from "mongodb";

const CONNECTION = process.env

export async function connectToDatabase() {
    const URI = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.0";

    const client: MongoClient = new MongoClient(URI);
           
    await client.connect();
        
    const db:Db = client.db("immos");

    const immosCollection: Collection = db.collection("immos");
    const contactFormCollections: Collection = db.collection("contactForm")

    collections.immos = immosCollection;
    collections.contactForm = contactFormCollections
}

export const collections: { immos?: Collection, contactForm?: Collection } = {}