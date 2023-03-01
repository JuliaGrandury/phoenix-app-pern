// import React, { useState } from 'react'
// import { nanoid } from 'nanoid'

// const AddJobForm = ({alljobs}) => {
//   const [jobs, setJobs] = useState(alljobs);
//   const [jobAddition, setJobAddition] = useState({
//     role: '',
//     company: '',
//     status: '',
//     applied_on: '',
//   });

//   // Update state hooks as user types into form
//   const handleAddJobFormChange = (event) => {
//     event.preventDefault();
//     const field = event.target.getAttribute("name");
//     const value = event.target.value;
//     const newFormData = { ...jobAddition };
//     newFormData[field] = value;
//     setJobAddition(newFormData);
//   }

//   // Update table data when user submits form
//   const handleAddJobFormSubmit = (event) => {
//     event.preventDefault();
//     const newJob = {
//       id: nanoid(),
//       role: jobAddition.role,
//       company: jobAddition.company,
//       status: jobAddition.status,
//       applied_on: new Date().toLocaleDateString('en-US'),
//       //created_at: new Date().toLocaleDateString('en-US'),
//     };
//     console.log(newJob);
//     const newJobs = [...jobs, newJob];
//     setJobs(newJobs);
//   }

//   return (
//     <form className={styles.addDataForm} onSubmit={handleAddJobFormSubmit}>
//       <input type='text' name='role' placeholder='Role...' onChange={handleAddJobFormChange} />
//       <input type='text' name='company' placeholder='Company...' onChange={handleAddJobFormChange} />
//       <input type='text' name='status' placeholder='Status...' onChange={handleAddJobFormChange} />
//       {/* <input type='text' name='applied_on' placeholder='Applied On...' onChange={handleAddJobFormChange} /> */}
//       <button type='submit'>Add</button>
//     </form>
//   )
// }

// export default AddJobForm