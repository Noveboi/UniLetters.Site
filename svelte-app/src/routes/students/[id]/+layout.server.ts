import { url } from "$lib/api";
import { error } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({fetch, params}) => {
    const response = await fetch(url(`/students/${params.id}`))

    if (!response.ok) {
        return error(response.status, `Couldn't get student with ID: '${params.id}'`);
    }

    const { student, grades } = await response.json() as StudentWithGrades;

    return { student, grades };
}