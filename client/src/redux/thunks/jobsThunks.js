import { createAsyncThunk } from '@reduxjs/toolkit'
import { config } from '../../config.js'

// Note: next improvement is to wrap all thunks in try catch and check if !response.ok

// FETCH JOBS
export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async () => {
    try {
        const res = await fetch(`${config.apiUrl}/api/v1/jobs`);
        const alljobs = await res.json();
        return alljobs.data.jobs;
    } catch (err) {
        console.error(err);
    }
})

// CREATE A JOB
export const addJob = createAsyncThunk('jobs/addJob', async (newJob, { rejectWithValue }) => {
    try {
        const response = await fetch(`${config.apiUrl}/api/v1/jobs`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
        const data = await response.json();
        return data;
    } catch (err) {
        return rejectWithValue(err.response.data);
    }
})

// DELETE A JOB
export const deleteJob = createAsyncThunk('jobs/deleteJob', async (id, { rejectWithValue }) => {
    try {
        const response = await fetch(`${config.apiUrl}/api/v1/jobs/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return id;
    } catch (err) {
        return rejectWithValue(err.response.data);
    }
})

// UPDATE A JOB
export const updateJob = createAsyncThunk('jobs/updateJob', async (newJob, { rejectWithValue }) => {
    try {
        const response = await fetch(`${config.apiUrl}/api/v1/jobs/${newJob.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newJob),
        });
        const data = await response.json();
        return data;
    } catch (err) {
        return rejectWithValue(err.response.data);
    }
})
