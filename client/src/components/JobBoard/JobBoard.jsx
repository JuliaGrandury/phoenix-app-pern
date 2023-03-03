import { useState } from 'react'
import { useSelector } from 'react-redux';
import './jobboard.css'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { HiOutlineDocumentAdd } from 'react-icons/hi'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { selectJobs } from '../../redux/slices/jobboard/jobBoardSlice';

import AddJobModal from './AddJobModal';

const JobsDatabase = () => {

  const jobs = useSelector(selectJobs);
  const [modalVisibility, setModalVisibility] = useState(false);

  
  const onMoreActions = () => {
    alert("The actions are not available at the moment.")
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
          <i className='jobboard-icons'><IoMdAddCircleOutline onClick={() => { setModalVisibility(true) }} /></i>
          <i className='jobboard-icons'><HiOutlineDocumentAdd onClick={onAddDocument} /></i>
        </div>
      </header>


      {/* Pop up with option to add by link (webscraping populates the fields) or manually input the information */}
      {modalVisibility && (
        <AddJobModal onCloseModal={() => setModalVisibility(false)} />
      )}


      <table className='jobboard-table'>
        <thead>
          <tr>
            <th></th>
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
              {/* Pop up with Edit, Delete, Duplicate */}
              <td><BsThreeDotsVertical style={{ color: "slategrey" }} onClick={onMoreActions} /></td>
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