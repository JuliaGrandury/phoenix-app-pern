import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: "jobSearch",
    initialState: {
        jobSearch: [{
            id: 1,
            name: 'Software Engineer in Blue Tech',
            startdate: '12/08/2022',
            jobsIds: [],
        }],
    },
    reducers: {
        addJobSearch: (state, action) => {
            const { jobSearchId, name, startdate, jobIds } = action.payload;
            state.jobSearch[jobSearchId] = {
                id: jobSearchId,
                name: name,
                startdate: startdate,
                jobIds: jobIds,
            };
        },
    },
};


export const jobSearchSlice = createSlice(options);

//selector
export const selectJobSearch = (state) => state.jobSearch.jobSearch;

// actions + reducer
export const { addJobSearch } = jobSearchSlice.actions;
export default jobSearchSlice.reducer;

