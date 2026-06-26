function generateArray(size) {
    const arr = [];

    for (let i = 0; i < size; i++) {
        arr.push(Math.floor(Math.random() * 400) + 20);
    }

    return arr;
}

export default generateArray;