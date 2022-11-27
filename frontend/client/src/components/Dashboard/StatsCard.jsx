import styles from './Dashboard.module.css'
import ProgressBar from './ProgressBar'
import ProgressCircle from './ProgressCircle'

const StatsCard = ({ statGroup }) => {

    // Creating progress object with fields: label, completed, total, bgColor
    // to pass to ProgressBar component
    function createProgressBar(index) {
        const progressObj = {
            label: `${statGroup.barLabels[index]}`,
            completed: `${statGroup.barValues[index]}`,
            total: `${statGroup.total}`,
            bgColor: `${statGroup.barColors[index]}`
        }
        return progressObj;
    }

    return (
        <div className={styles.StatsCard}>
            <h2>{statGroup.title}</h2>
            <div className={styles.WidgetContainer}>
                <div className={styles.CircleBar}>
                    <ProgressCircle
                        label={statGroup.circleLabel}
                        completed={statGroup.circleValue}
                        total={statGroup.total} />
                </div>
                <div>
                    {/* Pass in object with label, value, total and bgcolor */}
                    <ProgressBar statObj={createProgressBar(0)} />
                    <ProgressBar statObj={createProgressBar(1)} />
                    <ProgressBar statObj={createProgressBar(2)} />
                </div>
            </div>
        </div>
    )
}

export default StatsCard

