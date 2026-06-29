function generateArray(size) {
    const arr = [];

    for (let i = 0; i < size; i++) {
        arr.push({
            value: Math.floor(Math.random() * 400) + 20,
            state: "default"
        });
    }

    return arr;
}

export default generateArray;