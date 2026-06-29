import sleep from "../utils/sleep";

async function quickSort(array, setArray, speed, setComparisons, setSwaps) {
  const arr = [...array];

  const update = () => {
    setArray([...arr]);
  };

  await quickSortHelper(arr, 0, arr.length - 1, update, speed, setComparisons, setSwaps);

  for (let i = 0; i < arr.length; i++) {
    arr[i].state = "sorted";
  }

  update();
}

async function quickSortHelper(arr, low, high, update, speed, setComparisons, setSwaps) {
  if (low >= high) return;

  const pi = await partition(arr, low, high, update, speed, setComparisons, setSwaps);

  await quickSortHelper(arr, low, pi - 1, update, speed, setComparisons, setSwaps);
  await quickSortHelper(arr, pi + 1, high, update, speed, setComparisons, setSwaps);
}

async function partition(arr, low, high, update, speed, setComparisons, setSwaps) {
  const pivot = arr[high].value;
  arr[high].state = "comparing";

  let i = low - 1;

  for (let j = low; j < high; j++) {
    setComparisons(prev => prev + 1);

    arr[j].state = "comparing";
    update();
    await sleep(speed);

    if (arr[j].value <= pivot) {
      i++;

      arr[i].state = "swapping";
      arr[j].state = "swapping";
      update();
      await sleep(speed);

      let temp = arr[i].value;
      arr[i].value = arr[j].value;
      arr[j].value = temp;
      setSwaps(prev => prev + 1);

      update();
      await sleep(speed);

      arr[i].state = "default";
    }

    arr[j].state = "default";
  }

  arr[i + 1].state = "swapping";
  arr[high].state = "swapping";
  update();
  await sleep(speed);

  let temp = arr[i + 1].value;
  arr[i + 1].value = arr[high].value;
  arr[high].value = temp;
  setSwaps(prev => prev + 1);

  arr[i + 1].state = "default";
  arr[high].state = "default";

  update();
  await sleep(speed);

  return i + 1;
}

export default quickSort;