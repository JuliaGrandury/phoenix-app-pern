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


            <label>Role<input type='text' name='role' placeholder='Role...' onChange={handleAddJobFormChange} /></label>
            <label>Role Link<input type='text' name='role_link' placeholder='Role link...' onChange={handleAddJobFormChange} /></label>
            <label>Workstyle<select name='workstyle' required='required' onChange={handleAddJobFormChange}>
                <option value="" disabled selected hidden>--Select a workstyle--</option>
                <option value="Remote">Remote</option>
                <option value="On-site">On-site</option>
                <option value="Hybrid">Hybrid</option>
            </select></label>

            <input type='text' name='city' placeholder='City...' onChange={handleAddJobFormChange} />
            <select name='state_abbr' required='required' onChange={handleAddJobFormChange}>
                <option value="" disabled selected hidden>--Select a state--</option>
                {stateAbbrList.map((abbr) => (
                    <option key={abbr.value} value={abbr.value}>{abbr.label}</option>
                ))}
            </select>
            <input type='text' name='country' placeholder='Country...' onChange={handleAddJobFormChange} />

            <input type='text' name='company' placeholder='Company...' onChange={handleAddJobFormChange} />
            <input type='text' name='description' placeholder='Description...' onChange={handleAddJobFormChange} />
            <input type='text' name='connections' placeholder='Connections...' onChange={handleAddJobFormChange} />

            <select name='status' required='required' onChange={handleAddJobFormChange}>
                <option value="" disabled selected hidden>--Select a status--</option>
                <option value="To Apply">To Apply</option>
                <option value="Applied">Applied</option>
                <option value="Interviewing">Interviewing</option>
                <option value="Ghosted">Ghosted</option>
                <option value="Rejected">Rejected</option>
                <option value="Offer">Offer</option>
            </select>

            <button type='submit' className='button-cta modal-btn' onClick={addJob}>Add</button>
        </form>
    )
}

export default AddJobForm