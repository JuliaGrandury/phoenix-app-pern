require("dotenv").config()
const colors = require("colors")
const express = require("express")
const db = require("./db")
const morgan = require("morgan")
const app = express()
const cors = require("cors")

// middleware
app.use(express.json())
app.use(cors())


// routes - create a job
app.post("/api/v1/jobs", async (req, res) => {
    const { role, role_link, city, state_abbr, country, workstyle, company, description, connections, app_status, applied_on, priority } = req.body;
    try {
        const results = await db.query(`INSERT INTO jobs (role, role_link, city, state_abbr, country, workstyle, company, description, connections, app_status, applied_on, priority) 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *`, [role, role_link, city, state_abbr, country, workstyle, company, description, connections, app_status, applied_on, priority])
        res.status(201).json({
            status: "success",
            data: {
                jobs: results.rows[0]
            }
        })
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})


// routes - get all jobs
app.get("/api/v1/jobs", async (req, res) => {
    try {
        const results = await db.query("SELECT * FROM jobs")
        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                jobs: results.rows
            }
        })
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})


// BYE JULIAAAAAAA 👋
// Good luck!


// routes - get a job
app.get("/api/v1/jobs/:id", async (req, res) => {
    let results;
    try {
        results = await db.query("SELECT * FROM jobs WHERE id=$1", [req.params.id])
    } catch (err) {
        console.log(err) //database error
    }

    if (results.rows.length === 0) {
        // check for other function that doesn't necessarily need to send data back
        res.status(404).json({
            status: "Resource does not exist"
        })
    }

    res.status(200).json({
        status: "success",
        data: {
            jobs: results.rows[0]
        }
    })
})

// routes - update a job
app.put("/api/v1/jobs/:id", async (req, res) => {
    const { id } = req.params;
    const { role, role_link, city, state_abbr, country, workstyle, company, description, connections, app_status, applied_on, priority } = req.body;
    try {
        const results = await db.query(`UPDATE jobs SET role=$1, role_link=$2, city=$3, state_abbr=$4, country=$5, workstyle=$6, company=$7, description=$8, connections=$9, app_status=$10, applied_on=$11, priority=$12 
        WHERE id=$13 RETURNING *`, [role, role_link, city, state_abbr, country, workstyle, company, description, connections, app_status, applied_on, priority, id])
        res.status(200).json({
            status: "success",
            data: {
                jobs: results.rows[0]
            }
        })
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

// routes - delete a job
app.delete("/api/v1/jobs/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const results = await db.query("DELETE FROM jobs WHERE id=$1 ", [id])
        res.status(204).json({
            status: "success",
            message: "Job was deleted from board"
        })
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})


const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`The server is up and running on port ${port}`.rainbow)
})