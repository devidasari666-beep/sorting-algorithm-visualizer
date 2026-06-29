import "../styles/Visualizer.css";

function Visualizer({ array }) {
    return (
        <div className="visualizer">
            {array.map((item, index) => (
                <div
                    key={index}
                    className={`array-bar ${item.state}`}
                    style={{ height: `${item.value}px` }}
                />
            ))}
        </div>
    );
}

export default Visualizer;