import React from 'react'
import styles from './JobBoard.module.css'

const statusMap = {
    'To Apply': 'toapply',
    'Applied': 'applied',
    'Interviewing': 'interviewing',
    'Ghosted': 'rejected',
    'Rejected': 'rejected',
    'Offer': 'offer'
  }

const ReadOnlyRow = ({ job }, {index}) => {
    return (
        <tr key={index}>
            {job.companyUrl ? <td><a href={job.companyUrl}>{job.jobTitle}</a></td> : <td>{job.jobTitle}</td>}
            <td>{job.jobLocation}</td>
            <td>{job.companyName}</td>
            <td>{job.companyDesc}</td>
            <td className={styles[statusMap[job.appStatus]]}>{job.appStatus}</td>
            <td>{job.appDate}</td>
        </tr>
    )
}

export default ReadOnlyRow