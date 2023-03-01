const ProgressBar = ({ statistics }) => {

    const { label, completed, total, bgColor } = statistics;

    const colorPairs = {
        'green': ['rgba(92, 219, 149, 1)', 'rgba(92, 219, 149, 0.4)'],
        'yellow': ['rgba(252, 205, 4, 1)', 'rgba(252, 205, 4, 0.4)'],
        'red': ['rgba(232, 90, 79, 1)', 'rgba(232, 90, 79, 0.4)']
    }

    const mainContainerStyles = {
        width: '300px'
    }

    const frontBarStyles = {
        height: '100%',
        width: `${completed / total * 100}%`,
        backgroundColor: `${colorPairs[bgColor][0]}`,
        borderRadius: 'inherit',
    }

    const backBarStyles = {
        margin: '8px 0px 20px',
        height: 6,
        width: '100%',
        backgroundColor: `${colorPairs[bgColor][1]}`,
        borderRadius: 20,
    }

    return (
        <div style={mainContainerStyles}>
            <h5 style={{color: `${colorPairs[bgColor][0]}`}}>{label} {completed}/{total}</h5>
            <div style={backBarStyles}>
                <div style={frontBarStyles}></div>
            </div>
        </div>
    )
}

export default ProgressBar