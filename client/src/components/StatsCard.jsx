import React from 'react'
import './statscard.css'
import ProgressCircle from './ProgressCircle'
import ProgressBar from './ProgressBar'

const StatsCard = () => {

    const statsObj1 = {
        title: 'Application Statistics',
        circleLabel: 'Applied To',
        circleComplete: '65',
        circleTotal: '100',
        pg1Label: 'Applied To',
        pg1Complete: '100/150',
        pg2Label: 'Interviewing For',
        pg2Percent: '20/100',
        pg3Label: 'Rejected From',
        pg3Percent: '20/100'
    }
    const statsObj2 = {
        title: 'Network Statistics',
        circleLabel: 'Contacted',
        circleComplete: '44',
        circleTotal: '100',
        pg1Label: 'Met With',
        pg1Complete: '50/202',
        pg2Label: 'Scheduling With',
        pg2Percent: '10/202',
        pg3Label: 'Lost Touch With',
        pg3Percent: '2/202'
    }

    const applicationCard = {
        title: 'Application Statistics',
        circleLabel: 'Applied To',
        bar1Label: 'Applied To',
        bar1Color: 'green',
        bar2Label: 'Interviewing For',
        bar2Color: 'yellow',
        bar3Label: 'Rejected From',
        bar3Color: 'red'
    }

    const networkCard = {

    }

    return (
        <div className='statistics-card'>
            <h3>{statsObj1.title}</h3>
            <div className='progress-container pg-circle-div'>
                <ProgressCircle />
            </div>
            <div className='progress-container pg-bar-div'>
                {/* <ProgressBar statistics={statistics} bgColor={'green'} />
                <ProgressBar statistics={statistics} />
                <ProgressBar statistics={statistics} /> */}
            </div>
        </div>
    )
}

export default StatsCard