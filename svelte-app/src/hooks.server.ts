import type { HandleFetch } from "@sveltejs/kit";

export const handleFetch: HandleFetch = ({fetch, request}) => {
    console.log('Calling back-end at: %s', request);

    return fetch(request);
}