import React, { useState, Fragment, useEffect } from 'react'
import { nanoid } from 'nanoid'
import styles from './JobBoard.module.css'
//import MOCK_DATA from '../../MOCK_DATA.json'
import MOCK_DATA_2 from '../../MOCK_DATA_2.json'
import AddJobForm from './AddJobForm'
// import ReadOnlyRow from './ReadOnlyRow'
// import WriteRow from './WriteRow'

const JobBoard = () => {
  const [jobs, setJobs] = useState(MOCK_DATA_2);
  const [jobAddition, setJobAddition] = useState({
    role: '',
    company: '',
    status: '',
    applied_on: '',
  });

  //TRYING TO GET API DATA
  const [apiData, setApiData] = useState('No Data From the Api');
  //setApiData(getAllJobs());


  // Update state hooks as user types into form
  const handleAddJobFormChange = (event) => {
    event.preventDefault();
    const field = event.target.getAttribute("name");
    const value = event.target.value;
    const newFormData = { ...jobAddition };
    newFormData[field] = value;
    setJobAddition(newFormData);
  }

  // Update table data when user submits form
  const handleAddJobFormSubmit = (event) => {
    event.preventDefault();
    const newJob = {
      id: nanoid(),
      role: jobAddition.role,
      company: jobAddition.company,
      status: jobAddition.status,
      applied_on: new Date().toLocaleDateString('en-US'),
      //created_at: new Date().toLocaleDateString('en-US'),
    };
    console.log(newJob);
    const newJobs = [...jobs, newJob];
    setJobs(newJobs);
  }

  return (
    <div className={styles.PageContainer}>
      <div>{apiData}</div>
      <table>
        <thead>
          <tr>
            <th>Role</th>
            <th>Company</th>
            <th>Status</th>
            <th>Applied On</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.id}>
              <td>{job.role}</td>
              <td>{job.company}</td>
              <td>{job.status}</td>
              <td>{job.applied_on}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <form className={styles.addDataForm} onSubmit={handleAddJobFormSubmit}>
        <input type='text' name='role' placeholder='Role...' onChange={handleAddJobFormChange} />
        <input type='text' name='company' placeholder='Company...' onChange={handleAddJobFormChange} />
        <input type='text' name='status' placeholder='Status...' onChange={handleAddJobFormChange} />
        {/* <input type='text' name='applied_on' placeholder='Applied On...' onChange={handleAddJobFormChange} /> */}
        <button type='submit'>Add</button>
      </form>

      {/* <AddJobForm alljobs={jobs}/> */}

    </div>
  )
}

export default JobBoard







// const JobBoard = () => {
//   const [jobs, setJobs] = useState(MOCK_DATA);
//   const [displayAddJobForm, setDisplayAddJobForm] = useState(false);

//   const [formData, setFormData] = useState({
//     role: '',
//     role_link: '',
//     city: '',
//     state: '',
//     country: '',
//     company: '',
//     company_link: '',
//     description: '',
//     connections: '',
//     status: '',
//     applied_on: null,
//     created_at: ''
//   });
//   const [toEditId, setToEditId] = useState(null);

//   const handleAddFormChange = (event) => {
//     event.preventDefault();
//     const fieldName = event.target.getAttribute("name");
//     const fieldValue = event.target.value;
//     const newFormData = { ...formData };
//     newFormData[fieldName] = fieldValue;
//     setFormData(newFormData);
//   }

//   const handleEditFormChange = (event) => {
//     event.preventDefault();
//     const fieldName = event.target.getAttribute("name");
//     const fieldValue = event.target.value;
//     const newFormData = { ...formData };
//     newFormData[fieldName] = fieldValue;
//     setFormData(newFormData);
//   }

//   const handleAddFormSubmit = (event) => {
//     event.preventDefault();
//     const newJob = {
//       id: nanoid(),
//       role: formData.role,
//       role_link: formData.role_link,
//       city: formData.city,
//       state: formData.state,
//       country: formData.country,
//       company: formData.company,
//       company_link: formData.company_link,
//       description: formData.description,
//       status: formData.status,
//       applied_on: formData.applied_on,
//       created_at: formData.created_at
//     };
//     const newJobs = [...jobs, newJob];
//     setJobs(newJobs);

//     // for (let i = 0; i < jobs.length; i++) {
//     //   console.log(jobs[i])
//     // }
//   }

//   const handleEditFormSubmit = (event) => {
//     event.preventDefault();
//     const editedJob = {
//       id: formData.id,
//       role: formData.role,
//       role_link: formData.role_link,
//       city: formData.city,
//       state: formData.state,
//       country: formData.country,
//       company: formData.company,
//       company_link: formData.company_link,
//       description: formData.description,
//       status: formData.status,
//       applied_on: formData.applied_on,
//       created_at: formData.created_at
//     }
//     const newJobs = [...jobs];
//     const editedIndex = jobs.findIndex((job) => job.id === toEditId);
//     newJobs[editedIndex] = editedJob;
//     setJobs(newJobs);
//     setToEditId(null);
//   }

//   const handleEditRequest = (event, job) => {
//     event.preventDefault();
//     setToEditId(job.id);
//     const currentValues = {
//       role: job.role,
//       city: job.city,
//       company: job.company,
//       description: job.description,
//       status: job.status,
//       applied_on: job.applied_on
//     }
//     setFormData(currentValues);
//   }

//   const handleDeleteRequest = (toDeleteId) => {
//     const newJobs = [...jobs];
//     const deleteIndex = jobs.findIndex((job) => job.id === toDeleteId);
//     newJobs.splice(deleteIndex, 1);
//     setJobs(newJobs);
//   }

//   return (
//     <div className={styles.PageContainer}>
//       <div className={styles.JobSearchDetails}>
//         <div className={styles.topLeft}><h1>My Job Applications</h1></div>
//         <div className={styles.topRight}>
//           <h2>Started <span style={{ textDecoration: "underline" }}>3 months ago</span> on Aug 9, 2022</h2>
//           <h2>for <span style={{ textDecoration: "underline" }}>Full Stack Software Engineer</span> role</h2>
//         </div>
//       </div>

//       <div className={styles.DataActionsContainer}>
//         <button id="addJobButton" className={styles.addDataButton} onClick={(e) => setDisplayAddJobForm(displayAddJobForm ? false : true)}>Manually Enter a Job</button>
//         <button className={styles.addDataButton} onClick={(e) => alert("ERROR: This feature is not available at the moment, please add job data manually.")}>Automatically Populate from Job Board Link</button>
//         <button className={styles.addDataButton} onClick={(e) => alert("ERROR: This feature is not available at the moment, please add job data manually.")}>Import Data  from CSV File</button>
//       </div>

//       <form className={styles.addDataForm} onSubmit={handleAddFormSubmit} style={displayAddJobForm ? { display: "flex" } : { display: "none" }}>
//         <input type='text' name='role' required='required' placeholder='Role...' onChange={handleAddFormChange} />
//         <input type='text' name='role_link' required='required' placeholder='Role link...' onChange={handleAddFormChange} />
//         <input type='text' name='city' required='required' placeholder='City...' onChange={handleAddFormChange} />
//         <input type='text' name='state' required='required' placeholder='State...' onChange={handleAddFormChange} />
//         <input type='text' name='country' required='required' placeholder='Country...' onChange={handleAddFormChange} />
//         <input type='text' name='company' required='required' placeholder='Company name...' onChange={handleAddFormChange} />
//         <input type='text' name='company_link' required='required' placeholder='Company website...' onChange={handleAddFormChange} />
//         <input type='text' name='description' required='required' placeholder='Company description...' onChange={handleAddFormChange} />
//         <input type='text' name='connections' required='required' placeholder='Connections...' onChange={handleAddFormChange} />
//         <select name='status' required='required' onChange={handleAddFormChange}>
//           <option value="" disabled selected hidden>Select App Status...</option>
//           <option value="To Apply">To Apply</option>
//           <option value="Applied">Applied</option>
//           <option value="Interviewing">Interviewing</option>
//           <option value="Ghosted">Ghosted</option>
//           <option value="Rejected">Rejected</option>
//           <option value="Offer">Offer</option>
//         </select>
//         <input type='date' name='applied_on' placeholder='Applied on...' onChange={handleAddFormChange} />
//         <button className={styles.addDataButton} type="submit">Add</button>
//       </form>

//       <form onSubmit={handleEditFormSubmit}>
//         <table>
//           <thead>
//             <tr className={styles.HeaderRow}>
//               {/* Add a pop to confirm on delete */}
//               <th>ACTIONS</th>
//               <th>Role</th>
//               <th>Location</th>
//               <th>Company</th>
//               <th>Description</th>
//               <th>Connections</th>
//               <th>Status</th>
//               <th>Applied On</th>
//             </tr>
//           </thead>
//           <tbody>
//             {jobs.map((job) => (
//               <Fragment>
//                 {toEditId === job.id ? (
//                   <WriteRow
//                     formData={formData}
//                     handleEditFormChange={handleEditFormChange} />
//                 ) : (
//                   <ReadOnlyRow
//                     job={job}
//                     handleEditRequest={handleEditRequest}
//                     handleDeleteRequest={handleDeleteRequest} />
//                 )}
//               </Fragment>
//             ))}
//           </tbody>
//         </table>
//       </form>
//     </div>
//   )
// }

// export default JobBoard
