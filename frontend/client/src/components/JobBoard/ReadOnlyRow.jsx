import React from 'react'
import styles from './JobBoard.module.css'

const statusMap = {
    'To Apply': 'toapply',
    'Applied': 'applied',
    'Interviewing': 'interviewing',
    'Ghosted': 'ghosted',
    'Rejected': 'rejected',
    'Offer': 'offer'
}

const ReadOnlyRow = ({ job, handleEditRequest, handleDeleteRequest }) => {
    return (
        <tr>
            <td>
                <button type="button" onClick={(e) => handleEditRequest(e, job)}><img src="https://img.icons8.com/small/16/null/pencil.png"/></button>
                <button type="button" onClick={() => handleDeleteRequest(job.jobId)}><img src="https://img.icons8.com/small/16/null/delete.png"/></button>
            </td>
            {job.companyUrl ? <td><a href={job.companyUrl} target="_blank">{job.jobTitle}</a></td> : <td>{job.jobTitle}</td>}
            <td>{job.jobLocation}</td>
            {job.companyUrl ? <td><a href={job.companyUrl} target="_blank">{job.companyName}</a></td> : <td>{job.companyName}</td>}
            <td>{job.companyDesc}</td>
            <td className={styles[statusMap[job.appStatus]]}>{job.appStatus}</td>
            <td>{job.appDate}</td>
        </tr>
    )
}

export default ReadOnlyRow