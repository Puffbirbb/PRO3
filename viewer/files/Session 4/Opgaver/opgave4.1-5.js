
// 4.1
let par = document.querySelectorAll('p');
let lis = document.querySelectorAll('li');
for (let p of par){
    p.style.color = 'red';
}
for (let li of lis){
    li.style.color = 'red';
}

// 4.2
for (let p of document.querySelectorAll('p:nth-child(odd)')) {
    p.style.color='brown';
}
for (let li of lis){
    li.style.color = 'brown';
}

// 4.3
for (let li of document.querySelectorAll('li:nth-child(odd)')){
    li.style.background = 'lightgray';
}

// 4.4
for (let p of document.querySelectorAll('h1 + p')){
    p.outerHTML = '<h2>' + p.innerHTML + '</h2>';
}

// 4.5
let id = 1;
for (let h1 of document.querySelectorAll('h1')){
    h1.id = 'id' + id++;
}

let f1 = document.querySelector('#id1').innerHTML;
let f2 = document.querySelector('#id2').innerHTML;
let f3 = document.querySelector('#id3').innerHTML;

let table = document.createElement('table');
let row = document.createElement('tr');
let data1 = document.createElement('td');
let data2 = document.createElement('td');
let data3 = document.createElement('td');

row.appendChild(data1);
row.appendChild(data2);
row.appendChild(data3);

data1.outerHTML = "<td> <a href='#id1'>" + f1 + "</a> </td>";
data2.outerHTML = "<td> <a href='#id2'>" + f2 + "</a> </td>";
data3.outerHTML = "<td> <a href='#id3'>" + f3 + "</a> </td>";

table.append(row);

document.body.prepend(table);


