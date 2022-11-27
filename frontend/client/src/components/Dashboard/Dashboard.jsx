import styles from './Dashboard.module.css'
import StatsCard from './StatsCard'
import DetailedCard from './DetailedCard'

const Dashboard = () => {

  // Titles are Job Application Statistics and Connection/Networking Statistics
  const statistics = [{
    title: "Job Application Statistics",
    categories: ["Offer From", "Interviewing With", "Rejected From"]
  }, {
    title: "Network Statistics",
    categories: ["Reached Out To", "Met With", "To Reach Out To"]
  }]

  return (
    <div className={styles.PageContainer}>
      <h1>Welcome to your dashboard Julia</h1>

      <div className={styles.GridContainer}>
        <div className={styles.StatsContainer}>
          {statistics.map((stat) => <StatsCard stat={stat} />)}
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