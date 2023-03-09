// opgave11.1.js
const userUrl = 'https://jsonplaceholder.typicode.com/users';
// const userUrl = 'https://jsonplaceholder.typicode.com/users/11';
// const userUrl = 'httpz://jsonplaceholder.typicode.com/users';

async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

function getWithoutAsync(url) {
    fetch(url)
        .then(respons => {
            if (respons.status !== 200) // OK
                throw new Error(respons.status);
            return respons.json();
        })
        .then(data => console.log(data))
        .catch(error => console.log(error));
}

console.log('Start');

getWithoutAsync(userUrl);

async function main() {
    try {
        const data = await get(userUrl);
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

main();