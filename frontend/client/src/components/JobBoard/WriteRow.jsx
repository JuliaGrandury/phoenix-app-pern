
const WriteRow = ({ editFormData, handleEditFormChange }) => {
    return (
        <tr>
            <td><button type="submit">Save</button></td>
            <td><input type='text' name='role' required='required' placeholder='Role...'
                value={editFormData.role} onChange={handleEditFormChange} /></td>
            <td><input type='text' name='role_link' required='required' placeholder='Role Link...'
                value={editFormData.role} onChange={handleEditFormChange} /></td>

            <td><input type='text' name='city' required='required' placeholder='City...'
                value={editFormData.city} onChange={handleEditFormChange} /></td>
            <td><input type='text' name='state' required='required' placeholder='State...'
                value={editFormData.state} onChange={handleEditFormChange} /></td>
            <td><input type='text' name='country' required='required' placeholder='Country...'
                value={editFormData.country} onChange={handleEditFormChange} /></td>



            <td><input type='text' name='company' required='required' placeholder='Company...'
                value={editFormData.company} onChange={handleEditFormChange} /></td>
            <td><input type='text' name='description' required='required' placeholder='Description...'
                value={editFormData.description} onChange={handleEditFormChange} /></td>

            <td><input type='text' name='appStatus' required='required' placeholder='Application Status'
                value={editFormData.appStatus} onChange={handleEditFormChange} /></td>
            <td><input type='text' name='appDate' required='required' placeholder='Application Date'
                value={editFormData.appDate} onChange={handleEditFormChange} /></td>
        </tr>

        
    )
}

// return (
//     <tr>
//         <td className={styles.rowActions}>
//             <button type="button" onClick={(e) => handleEditRequest(e, job)}><img src="https://img.icons8.com/small/16/null/pencil.png"/></button>
//             <button type="button" onClick={() => handleDeleteRequest(job.jobId)}><img src="https://img.icons8.com/small/16/null/delete.png"/></button>
//         </td>
//         {job.company_link ? <td><a href={job.company_link} target="_blank">{job.role}</a></td> : <td>{job.role}</td>}
//         <td>{job.city}</td>
//         {job.company_link ? <td><a href={job.company_link} target="_blank">{job.company}</a></td> : <td>{job.company}</td>}
//         <td>{job.description}</td>
//         <td>No Connections</td>
//         <td className={styles[statusMap[job.status]]}>{job.status}</td>
//         <td>{job.applied_on}</td>
//     </tr>
// )

export default WriteRow