import { createSlice } from "@reduxjs/toolkit";
import MOCK_DATA from '../../../MOCK_DATA.json';

const options = {
  name: "jobs",
  initialState: {
    jobs: MOCK_DATA,
  },
  reducers: {
    addJob: (state, action) => {
      const { jobId, role, role_link, role_description, city, state_abbr, country, workstyle, company, description, connections, status, applied_on, priority } = action.payload;
      state.jobs[jobId] = {
        id: jobId,
        role: role,
        role_link: role_link,
        role_description: role_description,
        city: city,
        state_abbr: state_abbr,
        country: country,
        workstyle: workstyle,
        company: company,
        description: description,
        connections: connections,
        status: status,
        applied_on: applied_on,
        priority: priority
      };
    },
  },
  //extra reducers here
};

export const jobsSlice = createSlice(options);

//selector
export const selectJobs = (state) => state.jobs.jobs;

// actions + reducer
export const { addJob } = jobsSlice.actions;
export default jobsSlice.reducer;