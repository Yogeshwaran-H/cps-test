import "./Theader.css"

export default function Theader(props){
    // console.log(props.info);
    
    return(
        <div className="Theader">
            <div className="timer">Timer:{props.info.timer}</div>
            <div className="cps">Click per Sec:{props.info.cps}/s</div>
            <div className="clicks">Total Clicks:{props.info.clicks}</div>
        </div>
    )
}