import React from 'react'

const AddJobForm = () => {
    return (
        <form className={styles.addDataForm} onSubmit={handleAddFormSubmit} style={displayForm ? { display: "flex" } : { display: "none" }}>
            <input
                type='text'
                name='role'
                required='required'
                placeholder='Job Title'
                onChange={handleAddFormChange} />
            <input
                type='text'
                name='city'
                required='required'
                placeholder='Job Location'
                onChange={handleAddFormChange} />
            <input
                type='text'
                name='company'
                required='required'
                placeholder='Company Name'
                onChange={handleAddFormChange} />
            <input
                type='text'
                name='description'
                required='required'
                placeholder='Company Description'
                onChange={handleAddFormChange} />
            <input
                type='text'
                name='status'
                required='required'
                placeholder='Application Status'
                onChange={handleAddFormChange} />
            {/* <select name='status' required='required'onChange={handleAddFormChange}>
          <option value="" disabled selected hidden>App Status</option>
          <option value="To Apply">To Apply</option>
          <option value="Applied">Applied</option>
          <option value="Interviewing">Interviewing</option>
          <option value="Ghosted">Ghosted</option>
          <option value="Rejected">Rejected</option>
          <option value="Offer">Offer</option>
        </select> */}
            <input
                type='date'
                name='applied_on'
                placeholder='Application Date'
                onChange={handleAddFormChange} />
            <button className={styles.addDataButton} type="submit">Add</button>
        </form>
    )
}

export default AddJobForm