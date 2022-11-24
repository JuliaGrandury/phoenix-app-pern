import React, { useState, Fragment } from 'react'
import { nanoid } from 'nanoid'
import styles from './JobBoard.module.css'
import MOCK_JOB_DATA from '../../MOCK_JOB_DATA.json'
import ReadOnlyRow from './ReadOnlyRow'
import WriteRow from './WriteRow'

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

  // Consider not using a second hook for this
  const [editFormData, setEditFormData] = useState({
    jobTitle: '',
    jobLocation: '',
    companyName: '',
    companyDesc: '',
    appStatus: '',
    appDate: ''
  });
  const [toEditId, setToEditId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  }

  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    setEditFormData(newFormData);
  }

  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const newJob = {
      jobId: nanoid(),
      jobTitle: addFormData.jobTitle,
      jobLocation: addFormData.jobLocation,
      companyName: addFormData.companyName,
      companyDesc: addFormData.companyDesc,
      appStatus: addFormData.appStatus,
      appDate: addFormData.appDate,
    };
    const newJobs = [...jobs, newJob];
    setJobs(newJobs);

    // for (let i = 0; i < jobs.length; i++) {
    //   console.log(jobs[i])
    // }
  }

  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    const editedJob = {
      jobId: editFormData.jobId,
      jobTitle: editFormData.jobTitle,
      jobLocation: editFormData.jobLocation,
      companyName: editFormData.companyName,
      companyDesc: editFormData.companyDesc,
      appStatus: editFormData.appStatus,
      appDate: editFormData.appDate,
    }
    const newJobs = [...jobs];
    const editedIndex = jobs.findIndex((job) => job.jobId === toEditId);
    newJobs[editedIndex] = editedJob;
    setJobs(newJobs);
    setToEditId(null);
  }

  const handleEditRequest = (event, job) => {
    event.preventDefault();
    setToEditId(job.jobId);
    const currentValues = {
      jobTitle: job.jobTitle,
      jobLocation: job.jobLocation,
      companyName: job.companyName,
      companyDesc: job.companyDesc,
      appStatus: job.appStatus,
      appDate: job.appDate
    }
    setEditFormData(currentValues);
  }

  return (
    <div className={styles.container}>
      <h1>my job applications</h1>

      <div className="data-actions-container">
        <button>Manually add a Job</button>
        <button>Import Data  from CSV File</button>
      </div>

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

      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>ACTIONS</th>
              <th>Title</th>
              <th>Location</th>
              <th>Company</th>
              <th>Description</th>
              <th>Application Status</th>
              <th>Application Date</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <Fragment>
                {toEditId === job.jobId ? (
                  <WriteRow editFormData={editFormData} handleEditFormChange={handleEditFormChange}/>
                ) : (
                  <ReadOnlyRow job={job} handleEditRequest={handleEditRequest} />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  )
}

export default JobBoard
