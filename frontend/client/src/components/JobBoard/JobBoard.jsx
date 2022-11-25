import React, { useState, Fragment } from 'react'
import { nanoid } from 'nanoid'
import styles from './JobBoard.module.css'
import MOCK_JOB_DATA from '../../MOCK_JOB_DATA.json'
import ReadOnlyRow from './ReadOnlyRow'
import WriteRow from './WriteRow'

const JobBoard = () => {
  const [jobs, setJobs] = useState(MOCK_JOB_DATA);
  const [displayForm, setDisplayForm] = useState(false);
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

  const handleDeleteRequest = (toDeleteId) => {
    const newJobs = [...jobs];
    const deleteIndex = jobs.findIndex((job) => job.jobId === toDeleteId);
    newJobs.splice(deleteIndex, 1);
    setJobs(newJobs);
  }

  return (
    <div className={styles.PageContainer}>
      <div className={styles.JobSearchDetails}>
        <div className={styles.topLeft}><h1>My Job Applications</h1></div>
        <div className={styles.topRight}>
          <h2>Started 3 months ago on Aug 9, 2022</h2>
          <h2>for Full Stack Software Engineer role</h2>
        </div>
      </div>

      <div className={styles.DataActionsContainer}>
        <button className={styles.addDataButton} onClick={(e) => setDisplayForm(displayForm ? false : true)}>Manually add a Job</button>
        <button className={styles.addDataButton} onClick={(e) => alert("ERROR: This feature is not available at the moment, please add job data manually.")}>Import Data  from CSV File</button>
      </div>

      <form className={styles.addDataForm} onSubmit={handleAddFormSubmit} style={displayForm ? { display: "flex" } : { display: "none" }}>
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
        {/* <select name='appStatus' required='required'onChange={handleAddFormChange}>
          <option value="" disabled selected hidden>App Status</option>
          <option value="To Apply">To Apply</option>
          <option value="Applied">Applied</option>
          <option value="Interviewing">Interviewing</option>
          <option value="Ghosted">Ghosted</option>
          <option value="Rejected">Rejected</option>
          <option value="Offer">Offer</option>
        </select> */}
        <input
          type='date'
          name='appDate'
          placeholder='Application Date'
          onChange={handleAddFormChange} />
        <button className={styles.addDataButton} type="submit">Add</button>
      </form>

      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr className={styles.HeaderRow}>
              <th>ACTIONS</th>
              <th>Title</th>
              <th>Location</th>
              <th>Company</th>
              <th>Description</th>
              <th>Status</th>
              <th>App Date</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <Fragment>
                {toEditId === job.jobId ? (
                  <WriteRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange} />
                ) : (
                  <ReadOnlyRow
                    job={job}
                    handleEditRequest={handleEditRequest}
                    handleDeleteRequest={handleDeleteRequest} />
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
