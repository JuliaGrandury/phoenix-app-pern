import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MOCK_DATA from '../../../MOCK_DATA.json';
import { createJob, getAJob, getAllJobs, updateJob } from './jobsThunk'

const options = {
  name: "jobs",
  initialState: {
    jobs: MOCK_DATA,
    isLoadingJobs: false,
    failedToLoadJobs: false,
    createJobIsPending: false,
    failedToCreateJob: false
  },
  //extra reducers here
  extraReducers: (builder) => {
    builder
      .addCase(createJob.pending, (state) => {
        state.createJobIsPending = true;
        state.failedToCreateJob = false;
      })
      .addCase(createJob.fulfilled, (state, action) => {
        state.createJobIsPending = false;
        state.failedToCreateJob = false;
        state.jobs.push(action.payload);
      })
      .addCase(createJob.rejected, (state) => {
        state.createJobIsPending = false;
        state.failedToCreateJob = true;
      })
  }
};

// .addCase(updateJob.fulfilled, (state) => {
//   state.jobs[action.payload.jobId] = action.payload
// })

export const jobsSlice = createSlice(options);

//selector
export const selectJobs = (state) => state.jobs.jobs;
export const createJobIsPending = (state) => state.jobs.createJobIsPending;
export const isLoadingJobs = (state) => state.jobs.isLoadingJobs;

// actions + reducer
export const { addJob, deleteJob, duplicateJob } = jobsSlice.actions;
export default jobsSlice.reducer;