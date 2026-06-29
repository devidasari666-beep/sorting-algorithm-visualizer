import sleep from "../utils/sleep";

async function mergeSort(array, setArray, speed, setComparisons, setSwaps) {
  const arr = [...array];

  const update = () => {
    setArray([...arr]);
  };

  await mergeSortHelper(arr, 0, arr.length - 1, speed, update, setComparisons, setSwaps);

  for (let i = 0; i < arr.length; i++) {
    arr[i].state = "sorted";
  }

  update();
}

async function mergeSortHelper(arr, left, right, speed, update, setComparisons, setSwaps) {
  if (left >= right) return;

  const mid = Math.floor((left + right) / 2);

  await mergeSortHelper(arr, left, mid, speed, update, setComparisons, setSwaps);
  await mergeSortHelper(arr, mid + 1, right, speed, update, setComparisons, setSwaps);
  await merge(arr, left, mid, right, speed, update, setComparisons, setSwaps);
}

async function merge(arr, left, mid, right, speed, update, setComparisons, setSwaps) {
  const leftArr = arr.slice(left, mid + 1).map(bar => ({ ...bar }));
  const rightArr = arr.slice(mid + 1, right + 1).map(bar => ({ ...bar }));

  let i = 0;
  let j = 0;
  let k = left;

  while (i < leftArr.length && j < rightArr.length) {
    setComparisons(prev => prev + 1);

    arr[k].state = "comparing";
    update();
    await sleep(speed);

    if (leftArr[i].value <= rightArr[j].value) {
      arr[k] = { ...leftArr[i] };
      i++;
    } else {
      arr[k] = { ...rightArr[j] };
      j++;
    }

    arr[k].state = "swapping";
    setSwaps(prev => prev + 1);
    update();
    await sleep(speed);

    arr[k].state = "default";
    k++;
  }

  while (i < leftArr.length) {
    arr[k] = { ...leftArr[i] };
    arr[k].state = "swapping";
    setSwaps(prev => prev + 1);

    update();
    await sleep(speed);

    arr[k].state = "default";
    i++;
    k++;
  }

  while (j < rightArr.length) {
    arr[k] = { ...rightArr[j] };
    arr[k].state = "swapping";
    setSwaps(prev => prev + 1);

    update();
    await sleep(speed);

    arr[k].state = "default";
    j++;
    k++;
  }

  update();
}

export default mergeSort;