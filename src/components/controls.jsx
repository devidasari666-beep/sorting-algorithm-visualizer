import "../styles/Controls.css";
import { useState } from "react";
function Controls({
    arraySize,
    speed,
    algorithm,
    onAlgorithmChange,
    onSizeChange,
    onSpeedChange,
    onGenerate,
    onStart,
    isSorting,
}) {
    
    return (
        <div className="controls">

            <div className="control-group">
                <label>Array Size : {arraySize}</label>

                <input
                    type="range"
                    min="10"
                    max="100"
                    value={arraySize}
                    disabled={isSorting}
                    onChange={(e) => onSizeChange(Number(e.target.value))}
                />
            </div>

            <div className="control-group">
                <label>Speed : {speed} ms</label>

                <input
                    type="range"
                    min="10"
                    max="400"
                    value={speed}
                    disabled={isSorting}
                    onChange={(e) => onSpeedChange(Number(e.target.value))}
                />
            </div>

            <div>
                <label>Algorithm</label>
        <select
          value={algorithm}
          onChange={(e) =>  onAlgorithmChange(e.target.value)}
        >
          <option value="bubble">Bubble Sort</option>
          <option value="selection">Selection Sort</option>
          <option value="insertion">Insertion Sort</option>
          <option value="merge">Merge Sort</option>
          <option value="quick">Quick Sort</option>
        </select>
            </div>

            <button
                onClick={onGenerate}
                disabled={isSorting}
            >
                Generate Array
            </button>

            <button
                onClick={onStart}
                disabled={isSorting}
            >
                Start Sorting
            </button>

        </div>
    );
}

export default Controls;