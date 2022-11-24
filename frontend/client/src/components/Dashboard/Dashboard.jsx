import styles from './Dashboard.module.css'

const Dashboard = () => {
  return (
    <div className={styles.PageContainer}>
      <h1>Welcome to your dashboard Julia</h1>
      <div className="top-left">Job Application Statistics</div>
      <div className="top-right">Networking Statistics</div>
      <div className="bottom">Progress Map</div>
    </div>
  )
}

export default Dashboard