import "./Seconds.css"
export default function Seconds(probs) {
    function updateState(e) {
        probs.setInfo((prev) => ({
            cps: 0,
            clicks: 0,
            timer: e.target.value,
            starting: e.target.value
        }));
    }
    return (
        <div className="Seconds">
            <button value="1" onClick={updateState}>1</button>
            <button value="5" onClick={updateState}>5</button>
            <button value="10" onClick={updateState}>10</button>
        </div>
    )
}