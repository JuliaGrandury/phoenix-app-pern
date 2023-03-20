import { Fragment } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { AiOutlineDelete } from 'react-icons/ai'
import { FiEdit3 } from 'react-icons/fi'
import { stateAbbrList } from '../../utils/stateAbbr'
import styles from './JobBoard.module.css'


const WriteOnlyRow = ({ jobInEdit, handleEditJob }) => {


    //save form edits on button click, outside click or enter
    const handleEditJobChange = (event) => {
        event.preventDefault();

    }


    return (
        <tr key={jobInEdit.id} className={styles.inRowForm}>
            <td><button className={styles.save_change} type="submit">✓</button></td>
            <td>
                <input type='text' name='role' placeholder='Role *' value={jobInEdit.role} onChange={handleEditJobChange} />
                <input type='text' name='role_link' placeholder='Role Link' value={jobInEdit.role_link} />
            </td>

            <td>
                <input type='text' name='company' placeholder='Company *' value={jobInEdit.company} onChange={handleEditJobChange} />
                <input type='text' name='connections' placeholder='Connections' value={jobInEdit.company_link} />
            </td>

            <td><input type="text" name='description' placeholder='Description' value={jobInEdit.company_desc} /></td>
            <td>
                <input type='text' name='city' placeholder='City' value={jobInEdit.city} />
                <select name='state_abbr' required='required'>
                    <option value="" disabled selected hidden>{jobInEdit.state_abbr}</option>
                    {stateAbbrList.map((state_abbr) => (
                        <option key={state_abbr.value} value={state_abbr.value}>{state_abbr.label}</option>
                    ))}
                </select>
                <input type='text' name='country' placeholder='Country' value={jobInEdit.country} />
            </td>

            <td>
                <select name='app_status' required='required'>
                    <option value="" disabled selected hidden>{jobInEdit.app_status}</option>
                    <option value="To Apply">To Apply</option>
                    <option value="Applied">Applied</option>
                    <option value="Interviewing">Interviewing</option>
                    <option value="Ghosted">Ghosted</option>
                    <option value="Rejected">Rejected</option>
                    <option value="Offer">Offer</option>
                </select>
            </td>

            <td><input type="date" name="applied_on" placeholder="Applied On" value={jobInEdit.applied_on} onChange={handleEditJobChange}/></td>
            <td>
                <select name="priority">
                    <option>1</option>
                    <option>2</option>
                </select>
            </td>
        </tr>
    )
}

export default WriteOnlyRow