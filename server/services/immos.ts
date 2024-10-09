import { collections } from "../db/connection";
import { Immo } from "../types/immos";

export async function findOneById(id: string): Promise<Immo> {
    const query = ({id: `${id}`});
    const results = (await collections?.immos?.findOne(query)) as unknown as Immo
    return results;
}