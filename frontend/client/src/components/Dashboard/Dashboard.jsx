import styles from './Dashboard.module.css'
import StatsCard from './StatsCard'
import DetailedCard from './DetailedCard'

const Dashboard = () => {

  // barValues, circleValue and total will be calculated from DB queries
  const statisticGroups = [{
    title: "Job Application Statistics",
    barLabels: ["Offer From", "Interviewing With", "Rejected From"],
    barValues: [5, 30, 55],
    barColors: ['green', 'yellow', 'red'],
    circleLabel : "Applied To",
    circleValue: 83,
    total: 90,
  }, {
    title: "Network Statistics",
    barLabels: ["Met With", "Scheduling With", "Lost Touch With"],
    barValues: [45, 2, 3],
    barColors: ['green', 'yellow', 'red'],
    circleLabel : "Contacted",
    circleValue: 50,
    total: 100,
  }]

  return (
    <div className={styles.PageContainer}>
      <h1>Welcome to your dashboard Julia</h1>

      <div className={styles.GridContainer}>
        <div className={styles.StatsContainer}>
          {statisticGroups.map((statGroup) => <StatsCard statGroup={statGroup} />)}
        </div>
        
        {/* <DetailedCard /> */}
      </div>

      {/* Roadmap of the Week */}
      {/* work on resume */}
      {/* send to  */}
      {/* follow up with ... */}
    </div>
  )
}

export default Dashboard