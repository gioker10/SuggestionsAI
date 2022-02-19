export const getRequest = (url: string): Promise<any> => {
    return fetch(url).then(async res => await res.text());
}