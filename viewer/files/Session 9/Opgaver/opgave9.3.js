unsorted = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven'];

const compareSort = (compare) => {
    if (typeof compare!== 'function') {
        throw new Error('compare must be a function');
    }
    return (list) => {list.sort((a, b) => compare(a, b));};
}

let test = compareSort('Hello'); // Expected: 'Error: compare must be a function'
test(unsorted);

console.log(unsorted);