import styles from './Dashboard.module.css'
import ProgressBar from './ProgressBar'

const StatsCard = ({ statGroup }) => {

    // Creating progress object with fields: label, completed, total, bgColor
    // to pass to ProgressBar component
    function createProgressObj(index) {
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
                <div className={styles.CircleBar}></div>
                <div>
                    {/* Pass in object with label, value, total and bgcolor */}
                    <ProgressBar statObj={createProgressObj(0)} />
                    <ProgressBar statObj={createProgressObj(1)} />
                    <ProgressBar statObj={createProgressObj(2)} />
                </div>
            </div>
        </div>
    )
}

export default StatsCard

