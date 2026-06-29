import "../styles/AlgorithmInfo.css";
import algorithmDetails from "../data/algorithmDetails";

function AlgorithmInfo({ algorithm, comparisons, swaps }) {
  const info = algorithmDetails[algorithm];

  if (!info) return null;

  return (
    <div className="algorithm-info">
      <h2>{info.name}</h2>

      {info.showCounters && (
        <>
          <p><strong>Comparisons :</strong> {comparisons}</p>
          <p><strong>Swaps :</strong> {swaps}</p>
        </>
      )}

      <p><strong>Best Time :</strong> {info.best}</p>
      <p><strong>Average Time :</strong> {info.average}</p>
      <p><strong>Worst Time :</strong> {info.worst}</p>
      <p><strong>Space Complexity :</strong> {info.space}</p>
      <p><strong>Stable :</strong> {info.stable}</p>
      <p><strong>In-place :</strong> {info.inplace}</p>
    </div>
  );
}

export default AlgorithmInfo;