import { useState, Fragment } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { AiOutlineDelete } from 'react-icons/ai'
import { FiEdit3 } from 'react-icons/fi'
import { HiOutlineDuplicate } from 'react-icons/hi'
import PriorityPyramid from './PriorityPyramid'
import { getRowColor } from '../../utils/getItemColor'


const ReadOnlyRow = ({ job, openDropdown, handleEditJob, handleDeleteJob, handleDuplicateJob }) => {

  //store the id of job for which one of the actions might occur
  const [dropdownId, setDropdownId] = useState(openDropdown);
  const rowColor = getRowColor(job.app_status);

  return (
    <tr key={job.id}>
      {/* Pop up with Edit, Delete, Duplicate */}
      <td>
        <div className="actions-dropdown">
          <BsThreeDotsVertical style={dropdownId === job.id ? { color: "#5899FA", verticalAlign: 'baseline' } : { color: "slategrey", verticalAlign: 'baseline' }} onClick={() => setDropdownId(job.id)} />
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
      <td className='role'><a href={job.role_link}>{job.role}</a></td>
      <td><a href={job.company_link}>{job.company}</a></td>
      <td className='company_description'>{job.company_desc}</td>
      <td>{job.city ? `${job.city},` : null} {job.state_abbr ? `${job.state_abbr},` : null} {job.country} {job.workstyle ? `(${job.workstyle})` : null}</td>
      <td style={{ color: rowColor, fontWeight: 500 }}>{job.app_status}</td>
      <td>{new Date(job.applied_on).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</td>
      <td><PriorityPyramid level={job.priority} color={rowColor} /></td>
    </tr>
  )
}

export default ReadOnlyRow