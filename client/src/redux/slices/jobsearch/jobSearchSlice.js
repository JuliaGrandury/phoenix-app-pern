import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: "jobSearch",
    initialState: {
        jobSearch: [{
            id: 1,
            name: 'Software Engineer in Blue Tech'
        }],
    },
    reducers: {
        addJobSearch: (state, action) => {
            const { jobSearchId, name, jobIds } = action.payload;
            state.jobSearch[jobSearchId] = {
                id: jobSearchId,
                name: name,
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

