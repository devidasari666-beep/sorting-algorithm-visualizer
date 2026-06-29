import { useState } from "react";

import Navbar from "./components/Navbar";
import Controls from "./components/Controls";
import Visualizer from "./components/Visualizer";

import generateArray from "./utils/generateArray";
import bubbleSort from "./algorithms/bubbleSort";
import selectionSort from "./algorithms/selectionSort";
import insertionSort from "./algorithms/insertionSort";
import mergesort from "./algorithms/mergeSort";
import quicksort from "./algorithms/quickSort";
import AlgorithmInfo from "./components/AlgorithmInfo";

function App() {

    const [arraySize, setArraySize] = useState(30);
    const [speed, setSpeed] = useState(50);
    const [isSorting, setIsSorting] = useState(false);
    const [algorithm, setAlgorithm] = useState("bubble");
    const [array, setArray] = useState(() => generateArray(30));
    const [comparisons, setComparisons] = useState(0);
    const [swaps, setSwaps] = useState(0);

    function handleGenerate() {
        setArray(generateArray(arraySize));
    }

    function handleSize(size) {
        setArraySize(size);
        setArray(generateArray(size));
    }

    async function handleStart() {

        setIsSorting(true);
        setComparisons(0);
        setSwaps(0);

        switch (algorithm) {

            case "bubble":
                await bubbleSort(array, setArray, speed, setComparisons, setSwaps);
                break;

            case "selection":
                await selectionSort(array, setArray, speed, setComparisons, setSwaps);
                break;

            case "insertion":
                await insertionSort(array, setArray, speed, setComparisons, setSwaps);
                break;

            case "merge":
                await mergesort(array, setArray, speed, setComparisons, setSwaps);
                break;

            case "quick":
                await quicksort(array, setArray, speed, setComparisons, setSwaps);
                break;

            default:
                break;
        }

        setIsSorting(false);
    }

    return (
        <>
            <Navbar />

            <Controls
                arraySize={arraySize}
                speed={speed}
                algorithm={algorithm}
                onAlgorithmChange={setAlgorithm}
                onSizeChange={handleSize}
                onSpeedChange={setSpeed}
                onGenerate={handleGenerate}
                onStart={handleStart}
                isSorting={isSorting}
            />

            <Visualizer array={array} />

            <AlgorithmInfo
                algorithm={algorithm}
                comparisons={comparisons}
                swaps={swaps}
            />
        </>
    );
}

export default App;