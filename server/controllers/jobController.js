const asyncHandler = require('express-async-handler')

const Item = require('../models/jobModel')
const User = require('../models/userModel')

// @desc Get jobs of specific user
// @route GET /api/v1/jobs
// @acces Private
const getJobs = asyncHandler(async (req, res) => {
    const jobs = await Job.find({ user: req.user.id })
    res.status(200).json(jobs)
})

// @desc Create job
// @route POST /api/v1/jobs
// @acces Private
const createJob = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    const job = await Job.create({
        text: req.body.text,
        user: req.user.id,
    })

    res.status(200).json(job)
})

// @desc Update job
// @route PUT /api/v1/jobs/:id
// @acces Private
const updateJob = asyncHandler(async (req, res) => {
    const job = await Job.findById(req.params.id)
    if (!job) {
        res.status(400)
        throw new Error('Job not found')
    }

    // Get User and handle if it doesn't exist
    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Verify that logged in user and closet user match
    if(job.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(updatedJob)
})

// @desc Delete job
// @route DELETE /api/v1/jobs/:id
// @acces Private
const deleteJob = asyncHandler(async (req, res) => {
    const job = await Job.findById(req.params.id)
    if (!job) {
        res.status(400)
        throw new Error('Job not found')
    }

    // Get User and handle if it doesn't exist
    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Verify that logged in user and closet user match
    if(job.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    await job.remove()
    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getItems,
    setItem,
    updateItem,
    deleteItem,
}