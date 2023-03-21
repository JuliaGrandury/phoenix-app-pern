import { configureStore } from '@reduxjs/toolkit';

import jobSearchReducer from './slices/jobSearchSlice';
import jobsReducer from './slices/jobsSlice';


export default configureStore({
    reducer: {
        jobSearch: jobSearchReducer,
        jobs: jobsReducer
    },
});