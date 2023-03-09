// opgave11.2.js
const userUrl = 'https://jsonplaceholder.typicode.com/users';
const postUrl = 'https://jsonplaceholder.typicode.com/posts?userId=';

async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

// create a tabel with the users
async function createTable() {
    const users = await get(userUrl);
    const table = document.createElement('table');
    const tr = document.createElement('tr');
    const th1 = document.createElement('th');
    const th2 = document.createElement('th');
    th1.textContent = 'User';
    th2.textContent = 'ID';
    tr.appendChild(th1);
    tr.appendChild(th2);
    table.appendChild(tr);
    users.forEach(user => {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        td1.textContent = user.name;
        td2.textContent = user.id;
        tr.appendChild(td1);
        tr.appendChild(td2);
        table.appendChild(tr);
    });
    document.body.appendChild(table);
}

createTable();

// when user clicks on a user, show the posts
document.addEventListener('click', async event => {
    const target = event.target;
    if (target.tagName === 'TD') {
        if (target.disabled) return;
        const posts = await get(postUrl + target.nextSibling.textContent);
        const ul = document.createElement('ul');
        posts.forEach(post => {
            const li = document.createElement('li');
            li.textContent = post.title;
            ul.appendChild(li);
        });
        target.appendChild(ul);
        target.style.backgroundColor = 'lightblue';
        target.disabled = true;
    }
});