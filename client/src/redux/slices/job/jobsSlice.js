import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { config } from '../../../config.js'

// FETCH JOBS
export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async () => {
  const res = await fetch(`${config.apiUrl}/api/v1/jobs`);
  const alljobs = await res.json();
  return alljobs.data.jobs;
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



const jobsSlice = createSlice({
  name: "jobs",
  initialState: {
    jobs: [],
    fetchStatus: 'idle', // 'idle' || 'loading' || 'succeeded' || 'failed'
    fetchError: null,
  },
  //extra reducers here
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.fetchStatus = 'loading';
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.fetchStatus = 'succeeded';
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.fetchStatus = 'failed';
        state.fetchError = action.error.message;
      })
      .addCase(addJob.fulfilled, (state, action) => {
        state.jobs.push(action.payload)
      })
      // .addCase(updateJob.fulfilled, (state, action) => {
      //   const { id } = action.payload;
      //   const currentJobIndex = state.jobs.findIndex((job) => job.id === id);
      //   if (currentJobIndex !== -1) {
      //     state.jobs[currentJobIndex] = action.payload;
      //   }
      // })
      .addCase(deleteJob.fulfilled, (state, action) => {
        state.jobs.filter((job) => job.id !== action.meta.arg);
      })
      .addCase(deleteJob.rejected, (state, action) => {
        state.error = action.error.message;
      })
  }
});


//selector
export const selectJobs = (state) => state.jobs.jobs;
export const fetchStatus = (state) => state.jobs.fetchStatus;
export const fetchError = (state) => state.jobs.fetchError;

//reducer
export default jobsSlice.reducer;