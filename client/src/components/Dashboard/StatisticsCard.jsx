import ProgressBar from "./ProgressBar"
import ProgressCircle from "./ProgressCircle"

const StatisticsCard = ({ type }) => {

    return (
        <div>
            {type === 'applicationStatistics' ?
                <div className="statistics-card">
                    <h3>Application Statistics</h3>
                    <div className="statistics-graphics">
                        <div className='statistics-pg-circle'>
                            <ProgressCircle statistics={{ label: 'Applied To', completed: 67, total: 100 }} />
                        </div>
                        <div className='statistics-pg-bars'>
                            <ProgressBar statistics={{ label: 'Applied To', completed: 67, total: 100, bgColor: 'green' }} />
                            <ProgressBar statistics={{ label: 'Interviewing For', completed: 45, total: 100, bgColor: 'yellow' }} />
                            <ProgressBar statistics={{ label: 'Rejected From', completed: 5, total: 100, bgColor: 'red' }} />
                        </div>
                    </div>
                </div> : <div className="statistics-card">
                    <h3>Network Statistics</h3>
                    <div className="statistics-graphics">
                        <div className='statistics-pg-circle'>
                            <ProgressCircle statistics={{ label: 'Contacted', completed: 84, total: 100 }} />
                        </div>
                        <div className='statistics-pg-bars'>
                            <ProgressBar statistics={{ label: 'Met With', completed: 50, total: 202, bgColor: 'green' }} />
                            <ProgressBar statistics={{ label: 'Scheduling With', completed: 10, total: 202, bgColor: 'yellow' }} />
                            <ProgressBar statistics={{ label: 'Lost Touch With', completed: 2, total: 202, bgColor: 'red' }} />
                        </div>
                    </div>
                </div>}
        </div>
    )
}

export default StatisticsCard