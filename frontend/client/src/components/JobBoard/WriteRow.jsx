import React from 'react'

const WriteRow = () => {
    return (
        <tr key={index}>
            <td></td>
            <td>{job.jobLocation}</td>
            <td>{job.companyName}</td>
            <td>{job.companyDesc}</td>
            <td>{job.appStatus}</td>
            <td>{job.appDate}</td>
        </tr>
    )
}

export default WriteRow