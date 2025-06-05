import { url } from "$lib/api";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({fetch, params}) => {
    const response = await fetch(url(`/students/${params.id}`))
}