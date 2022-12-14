const express = require('express');
const app = express();
const cors = require('cors');

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// JOBS API ROUTES
app.use('/', require('./routes/jobRoutes/POST_requests'));
app.use('/', require('./routes/jobRoutes/GET_requests'));
app.use('/', require('./routes/jobRoutes/PUT_requests'));
app.use('/', require('./routes/jobRoutes/DEL_requests'));

// CONNECTIONS API ROUTES
app.use('/', require('./routes/connectionRoutes/POST_requests'));
app.use('/', require('./routes/connectionRoutes/GET_requests'));
app.use('/', require('./routes/connectionRoutes/PUT_requests'));
app.use('/', require('./routes/connectionRoutes/DEL_requests'));


app.listen(5000, () => {
    console.log(`The server is up and running on port 5000`);
})

