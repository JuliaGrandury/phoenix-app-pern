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
    role: '',
    role_link: '',
    city: '',
    state: '',
    country: '',
    company: '',
    company_link: '',
    description: '',
    connections: '',
    status: '',
    applied_on: '',
    created_at: ''
  });

  // Consider not using a second hook for this
  const [editFormData, setEditFormData] = useState({
    role: '',
    role_link: '',
    city: '',
    state: '',
    country: '',
    company: '',
    company_link: '',
    description: '',
    connections: '',
    status: '',
    applied_on: '',
    created_at: ''
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
      id: nanoid(),
      role: addFormData.role,
      role_link: addFormData.role_link,
      city: addFormData.city,
      state: addFormData.state,
      country: addFormData.country,
      company: addFormData.company,
      company_link: addFormData.company_link,
      description: addFormData.description,
      status: addFormData.status,
      applied_on: addFormData.applied_on,
      created_at: addFormData.created_at  
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
      id: editFormData.id,
      role: editFormData.role,
      role_link: editFormData.role_link,
      city: editFormData.city,
      state: editFormData.state,
      country: editFormData.country,
      company: editFormData.company,
      company_link: editFormData.company_link,
      description: editFormData.description,
      status: editFormData.status,
      applied_on: editFormData.applied_on,
      created_at: editFormData.created_at 
    }
    const newJobs = [...jobs];
    const editedIndex = jobs.findIndex((job) => job.id === toEditId);
    newJobs[editedIndex] = editedJob;
    setJobs(newJobs);
    setToEditId(null);
  }

  const handleEditRequest = (event, job) => {
    event.preventDefault();
    setToEditId(job.id);
    const currentValues = {
      role: job.role,
      city: job.city,
      company: job.company,
      description: job.description,
      status: job.status,
      applied_on: job.applied_on
    }
    setEditFormData(currentValues);
  }

  const handleDeleteRequest = (toDeleteId) => {
    const newJobs = [...jobs];
    const deleteIndex = jobs.findIndex((job) => job.id === toDeleteId);
    newJobs.splice(deleteIndex, 1);
    setJobs(newJobs);
  }

  return (
    <div className={styles.PageContainer}>
      <div className={styles.JobSearchDetails}>
        <div className={styles.topLeft}><h1>My Job Applications</h1></div>
        <div className={styles.topRight}>
          <h2>Started <span style={{ "text-decoration": "underline" }}>3 months ago</span> on Aug 9, 2022</h2>
          <h2>for <span style={{ "text-decoration": "underline" }}>Full Stack Software Engineer</span> role</h2>
        </div>
      </div>

      <div className={styles.DataActionsContainer}>
        <button className={styles.addDataButton} onClick={(e) => setDisplayForm(displayForm ? false : true)}>Manually add a Job</button>
        <button className={styles.addDataButton} onClick={(e) => alert("ERROR: This feature is not available at the moment, please add job data manually.")}>Import Data  from CSV File</button>
      </div>

      <form className={styles.addDataForm} onSubmit={handleAddFormSubmit} style={displayForm ? { display: "flex" } : { display: "none" }}>
        <input
          type='text'
          name='role'
          required='required'
          placeholder='Job Title'
          onChange={handleAddFormChange} />
        <input
          type='text'
          name='city'
          required='required'
          placeholder='Job Location'
          onChange={handleAddFormChange} />
        <input
          type='text'
          name='company'
          required='required'
          placeholder='Company Name'
          onChange={handleAddFormChange} />
        <input
          type='text'
          name='description'
          required='required'
          placeholder='Company Description'
          onChange={handleAddFormChange} />
        <input
          type='text'
          name='status'
          required='required'
          placeholder='Application Status'
          onChange={handleAddFormChange} />
        {/* <select name='status' required='required'onChange={handleAddFormChange}>
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
          name='applied_on'
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
                {toEditId === job.id ? (
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
