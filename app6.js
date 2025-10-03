function occupied(y, t) {
    let occupied = 0;
    for (let i = 0; i < y.length; i++) {
        if (y[i] === t) {
            occupied++ ;
        }
    }
    return occupied;
}
console.log(occupied([1, 2, 3, 4, 5, 1, 2, 3], 3));