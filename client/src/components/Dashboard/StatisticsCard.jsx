import ProgressCircle from "../ProgressCircle"

const StatisticsCard = () => {


    return (
        <div>
            <h3>Application Statistics</h3>
            <div className='statistics-pg-circle'>
                <ProgressCircle />
            </div>

            <div className='statistics-pg-bars'>
                progress bars here
            </div>

        </div>
    )
}

export default StatisticsCard