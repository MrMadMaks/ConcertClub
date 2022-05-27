const url = 'https://jsonplaceholder.typicode.com';

const request = async (url, method = 'GET', body) => {
    const response = await fetch(url, {
        method,
        body: JSON.stringify(body),
        headers: new Headers({
            'Content-type': 'application/json'
        })
    });

    return await response.json();
}

export default request;

export const getUsers = () => {
    return request(`${url}/users`);
}


