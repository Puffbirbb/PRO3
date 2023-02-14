let tilføjButton = document.querySelector("button");
let personer = [];
let tilføjTabel = function(){
    let navn = document.getElementById("navn").value;
    let alder = document.getElementById("alder").value;
    let person = {name: navn, age: alder};
    personer.push(person);
    document.getElementById("Personer").innerHTML = "";
    let table = document.createElement('table');
    document.getElementById("Personer").append(table);
    let tHeadNavn = document.createElement('th');
    let tHeadAlder = document.createElement('th');
    let hRow = document.createElement('tr');
    hRow.append(tHeadNavn);
    hRow.append(tHeadAlder);
    tHeadNavn.outerHTML = '<th>Navn</th>';
    tHeadAlder.outerHTML = '<th>Alder</th>';
    table.append(hRow);
    for (p of personer){
        let row = document.createElement('tr');
        let navnData = document.createElement('td');
        let alderData = document.createElement('td');
        row.appendChild(navnData);
        row.appendChild(alderData);
        table.append(row);
        navnData.outerHTML = '<td>' + p.name + '</td>';
        alderData.outerHTML = '<td>' + p.age + '</td>';
    }
} 

tilføjButton.onclick = () => tilføjTabel();