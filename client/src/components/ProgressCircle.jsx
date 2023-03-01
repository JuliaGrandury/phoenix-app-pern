import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

const ProgressCircle = () => {

    const statObj = {
        label: 'Applied To',
        completed: '150',
        total: '300'
    }
    const {label, completed, total} = statObj;
    const completionPercentage = Math.floor(completed / total * 100);

    const mainContainerStyles = {
        padding: '8px 8px',
        marginTop: '10px',
        width: '120px'
    }

    return (
        <div style={mainContainerStyles}>
            {/* changed trail Color from rgba(24, 144, 255, 0.4) to white */}
            <CircularProgressbarWithChildren
                value={completionPercentage}
                strokeWidth={7}
                styles={buildStyles({
                    pathColor: "rgba(88, 153, 250, 1)",
                    trailColor: "rgba(255, 255, 255, 0.9)",
                })}>
                <div style={{ textAlign: 'center', color: 'var(--primary-blue)', fontSize: '9px', fontWeight: '100px' }}>
                    <h3>{label}</h3>
                    <h3>{completed}/{total}</h3>
                </div>
            </CircularProgressbarWithChildren>
        </div>
    )
}

export default ProgressCircle