unsorted1 = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven'];
unsorted2 = ['Seven', 'Six', 'Five', 'Four', 'Three', 'Two', 'One'];

function compareSort(compare){
    return (list) => {list.sort((a, b) => compare(a, b));};
}

function lenSort(a, b){
    return a.length - b.length;
}

function ignoreCaseSort(a, b){
    return a.toLowerCase().localeCompare(b.toLowerCase());
}

let test = compareSort(lenSort);
test(unsorted1);

let test2 = compareSort(ignoreCaseSort);
test2(unsorted2);

console.log(unsorted1);

console.log(unsorted2);