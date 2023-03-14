// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { config } from '../../../config.js'


// // CREATE A JOB
// export const createJob = createAsyncThunk('jobs/createjob', async (job) => {
//     const requestBody = JSON.stringify(job)
//     const res = await fetch(`${config.apiUrl}/api/v1/jobs`, {
//         method: 'POST',
//         body: requestBody
//     });
//     const addedJob = await res.json();
//     console.log(`This is from the thunk for ${addedJob}`);
//     return addedJob;
// })


// // GET A JOB
// export const getJob = createAsyncThunk('jobs/getjob', async (id) => {
//     const res = await fetch(`${config.apiUrl}/api/v1/jobs/${id}`);
//     const job = await res.json();
//     return job.data.jobs;
// })



// // UPDATE A JOB
// export const updateJob = createAsyncThunk(('jobs/updatejob', async (id, data) => {
//     const requestBody = JSON.stringify({ job: data })
//     const res = await fetch(`${config.apiUrl}/api/v1/jobs/${id}`, {
//         method: "POST",
//         body: requestBody
//     });
//     const updatedJob = await res.json();
//     return updatedJob;
// }))


// // DELETE A JOB
// export const deleteJob = createAsyncThunk(('jobs/deletejob', async (id) => {
//     const res = await fetch(`${config.apiUrl}/api/v1/jobs/${id}`, {
//         method: "DELETE",
//     });
//     const deletedJob = await res.json();
//     return deletedJob;
// }))