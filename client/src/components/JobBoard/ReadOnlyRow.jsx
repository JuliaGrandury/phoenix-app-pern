import { useState, Fragment } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { AiOutlineDelete } from 'react-icons/ai'
import { FiEdit3 } from 'react-icons/fi'
import { HiOutlineDuplicate } from 'react-icons/hi'

const ReadOnlyRow = ({ job, handleEditJob, handleDeleteJob, handleDuplicateJob }) => {

  //store the id of job for which one of the actions might occur
  const [dropdownId, setDropdownId] = useState(null);

  return (
    <tr key={job.id}>
      {/* Pop up with Edit, Delete, Duplicate */}
      <td>
        <div className="actions-dropdown">
          <BsThreeDotsVertical style={dropdownId === job.id ? { color: "#5899FA" } : { color: "slategrey" }} onClick={() => setDropdownId(job.id)} />
          <Fragment>
            {dropdownId === job.id ? (
              <ul className="dropdown-content" >
                <li onClick={() => handleEditJob(job.id)}><FiEdit3 /> Edit</li>
                <li onClick={() => handleDeleteJob(job.id)}><AiOutlineDelete /> Delete</li>
                <li onClick={() => handleDuplicateJob(job)}><HiOutlineDuplicate /> Duplicate</li>
              </ul>
            ) : <></>}
          </Fragment>
        </div>
      </td>
      <td><a href={job.role_link}>{job.role}</a></td>
      <td><a href={job.company_link}>{job.company}</a></td>
      <td>{job.company_desc}</td>
      <td>{job.city ? `${job.city},` : null} {job.state_abbr ? `${job.state_abbr},` : null} {job.country} {job.workstyle ? `(${job.workstyle})` : null}</td>
      <td className={job.app_status === "To Apply" ? 'ToApply' : job.app_status}>{job.app_status}</td>
      <td>{new Date(job.applied_on).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</td>
      <td>{job.priority}</td>
    </tr>
  )
}

export default ReadOnlyRow