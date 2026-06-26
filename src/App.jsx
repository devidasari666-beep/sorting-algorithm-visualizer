import { useState } from "react";

import Navbar from "./components/Navbar";
import Controls from "./components/Controls";
import Visualizer from "./components/Visualizer";

import generateArray from "./utils/generateArray";

function App() {

  const [arraySize, setArraySize] = useState(30);
const [array, setArray] = useState(generateArray(arraySize));

  function handleGenerateArray() {
    setArray(generateArray(arraySize));
}
function handleSizeChange(size) {
    setArraySize(size);
    setArray(generateArray(size));
}
  return (
    <>
      <Navbar />

      <Controls
    onGenerate={handleGenerateArray}
    arraySize={arraySize}
    onSizeChange={handleSizeChange}
/>

      <Visualizer
        array={array}
      />
    </>
  );
}

export default App;