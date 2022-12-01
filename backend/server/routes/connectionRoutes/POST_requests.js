const express = require('express')
const app = express()
const pool = require('../../config/db');

// Create a connection
app.post("/connections", async (req, res) => {
    try {
        const { fullname, role, company, contact_dates, contact_information, offers, secondary_cons, homework, status } = req.body;
        const newJob = await pool.query(
            "INSERT INTO connections (fullname, role, company, contact_dates, contact_information, offers, secondary_cons, homework, status) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *", [fullname, role, company, contact_dates, contact_information, offers, secondary_cons, homework, status]
        );
        res.json(newJob.rows[0]);
    } catch (error) {
        console.error(error.message);
        res.send("Addition of connection unsuccessful");
    }
})

module.exports = app