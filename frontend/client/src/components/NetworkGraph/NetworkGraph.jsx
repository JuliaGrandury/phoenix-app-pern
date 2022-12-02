import ConnectionCard from './ConnectionCard'
import StatusDot from '../Shared/StatusDot'
import styles from './NetworkGraph.module.css'


// DELETE LATER
const statusInfoMisty = {
  label: 'active',
  date: '03/09/1993',
}

const NetworkGraph = () => {

  return (
    <div className={styles.PageContainer}>
      <h1>Your Network Graph</h1>
      <ConnectionCard />
      <div>
      </div>

    </div>
  )
}

export default NetworkGraph