import { useState, useEffect, Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './jobboard.css'

//import React Icons
import { IoMdAddCircleOutline } from 'react-icons/io'
import { HiOutlineDuplicate } from 'react-icons/hi'
import { TbFileExport } from 'react-icons/tb'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { AiOutlineDelete } from 'react-icons/ai'
import { FiEdit3 } from 'react-icons/fi'

//import Other Components
import AddJobModal from './AddJobModal'
import DangerModal from '../Shared/DangerModal'

//import Redux Actions and Selectors
import { selectJobs } from '../../redux/slices/job/jobsSlice'
import { selectJobSearch } from '../../redux/slices/jobsearch/jobSearchSlice'
import { createJob, getAllJobs } from '../../redux/slices/job/jobsThunk'

const JobsDatabase = () => {

  const jobSearch = useSelector(selectJobSearch);
  const jobs = useSelector(selectJobs);
  const dispatch = useDispatch();

  const [openDropdown, setOpenDropdown] = useState(null);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [openPopUp, setOpenPopUp] = useState(null);

  const onAddDocument = () => {
    alert('This feature is currently in development');
  }

  // Close dropdown if user clicks outside of it
  // document.addEventListener('mousedown', (() => setOpenDropdown(null)))

  const handleEditJob = (id) => {
    console.log(`Editing job with id ${id}`)
    // dispatch(updateJob({job data here}))
  }

  const handleDeleteJob = (id) => {
    setOpenPopUp(id);
  }

  const handleDuplicateJob = (id) => {
    console.log(`Duplicating job with id ${id}`)
    // dispatch(duplicateJob(id));
  }

  useEffect(() => {
    dispatch(getAllJobs());
  }, [dispatch]);


  return (
    <div className='jobboard-container'>

      <header className='jobboard-header'>
        <h2 className='jobboard-title'>{jobSearch[0].name}</h2>
        <div className='jobboard-info'>
          <p className='jobboard-results'>{`${jobs.length} results`}</p>
          <i className='jobboard-icons'><IoMdAddCircleOutline onClick={() => { setModalVisibility(true) }} /></i>
          <i className='jobboard-icons'><TbFileExport onClick={onAddDocument} /></i>
        </div>
      </header>

      {/* IMPORTING/EXPORTING JOB DATA ACTIONS */}
      {modalVisibility && (
        <AddJobModal onCloseModal={() => setModalVisibility(false)} />
      )}

      {openPopUp && (
        <DangerModal onClosePopUp={() => setOpenPopUp(null)} toDelete={openPopUp} />
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
              <td>
                <div className="actions-dropdown">
                  <BsThreeDotsVertical style={openDropdown === job.id ? { color: "#5899FA" } : { color: "slategrey" }} onClick={() => setOpenDropdown(job.id)} />
                  <Fragment>
                    {openDropdown === job.id ? (
                      <ul className="dropdown-content">
                        <li onClick={() => handleEditJob(job.id)}><FiEdit3 /> Edit</li>
                        <li onClick={() => handleDeleteJob(job.id)}><AiOutlineDelete /> Delete</li>
                        <li onClick={() => handleDuplicateJob(job.id)}><HiOutlineDuplicate /> Duplicate</li>
                      </ul>
                    ) : <></>}
                  </Fragment>
                </div>
              </td>
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