import { configureStore } from '@reduxjs/toolkit';
import jobsReducer from "./slices/jobboard/jobBoardSlice";


export default configureStore({
    reducer: {
        jobs: jobsReducer
    },
});