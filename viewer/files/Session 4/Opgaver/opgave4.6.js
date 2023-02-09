const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
];

for (mount of MOUNTAINS) {
    let row = document.createElement('tr');
    let nameData = document.createElement('td');
    let heightData = document.createElement('td');
    let placeData = document.createElement('td');
    row.appendChild(nameData);
    row.appendChild(heightData);
    row.appendChild(placeData);
    document.querySelector('table').append(row);
    nameData.outerHTML = '<td>' + mount.name + '</td>';
    heightData.outerHTML = '<td>' + mount.height + '</td>';
    placeData.outerHTML = '<td>' + mount.place + '</td>';
}