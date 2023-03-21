import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { stateAbbrList } from '../../utils/stateAbbr'
import './WriteOnlyRow.css'
import { updateJob, fetchJobs } from '../../redux/thunks/jobsThunks'

const WriteOnlyRow = ({ jobInEdit, setToEditId }) => {

    const dispatch = useDispatch();

    const [toEditData, setToEditData] = useState({
        id: jobInEdit.id,
        role: jobInEdit.role,
        role_link: jobInEdit.role_link,
        company: jobInEdit.company,
        company_link: jobInEdit.company_link,
        company_desc: jobInEdit.company_desc,
        city: jobInEdit.city,
        state_abbr: jobInEdit.state_abbr,
        country: jobInEdit.country,
        connections: jobInEdit.connections,
        workstyle: jobInEdit.workstyle,
        app_status: jobInEdit.app_status,
        applied_on: jobInEdit.applied_on,
        priority: jobInEdit.priority,
        created_at: jobInEdit.created_at,
    });

    //save form edits on button click, outside click or enter
    const handleEditJobChange = (event) => {
        event.preventDefault();
        const editedField = event.target.getAttribute("name");
        const editedValue = event.target.value;
        const updatedJob = { ...toEditData };
        if (editedField === 'connections') {
            updatedJob[editedField].push(editedValue);
        } else {
            updatedJob[editedField] = editedValue;
        }
        setToEditData(updatedJob);
    }

    const handleConfirmUpdate = (event) => {
        event.preventDefault();
        console.log(toEditData);
        console.log(`Edited job with id ${toEditData.id}`);
        dispatch(updateJob(toEditData));
        setToEditId(null);
        //dispatch(fetchJobs());
    }

    return (
        <tr key={toEditData.id} className="inRowForm">
            <td><button className="save_change" type="submit" onClick={handleConfirmUpdate}>✓</button></td>
            <td>
                <input type='text' name='role' placeholder='Role *' value={toEditData.role} onChange={handleEditJobChange} />
                <input type='text' name='role_link' placeholder='Role Link' value={toEditData.role_link} onChange={handleEditJobChange} />
            </td>

            <td>
                <input type='text' name='company' placeholder='Company *' value={toEditData.company} onChange={handleEditJobChange} />
                <input type='text' name='company_link' placeholder='Company Link' value={toEditData.company_link} onChange={handleEditJobChange} />
            </td>

            <td><textarea className='company_desc' type="text" name='company_desc' placeholder='Description' value={toEditData.company_desc} onChange={handleEditJobChange} /></td>
            <td>
                <div className='location_inputs'>
                    <input className='city' type='text' name='city' placeholder='City' value={toEditData.city} onChange={handleEditJobChange} />
                    <select className='state_abbr' name='state_abbr' required='required' onChange={handleEditJobChange} >
                        <option value="" default="NA" disabled selected hidden>{toEditData.state_abbr}</option>
                        {stateAbbrList.map((state_abbr) => (
                            <option key={state_abbr.value} value={state_abbr.value}>{state_abbr.value}</option>
                        ))}
                    </select>
                    <input className='country' type='text' name='country' placeholder='Country' value={toEditData.country} onChange={handleEditJobChange} />
                </div>
            </td>

            <td>
                <select name='app_status' required='required' onChange={handleEditJobChange} >
                    <option value="" disabled selected hidden>{toEditData.app_status}</option>
                    <option value="To Apply">To Apply</option>
                    <option value="Applied">Applied</option>
                    <option value="Interviewing">Interviewing</option>
                    <option value="Ghosted">Ghosted</option>
                    <option value="Rejected">Rejected</option>
                    <option value="Offer">Offer</option>
                </select>
            </td>

            <td><input type="date" name="applied_on" placeholder="Applied On" value={toEditData.applied_on} onChange={handleEditJobChange} /></td>
            <td>
                <select name="priority" value={toEditData.priority} onChange={handleEditJobChange} >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
            </td>
        </tr>
    )
}

export default WriteOnlyRow