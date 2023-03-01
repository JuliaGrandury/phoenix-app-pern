import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

const ProgressCircle = ({statistics}) => {

    const {label, completed, total} = statistics;
    const completionPercentage = Math.floor(completed / total * 100);

    const mainContainerStyles = {
        padding: '12px 12px',
        width: '150px'
    }

    return (
        <div style={mainContainerStyles}>
            {/* changed trail Color from rgba(24, 144, 255, 0.4) to white for the dark theme */}
            <CircularProgressbarWithChildren
                value={completionPercentage}
                strokeWidth={7}
                styles={buildStyles({
                    pathColor: "rgba(88, 153, 250, 1)",
                    trailColor: "rgba(24, 144, 255, 0.4)",
                })}>
                <div style={{ textAlign: 'center', color: 'var(--primary-blue)', fontSize: '9px', fontWeight: '100px' }}>
                    <h3>{label}</h3>
                    <h3>{completionPercentage}%</h3>
                </div>
            </CircularProgressbarWithChildren>
        </div>
    )
}

export default ProgressCircle