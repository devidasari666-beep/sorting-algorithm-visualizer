import sleep from "../utils/sleep";

async function insertionSort(array, setArray, speed, setComparisons, setSwaps) {
  const arr = [...array];

  const update = () => {
    setArray([...arr]);
  };

  for (let i = 1; i < arr.length; i++) {
    let key = { ...arr[i] };
    let j = i - 1;

    while (j >= 0 && arr[j].value > key.value) {
      setComparisons(prev => prev + 1);

      arr[j].state = "comparing";
      arr[j + 1].state = "comparing";
      update();
      await sleep(speed);

      arr[j + 1] = { ...arr[j] };
      setSwaps(prev => prev + 1);

      update();
      await sleep(speed);

      arr[j].state = "default";
      arr[j + 1].state = "default";

      j--;
    }

    key.state = "default";
    arr[j + 1] = key;

    update();
    await sleep(speed);
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i].state = "sorted";
  }

  update();
}

export default insertionSort;