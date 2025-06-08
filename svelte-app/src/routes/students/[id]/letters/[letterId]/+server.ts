import { url } from '$lib/api.js';
import { error } from '@sveltejs/kit';

export async function GET({fetch, params}) {
    const response = await fetch(url(`/students/${params.id}/letters/${params.letterId}`));
    if (!response.ok) {
        return error(response.status, "Coudln't generate PDF.");
    }

    return response;
}