import { createSlice } from "@reduxjs/toolkit"
import { fetchJobs, addJob, deleteJob, updateJob } from '../thunks/jobsThunks'

const jobsSlice = createSlice({
  name: "jobs",
  initialState: {
    jobs: [],
    fetchingJobs: 'idle', // 'idle' || 'loading' || 'succeeded' || 'failed'
    loading: false,
    hasError: null,
  },
  //extra reducers here
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.fetchingJobs = 'loading';
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.fetchingJobs = 'succeeded';
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.fetchingJobs = 'failed';
        state.hasError = action.error.message;
      })
      .addCase(addJob.fulfilled, (state, action) => {
        state.jobs.push(action.payload)
      })
      .addCase(updateJob.fulfilled, (state, action) => {
        const { id } = action.meta.arg.id;
        const currentJobIndex = state.jobs.findIndex((job) => job.id === id);
        if (currentJobIndex !== -1) {
          state.jobs[currentJobIndex] = action.meta.arg;
        }
      })
      .addCase(deleteJob.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteJob.fulfilled, (state, action) => {
        state.jobs.filter((job) => job.id !== action.meta.arg);
      })
      .addCase(deleteJob.rejected, (state, action) => {
        state.loading = false;
        state.hasError = action.error.message;
      })
  }
});


//selector
export const selectJobs = (state) => state.jobs.jobs;
export const fetchingJobs = (state) => state.jobs.fetchingJobs;
export const hasError = (state) => state.jobs.hasError;

//reducer
export default jobsSlice.reducer;