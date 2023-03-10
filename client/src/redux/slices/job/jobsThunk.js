import { createAsyncThunk } from "@reduxjs/toolkit";
import { config } from '../../../config.js'

// CREATE A JOB
export const createJob = createAsyncThunk('jobs', async ({ role, role_link, city, state_abbr, country, workstyle, company, description, connections, app_status, applied_on, priority }) => {
    const requestBody = JSON.stringify({ role, role_link, city, state_abbr, country, workstyle, company, description, connections, app_status, applied_on, priority })
    const res = await fetch(`${config.apiUrl}/api/v1/jobs`, {
        method: "POST",
        body: requestBody
    });
    const addedJob = await res.json();
    return addedJob;
})


// GET A JOB
export const getAJob = createAsyncThunk('jobs/getjob', async (id) => {
    const res = await fetch(`${config.apiUrl}/api/v1/jobs`);
    const job = await res.json();
    return job;
})


// GET ALL JOBS
export const getAllJobs = createAsyncThunk('jobs/getall', async () => {
    const res = await fetch(`${config.apiUrl}/api/v1/jobs`);
    const alljobs = await res.json();
    return alljobs;
})


// UPDATE A JOB
export const updateJob = createAsyncThunk(('jobs/update', async (id, data) => {
    const requestBody = JSON.stringify({ job: data })
    const res = await fetch(`${config.apiUrl}/api/v1/jobs/${id}`, {
        method: "POST",
        body: requestBody
    });
    const updatedJob = await res.json();
    return updatedJob;
}))


// DELETE A JOB
// export const deleteJob = createAsyncThunk(('jobs/delete', async (id) => {
    
// }))