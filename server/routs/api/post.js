const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//Get Posts
router.get('/', (req, res) => {
    res.json('Im alive at post ;)')
})



module.exports = router;