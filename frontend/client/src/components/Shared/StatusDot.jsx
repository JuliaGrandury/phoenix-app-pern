import { useState } from "react";

const StatusDot = ({ statusInfo }) => {
    const [cardOpen, setCardOpen] = useState(false);

    const { label, date } = statusInfo;

    const colorPairs = {
        'active': 'rgba(0, 175, 155, 0.6)',
        'sporadic': 'rgba(255, 184, 0, 0.6)',
        'inactive': 'rgba(239, 71, 67, 0.6)',
    }

    const circleDiv = {
        margin: '5px 5px',
        height: 8,
        width: 8,
        borderRadius: 8,
        backgroundColor: `${colorPairs[label]}`,
    }

    // const infoDiv = {
    //     height: 5,
    //     width: 10,
    //     backgroundColor: 'rgba(239, 71, 67, 0.4)',
    //     color: #000000A6,
    //     display: 'none',
    // }

    const onMouseOver = () => {
        alert("hey");
    }

    return (
        <div>
            {!cardOpen ? (
                <>
                    <div style={circleDiv} onMouseOver={onMouseOver}></div>
                </>
            ) : (
                <div style={circleDiv}></div>
            )}
        </div>
    )
}

export default StatusDot