import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import styles from './JobBoard.module.css'
import MOCK_JOB_DATA from '../../MOCK_JOB_DATA.json'
import ReadOnlyRow from './ReadOnlyRow'

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

  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  }

  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const newJob = {
      id: nanoid(),
      jobTitle: addFormData.jobTitle,
      jobLocation: addFormData.jobLocation,
      companyName: addFormData.companyName,
      companyDesc: addFormData.companyDesc,
      appStatus: addFormData.appStatus,
      appDate: addFormData.appDate,
    };
    const newJobs = [...jobs, newJob];
    setJobs(newJobs);

    for (let i = 0; i < jobs.length; i++) {
      console.log(jobs[i])
    }
  }

  return (
    <div className={styles.container}>
      <h1>my job applications</h1>

      <form onSubmit={handleAddFormSubmit}>
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
        <button className={styles.Button} type="submit">Add</button>
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
            <ReadOnlyRow job={job} index={index}/>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default JobBoard
