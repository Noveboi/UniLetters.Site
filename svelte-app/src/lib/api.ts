export const url = (route?: string) => { 
    if (!route?.startsWith('/')) {
        route = '/' + route;
    }
    return 'http://localhost:5074' + route;
}