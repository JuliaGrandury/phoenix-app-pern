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
    const res = await fetch(`${config.apiUrl}/api/v1/jobs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    })
    const data = await res.json();
    return data;
  } catch (err) {
    return rejectWithValue(err.response.data);
  }
})

const jobsSlice = createSlice({
  name: "jobs",
  initialState: {
    jobs: [],
    isLoadingJobs: false,
    hasError: false,
  },
  //reducers here
  reducers: {
    // addJob: (state, action) => {
    //   state.jobs.push(action.payload);
    // },
    deleteJob: (state, action) => {
      state.jobs.filter((job) => job.id !== action.payload.id);
    },
    updateJob: (state, action) => {
      // 
    }
  },
  //extra reducers here
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.isLoadingJobs = true;
        state.hasError = false;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.isLoadingJobs = false;
        state.hasError = false;
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state) => {
        state.isLoadingJobs = false;
        state.hasError = true;
      })
      .addCase(addJob.fulfilled, (state, action) => {
        state.jobs.push(action.payload)
      })
  }
});

//actions
export const { deleteJob } = jobsSlice.actions;

//selector
export const selectJobs = (state) => state.jobs.jobs;
export const isLoadingJobs = (state) => state.jobs.isLoadingJobs;
export const hasError = (state) => state.jobs.hasError;

//reducer
export default jobsSlice.reducer;