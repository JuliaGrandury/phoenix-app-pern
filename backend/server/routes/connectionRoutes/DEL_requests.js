const express = require('express')
const app = express()
const pool = require('../../config/db');

// Delete a connection
app.delete("/connections/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteConnection = await pool.query("DELETE FROM connections WHERE id = $1", [id]);
        res.json(`Connection with id ${id} was deleted`);
    } catch (error) {
        console.error(error.message)
    }
})

module.exports = app