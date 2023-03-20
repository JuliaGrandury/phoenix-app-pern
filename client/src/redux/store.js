import { configureStore } from '@reduxjs/toolkit';

import jobSearchReducer from './slices/jobsearch/jobSearchSlice';
import jobsReducer from './slices/job/jobsSlice';


export default configureStore({
    reducer: {
        jobSearch: jobSearchReducer,
        jobs: jobsReducer
    },
});