const express = require('express')
const app = express()
const pool = require('../../config/db');

// Update a connection
app.put("/connections/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { fullname, role, company, contact_dates, contact_information, offers, secondary_cons, homework, status } = req.body;
        const updateJob = await pool.query(
            "UPDATE connections SET fullname=$1, role=$2, company=$3, contact_dates=$4, contact_information=$5, offers=$6, secondary_cons=$7, homework=$8, status=$9 WHERE id = $10",
            [fullname, role, company, contact_dates, contact_information, offers, secondary_cons, homework, status, id]
        );
        res.json(`Job with id ${id} was updated to ${updateJob.rows[0]}`);
    } catch (error) {
        console.error(error.message)
    }
})

module.exports = app