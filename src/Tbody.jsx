import "./Tbody.css"

function Tbody(props) {
    function updateValue() {
        props.setInfo(prev => {
            if (prev.timer == 0) {
                return {
                    ...prev
                }
            }
            
            return {
                ...prev,
                clicks: prev.clicks + 1,
                isStarting:true
            }
        })
    }

    return (
        <div className="Tbody">
            <div className="board" onClick={updateValue}></div>
        </div>
    )
}

export default Tbody