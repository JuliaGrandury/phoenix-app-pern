import { useState, useEffect, Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './jobboard.css'

//import React Icons
import { IoMdAddCircleOutline } from 'react-icons/io'
import { TbFileExport } from 'react-icons/tb'
import { BsFilter } from 'react-icons/bs'

//import Other Components
import AddJobModal from './AddJobModal'
import DangerModal from '../Shared/DangerModal'
import Spinner from '../Shared/Spinner'
import WriteOnlyRow from './WriteOnlyRow'
import ReadOnlyRow from './ReadOnlyRow'

//import Redux Actions and Selectors
import { selectJobSearch } from '../../redux/slices/jobSearchSlice'
import { fetchJobs, addJob } from '../../redux/thunks/jobsThunks'
import { selectJobs, fetchingJobs, fetchError } from '../../redux/slices/jobsSlice'

const JobBoard = () => {

  const dispatch = useDispatch();
  const jobSearch = useSelector(selectJobSearch);
  const jobs = useSelector(selectJobs);
  const fetchStatus = useSelector(fetchingJobs);

  const [modalVisibility, setModalVisibility] = useState(false);
  const [dropdownId, setDropdownId] = useState(null);
  const [toEditId, setToEditId] = useState(null);
  const [popupId, setPopupId] = useState(null);

  // const [searchTerm, setSearchTerm] = useState('');
  // const [filterValue, setFilterValue] = useState('');

  const onAddDocument = () => {
    alert('This feature is currently in development');
  }

  // Close dropdown if user clicks outside of it
  // document.addEventListener('mousedown', (() => setDropdownId(null)))

  const handleEditJob = (id) => {
    console.log(`Editing job with id ${id}`)
    setToEditId(id);
    setDropdownId(null);
  }

  const handleDeleteJob = (id) => {
    setPopupId(id);
    setDropdownId(null);
  }

  const handleDuplicateJob = (job) => {
    setDropdownId(null);
    dispatch(addJob(job));
    dispatch(fetchJobs());
  }

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch, modalVisibility, popupId]);


  console.log(`Fetch status is ${fetchStatus}`)

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

      {popupId && (
        <DangerModal onClosePopUp={() => setPopupId(null)} dangerObject={{ header: 'Delete Job', message: 'Are you sure you want to permanently delete this job?', toDelete: popupId }} />
      )}

      <table className='jobboard-table'>
        <thead>
          <tr>
            <th></th>
            {/* add buttons on all to Sort Ascending, Sort Descending, and Filter (input field) */}
            <th className='role'>Role <BsFilter style={{ verticalAlign: 'middle' }} /></th>
            <th>Company <BsFilter style={{ verticalAlign: 'middle' }} /></th>
            <th className='company_description'>Description</th>
            <th>Location <BsFilter style={{ verticalAlign: 'middle' }} /></th>
            <th>Status <BsFilter style={{ verticalAlign: 'middle' }} /></th>
            <th>Applied On <BsFilter style={{ verticalAlign: 'middle' }} /></th>
            {/* th below is for priority column */}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <Fragment key={job.id}>
              {toEditId === job.id ? (
                <WriteOnlyRow
                  jobInEdit={job} 
                  setToEditId={setToEditId}/>
              ) : (
                <ReadOnlyRow
                  job={job}
                  openDropdown={dropdownId}
                  handleEditJob={handleEditJob}
                  handleDeleteJob={handleDeleteJob}
                  handleDuplicateJob={handleDuplicateJob} />
              )}
            </Fragment>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default JobBoard