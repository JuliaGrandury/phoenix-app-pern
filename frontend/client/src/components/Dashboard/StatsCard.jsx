import styles from './Dashboard.module.css'
import ProgressBar from './ProgressBar'

const StatsCard = ({ stat }) => {
    
    const statObj = {
        label : 'Offer From',
        completed: 2,
        total: 200,
        bgColor: 'green'
    }

    const statObj2 = {
        label : 'Interviewing With',
        completed: 30,
        total: 200,
        bgColor: 'yellow'
    }

    const statObj3 = {
        label : 'Rejected From',
        completed: 3,
        total: 200,
        bgColor: 'red'
    }

    return (
        <div className={styles.StatsCard}>
            <h2>{stat.title}</h2>
            <div className={styles.WidgetContainer}>
                <div className={styles.CircleBar}></div>
                <div className={styles.LineBars}>

                     {/* Example Progress Bar */}
                        {/* Pass in Label, value, total and bgcolor */}
                        <ProgressBar statObj={statObj}/>
                        <ProgressBar statObj={statObj2}/>
                        <ProgressBar statObj={statObj3}/>

                    {/* <div className={styles.LineBar}>
                        <h3>{stat.categories[0]} 42/100</h3>
                        <div className={styles.GreenBar}></div>
                    </div> */}
                    {/* <div className={styles.LineBar}>
                        <h3>{stat.categories[1]}</h3>
                        <div className={styles.YellowBar}></div>
                    </div> */}
                    {/* <div className={styles.LineBar}>
                        <h3>{stat.categories[2]}</h3>
                        <div className={styles.RedBar}></div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default StatsCard
