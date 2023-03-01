const ProgressBar = ({ statistics }) => {

    const { label, completed, total, bgColor } = statistics;

    const colorPairs = {
        'green': ['rgba(0, 175, 155, 1)', 'rgba(0, 175, 155, 0.4)'],
        'yellow': ['rgba(255, 184, 0, 1)', 'rgba(255, 184, 0, 0.4)'],
        'red': ['rgba(239, 71, 67, 1)', 'rgba(239, 71, 67, 0.4)']
    }

    const mainContainerStyles = {
        marginTop: '10px',
        width: '210px'
    }

    const backDivStyles = {
        margin: '5px 0px',
        height: 3,
        width: '100%',
        backgroundColor: `${colorPairs[bgColor][1]}`,
        borderRadius: 20,
    }

    const frontDivStyles = {
        height: '100%',
        width: `${completed / total * 100}%`,
        backgroundColor: `${colorPairs[bgColor][0]}`,
        borderRadius: 'inherit',
    }

    return (
        <div style={mainContainerStyles}>
            <h3>{label} {completed}/{total}</h3>
            <div style={backDivStyles}>
                <div style={frontDivStyles}></div>
            </div>
        </div>
    )
}

export default ProgressBar