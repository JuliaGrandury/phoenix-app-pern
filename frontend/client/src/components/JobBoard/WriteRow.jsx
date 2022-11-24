import React from 'react'

const WriteRow = ({ editFormData, handleEditFormChange }) => {
    return (
        <tr>
            <td><button type="submit">Save</button></td>
            <td><input
                type='text'
                name='jobTitle'
                required='required'
                placeholder='Job Title'
                value={editFormData.jobTitle}
                onChange={handleEditFormChange}
            /></td>
            <td><input
                type='text'
                name='jobLocation'
                required='required'
                placeholder='Job Location'
                value={editFormData.jobLocation}
                onChange={handleEditFormChange}
            /></td>
            <td><input
                type='text'
                name='companyName'
                required='required'
                placeholder='Company Name'
                value={editFormData.companyName}
                onChange={handleEditFormChange}
            /></td>
            <td><input
                type='text'
                name='companyDesc'
                required='required'
                placeholder='Company Description'
                value={editFormData.companyDesc}
                onChange={handleEditFormChange}
            /></td>
            <td><input
                type='text'
                name='appStatus'
                required='required'
                placeholder='Application Status'
                value={editFormData.appStatus}
                onChange={handleEditFormChange}
            /></td>
            <td><input
                type='text'
                name='appDate'
                required='required'
                placeholder='Application Date'
                value={editFormData.appDate}
                onChange={handleEditFormChange}
            /></td>
        </tr>
    )
}

export default WriteRow