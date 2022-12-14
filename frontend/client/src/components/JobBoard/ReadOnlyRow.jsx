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
            <td className={styles.rowActions}>
                <button type="button" onClick={(e) => handleEditRequest(e, job)}><img src="https://img.icons8.com/small/16/null/pencil.png"/></button>
                <button type="button" onClick={() => handleDeleteRequest(job.jobId)}><img src="https://img.icons8.com/small/16/null/delete.png"/></button>
            </td>
            {job.company_link ? <td><a href={job.company_link} target="_blank">{job.role}</a></td> : <td>{job.role}</td>}
            <td>{job.city}</td>
            {job.company_link ? <td><a href={job.company_link} target="_blank">{job.company}</a></td> : <td>{job.company}</td>}
            <td>{job.description}</td>
            <td>No Connections</td>
            <td className={styles[statusMap[job.status]]}>{job.status}</td>
            <td>{job.applied_on}</td>
        </tr>
    )
}

export default ReadOnlyRow