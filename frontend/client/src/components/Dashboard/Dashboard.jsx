import styles from './Dashboard.module.css'

const Dashboard = () => {
  return (
    <div className={styles.PageContainer}>
      <h1>Welcome to your dashboard Julia</h1>
      <div className="top-left">Job Application Statistics</div> 
        {/* BIG STAT IN CIRCLE: JOBS APPLIED TO */}
        {/* <h2>Job Applications</h2> */}
        {/* Applied to .../... */}
        {/* Interviewing with .../... */}
        {/* Rejected from .../.... */}
      <div className="top-right">Networking Statistics</div>
        {/* BIG STAT IN CIRCLE: CONNECTIONS MADE */}
        {/* <h2>Networking Statistics</h2> */}
        {/* Reached out to .../... */}
        {/* Met with .../... */}
        {/*  .../.... */}
        {/* keep track of which ones you thanked */}
      <div className="bottom">Progress Map</div>
      {/* Roadmap of the Week */}
        {/* work on resume */}
        {/* send to  */}
        {/* follow up with ... */}
    </div>
  )
}

export default Dashboard