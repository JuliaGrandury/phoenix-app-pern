import React, { useState } from 'react'
import { stateAbbrList } from '../../utils/stateAbbr'
import { useDispatch } from 'react-redux'
import { addJob, fetchJobs } from '../../redux/thunks/jobsThunks'


const AddJobForm = () => {

    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        id: '',
        role: '',
        role_link: null,
        company: '',
        company_link: null,
        company_desc: null,
        city: null,
        state_abbr: null,
        country: null,
        connections: [],
        workstyle: null,
        app_status: null,
        applied_on: null,
        priority: null,
        created_at: null,
    });

    // editing form to add a new job
    const handleAddJobFormChange = (event) => {
        event.preventDefault();
        const editedField = event.target.getAttribute("name");
        const editedValue = event.target.value;
        const newJob = { ...formData };
        if (editedField === 'connections') {
            newJob[editedField].push(editedValue);
        } else {
            newJob[editedField] = editedValue;
        }
        setFormData(newJob);
    }

    // submitting form to add a new job
    const handleCreateJob = (event) => {
        event.preventDefault();
        dispatch(addJob(formData));
        dispatch(fetchJobs());
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
            <select className="priority" name='priority' required='required' onChange={handleAddJobFormChange}>
                <option value="" disabled selected hidden>Priority</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <input className="applied_on" type="date" name="applied_on" placeholder="Select a date" onChange={handleAddJobFormChange} />

            <button className='small-btn button-cta save-job' type='submit'>Save Job</button>
        </form>
    )
}

export default AddJobForm