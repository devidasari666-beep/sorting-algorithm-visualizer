import "../styles/Controls.css";

function Controls({
    onGenerate,
    arraySize,
    onSizeChange,
}) {
  return (
    <div className="controls">

      <div className="control-group">
        <label>Algorithm</label>
        <select>
          <option>Bubble Sort</option>
          <option>Selection Sort</option>
        </select>
      </div>

      <div className="control-group">
        <label>Array Size: {arraySize}</label>
       <input
    type="range"
    min="10"
    max="100"
    value={arraySize}
    onChange={(e) => onSizeChange(Number(e.target.value))}
/>
      </div>

      <div className="control-group">
        <label>Speed</label>
        <input
          type="range"
          min="1"
          max="100"
          defaultValue="50"
        />
      </div>

      <button onClick={onGenerate}>
    Generate Array
</button>

      <button>Start Sorting</button>

    </div>
  );
}

export default Controls;