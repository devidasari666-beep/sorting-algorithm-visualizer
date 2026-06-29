import sleep from "../utils/sleep";

async function bubbleSort(
    array,
    setArray,
    speed,
    setComparisons,
    setSwaps
) {
    const arr = [...array];

    const update = () => {
        setArray([...arr]);
    };

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr.length - i - 1; j++) {

            // Comparing
            arr[j].state = "comparing";
            arr[j + 1].state = "comparing";
            update();
            await sleep(speed);

            // Count comparison
            setComparisons(prev => prev + 1);

            if (arr[j].value > arr[j + 1].value) {

                // Swapping animation
                arr[j].state = "swapping";
                arr[j + 1].state = "swapping";
                update();
                await sleep(speed);

                // Swap values
                let temp = arr[j].value;
                arr[j].value = arr[j + 1].value;
                arr[j + 1].value = temp;

                // Count swap
                setSwaps(prev => prev + 1);

                update();
                await sleep(speed);
            }

            // Reset colors
            arr[j].state = "default";
            arr[j + 1].state = "default";
            update();
        }

        // Mark sorted
        arr[arr.length - i - 1].state = "sorted";
        update();
    }
}

export default bubbleSort;