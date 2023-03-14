import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { stateAbbrList } from '../../utils/stateAbbr'
import { addJob } from '../../redux/slices/job/jobsSlice'


const AddJobForm = () => {

    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        id: '',
        role: '',
        role_link: '',
        city: '',
        state_abbr: '',
        country: '',
        workstyle: '',
        company: '',
        description: '',
        connections: [],
        app_status: '',
        applied_on: '',
        priority: '0',
        created_at: '',
    });

    // editing form to add a new job
    const handleAddJobFormChange = (event) => {
        event.preventDefault();
        const editedField = event.target.getAttribute("name");
        const editedValue = event.target.value;
        const newJob = { ...formData };
        newJob[editedField] = editedValue;
        setFormData(newJob);
    }

    // submitting form to add a new job
    const handleCreateJob = (event) => {
        event.preventDefault();
        dispatch(addJob(formData));
    }

    return (
        <form className='form-container' onSubmit={handleCreateJob}>

            <input className="role" type='text' name='role' placeholder='Role *' onChange={handleAddJobFormChange} />
            <input className="role_link" type='text' name='role_link' placeholder='Role Link' onChange={handleAddJobFormChange} />

            <input className="company" type='text' name='company' placeholder='Company *' onChange={handleAddJobFormChange} />
            <input className="connections" type='text' name='connections' placeholder='Connections' onChange={handleAddJobFormChange} />
            <select name='workstyle' required='required' onChange={handleAddJobFormChange}>
                <option value="" disabled selected hidden>Workstyle</option>
                <option value="Remote">Remote</option>
                <option value="On-site">On-site</option>
                <option value="Hybrid">Hybrid</option>
            </select>

            <textarea className="description" type='text' name='description' placeholder='Description' onChange={handleAddJobFormChange} />

            <input className="city" type='text' name='city' placeholder='City' onChange={handleAddJobFormChange} />
            <select className="state" name='state_abbr' required='required' onChange={handleAddJobFormChange}>
                <option value="" disabled selected hidden>State</option>
                {stateAbbrList.map((state_abbr) => (
                    <option key={state_abbr.value} value={state_abbr.value}>{state_abbr.label}</option>
                ))}
            </select>
            <input className="country" type='text' name='country' placeholder='Country' onChange={handleAddJobFormChange} />

            <select className="status" name='app_status' required='required' onChange={handleAddJobFormChange}>
                <option value="" disabled selected hidden>Application Status *</option>
                <option value="To Apply">To Apply</option>
                <option value="Applied">Applied</option>
                <option value="Interviewing">Interviewing</option>
                <option value="Ghosted">Ghosted</option>
                <option value="Rejected">Rejected</option>
                <option value="Offer">Offer</option>
            </select>
            <input className="applied_on" type="date" name="applied_on" placeholder="Applied On" onChange={handleAddJobFormChange} />

            <button className='small-btn button-cta save-job' type='submit'>Save Job</button>
        </form>
    )
}

export default AddJobForm