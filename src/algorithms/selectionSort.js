import sleep from "../utils/sleep";

async function selectionSort(array, setArray, speed, setComparisons, setSwaps) {
  const arr = [...array];

  const update = () => {
    setArray([...arr]);
  };

  for (let i = 0; i < arr.length; i++) {
    let min_idx = i;

    for (let j = i + 1; j < arr.length; j++) {
      setComparisons(prev => prev + 1);

      arr[min_idx].state = "comparing";
      arr[j].state = "comparing";
      update();
      await sleep(speed);

      if (arr[j].value < arr[min_idx].value) {
        arr[min_idx].state = "default";
        min_idx = j;
      } else {
        arr[j].state = "default";
      }
    }

    if (min_idx !== i) {
      arr[i].state = "swapping";
      arr[min_idx].state = "swapping";
      update();
      await sleep(speed);

      let temp = arr[i].value;
      arr[i].value = arr[min_idx].value;
      arr[min_idx].value = temp;
      setSwaps(prev => prev + 1);
    }

    arr[i].state = "sorted";
    if (min_idx !== i) arr[min_idx].state = "default";
    update();
  }
}

export default selectionSort;