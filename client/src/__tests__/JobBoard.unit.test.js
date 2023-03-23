// import jobsReducer from '../redux/slices/job/jobsSlice';
// import jobSearchReducer from '../redux/slices/jobsearch/jobSearchSlice';

// test('jobSearch reducer', () => {
//     let state;
//     state = jobSearchReducer(undefined, {});
//     expect(state).toEqual({ jobSearch: { jobSearch: [{ id: 1, name: 'Software Engineer in Blue Tech', startdate: '12/08/2022', inBoard: 0, applied: 0, interviews: 0, rejections: 0 }] }, jobs: { jobs: [], fetchingJobs: 'idle', hasError: null } });
// });

it("adds correctly", () => {
    expect(1 + 1).toEqual(2);
});