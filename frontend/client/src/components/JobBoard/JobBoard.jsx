import { useState } from 'react'
import styles from './JobBoard.module.css'
import MOCK_JOB_DATA from '../../MOCK_JOB_DATA.json'

const JobBoard = () => {
  const [jobs, setJobs] = useState(MOCK_JOB_DATA);

  const statusMap = {
    'To Apply' : 'toapply',
    'Applied' : 'applied',
    'Interviewing' : 'interviewing',
    'Ghosted' : 'rejected',
    'Rejected' : 'rejected',
    'Offer' : 'offer' 
  }

  return (
    <>
      <h1>my job applications</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Location</th>
            <th>Company</th>
            <th>Description</th>
            <th>Application Status</th>
            <th>Application Date</th>
          </tr>
        </thead>
        <tbody>
          {jobs.slice(0, 10).map((job, index) => (
            <tr key={index}>
              {job.companyUrl ? <td><a href={job.companyUrl}>{job.jobTitle}</a></td> : <td>{job.jobTitle}</td>}
              <td>{job.jobLocation}</td>
              <td>{job.companyName}</td>
              <td>{job.companyDesc}</td>
              <td className={styles[statusMap[job.appStatus]]}>{job.appStatus}</td>
              <td>{job.appDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default JobBoard
