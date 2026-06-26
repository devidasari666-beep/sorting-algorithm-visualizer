import "../styles/Visualizer.css";

function Visualizer({ array }) {
    return (
        <div className="visualizer">
            {array.map((value, index) => (
                <div
                    key={index}
                    className="array-bar"
                    style={{ height: `${value}px` }}
                ></div>
            ))}
        </div>
    );
}



export default Visualizer;