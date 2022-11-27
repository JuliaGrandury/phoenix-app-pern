import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProgressCircle = ({ label, completed, total }) => {

    //const { label, completed, total } = statObj;
    const completionPercentage = Math.floor(completed / total * 100);

    const mainContainerStyles = {
        padding: '2px 4px',
        marginTop: '10px',
        width: '100px'
    }

    return (
        <div style={mainContainerStyles}>
            <CircularProgressbarWithChildren
                value={completionPercentage}
                strokeWidth={5}
                styles={buildStyles({
                    textColor: "purple",
                    pathColor: "rgba(24, 144, 255, 1)",
                    trailColor: "rgba(24, 144, 255, 0.4)"
                })}>
                <div style={{ textAlign: 'center' }}>
                    <h3>{label}</h3>
                    <h3>{completed}/{total}</h3>
                </div>
            </CircularProgressbarWithChildren>
        </div>
    )
}

export default ProgressCircle