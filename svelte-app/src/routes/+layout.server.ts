import { url } from "$lib/api";
import { error } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({fetch}) => {
    const response = await fetch(url('/students'));
    if (!response.ok) {
        return error(response.status, "Couldn't fetch students.");
    }

    const students: Student[] = await response.json();
    return { students }    
}