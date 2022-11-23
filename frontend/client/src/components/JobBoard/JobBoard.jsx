import { useState } from 'react'
import styles from './JobBoard.module.css'
import MOCK_JOB_DATA from '../../MOCK_JOB_DATA.json'

const statusMap = {
  'To Apply': 'toapply',
  'Applied': 'applied',
  'Interviewing': 'interviewing',
  'Ghosted': 'rejected',
  'Rejected': 'rejected',
  'Offer': 'offer'
}

const JobBoard = () => {
  const [jobs, setJobs] = useState(MOCK_JOB_DATA);
  const [addFormData, setAddFormData] = useState({
    jobTitle: '',
    jobLocation: '',
    companyName: '',
    companyDesc: '',
    appStatus: '',
    appDate: ''
  });

  const handleAddFormChange = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  }

  return (
    <>
      <h1>my job applications</h1>

      <h2>add a job</h2>
      <form>
        <input
          type='text'
          name='jobTitle'
          required='required'
          placeholder='Job Title'
          onChange={handleAddFormChange} />
        <input
          type='text'
          name='jobLocation'
          required='required'
          placeholder='Job Location'
          onChange={handleAddFormChange} />
        <input
          type='text'
          name='companyName'
          required='required'
          placeholder='Company Name'
          onChange={handleAddFormChange} />
        <input
          type='text'
          name='companyDesc'
          required='required'
          placeholder='Company Description'
          onChange={handleAddFormChange} />
        <input
          type='text'
          name='appStatus'
          required='required'
          placeholder='Application Status'
          onChange={handleAddFormChange} />
        <input
          type='date'
          name='appDate'
          placeholder='Application Date'
          onChange={handleAddFormChange} />
        <button type="submit">Add</button>
      </form>

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
          {jobs.map((job, index) => (
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
