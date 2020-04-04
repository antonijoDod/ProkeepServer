const express = require('express')
const router = express.Router;

router.get('/', (req, res) => {
    res.status(200).json({success: true, msg: 'Show all projects'});
})

router.get('/:id', (req, res) => {
    res.status(200).json({success: true, msg: 'Show all projects'});
})

router.post('/', (req, res) => {
    res.status(200).json({success: true, msg: 'Show all projects'});
})

router.put('/:id', (req, res) => {
    res.status(200).json({success: true, msg: 'Show all projects'});
})

router.delete('/:id', (req, res) => {
    res.status(200).json({success: true, msg: 'Show all projects'});
})