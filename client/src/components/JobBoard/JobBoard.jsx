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
import { BsFilter } from 'react-icons/bs'

//import Other Components
import AddJobModal from './AddJobModal'
import DangerModal from '../Shared/DangerModal'
import Spinner from '../Shared/Spinner'
import WriteOnlyRow from './WriteOnlyRow'
import ReadOnlyRow from './ReadOnlyRow'

//import Redux Actions and Selectors
import { selectJobSearch } from '../../redux/slices/jobsearch/jobSearchSlice'
import { fetchJobs, selectJobs, fetchingJobs, fetchError, addJob } from '../../redux/slices/job/jobsSlice'


const JobBoard = () => {

  const dispatch = useDispatch();
  const jobSearch = useSelector(selectJobSearch);
  const jobs = useSelector(selectJobs);
  const fetchStatus = useSelector(fetchingJobs);

  const [modalVisibility, setModalVisibility] = useState(false);
  const [dropdownId, setDropdownId] = useState(null);
  const [toEditId, setToEditId] = useState(null);
  const [popupId, setPopupId] = useState(null);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterValue, setFilterValue] = useState('');

  const onAddDocument = () => {
    alert('This feature is currently in development');
  }

  // Close dropdown if user clicks outside of it
  // document.addEventListener('mousedown', (() => setDropdownId(null)))

  const handleEditJob = (id) => {
    console.log(`Editing job with id ${id}`)
    setToEditId(id);
    setDropdownId(null);
    // dispatch(updateJob({job data here}))
  }

  const handleDeleteJob = (id) => {
    console.log(`Deleting job with id ${id}`);
    setPopupId(id);
    setDropdownId(null);
  }

  const handleDuplicateJob = (job) => {
    dispatch(addJob(job));
    dispatch(fetchJobs());
    setDropdownId(null);
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
            <th>Role <BsFilter/></th>
            <th>Company <BsFilter/></th>
            <th>Description</th>
            <th>Location <BsFilter/></th>
            <th>Status <BsFilter/></th>
            <th>Applied On <BsFilter/></th>
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
                  handleEditJob={handleEditJob} />
              ) : (
                <ReadOnlyRow
                  job={job}
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