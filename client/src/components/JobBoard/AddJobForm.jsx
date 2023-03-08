import React, { useState } from 'react'
import { stateAbbrList } from '../../utils/stateAbbr'

const AddJobForm = ({ alljobs }) => {

    // editing form to add a new job
    const handleAddJobFormChange = () => {
        
    }
    // submitting form to add a new job
    const handleAddJobSubmit = () => {
    }

    const addJob = () => {
        alert('job was added')
    }

    return (
        <form className='form-container' onSubmit={handleAddJobSubmit}>

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
                {stateAbbrList.map((abbr) => (
                    <option key={abbr.value} value={abbr.value}>{abbr.label}</option>
                ))}
            </select>
            <input className="country" type='text' name='country' placeholder='Country' onChange={handleAddJobFormChange} />

            <select className="status" name='status' required='required' onChange={handleAddJobFormChange}>
                <option value="" disabled selected hidden>Application Status *</option>
                <option value="To Apply">To Apply</option>
                <option value="Applied">Applied</option>
                <option value="Interviewing">Interviewing</option>
                <option value="Ghosted">Ghosted</option>
                <option value="Rejected">Rejected</option>
                <option value="Offer">Offer</option>
            </select>
            <input className="applied_on" type="date" name="applied_on" placeholder="Applied On" onChange={handleAddJobFormChange} />

            <button className='small-btn button-cta save-job' type='submit' onClick={addJob}>Save Job</button>
        </form>
    )
}

export default AddJobForm