import { useState } from 'react'
import './jobboard.css'
import MOCK_DATA from '../../MOCK_DATA.json'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { HiOutlineDocumentAdd } from 'react-icons/hi'

const JobsDatabase = () => {
  const [jobs, setJobs] = useState(MOCK_DATA);

  const onAddJob = () => {
    alert('This feature is currently in development');
  }
  const onAddDocument = () => {
    alert('This feature is currently in development');
  }

  return (
    <div className='jobboard-container'>

      <header className='jobboard-header'>
        <h2 className='jobboard-title'>Beekeeper 2023</h2>
        <div className='jobboard-info'>
          <p className='jobboard-results'>100 results</p>
          <i className='jobboard-icons'><IoMdAddCircleOutline onClick={onAddJob} /></i>
          <i className='jobboard-icons'><HiOutlineDocumentAdd onClick={onAddDocument} /></i>
        </div>
      </header>

      <table className='jobboard-table'>
        <thead>
          <tr>
            <th>Role</th>
            <th>Company</th>
            <th>Description</th>
            <th>Location</th>
            <th>Status</th>
            <th>Applied On</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job => (
            <tr key={job.id}>
              <td><a href={job.role_link}>{job.role}</a></td>
              <td>{job.company}</td>
              <td>{job.description}</td>
              <td>{job.city}, {job.state ? `${job.state},` : null} {job.country} ({job.workstyle})</td>
              <td className={job.status === "To Apply" ? 'ToApply' : job.status}>{job.status}</td>
              <td>{job.applied_on}</td>
            </tr>
          )))}
        </tbody>
        <tfoot>
          <tr>{/* put pagination buttons here? */}</tr>
        </tfoot>
      </table>

    </div>
  )
}

export default JobsDatabase