const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//Get Posts
router.get('/', async (req, res) => {
    const posts = await loadPostsCollection();
    res.json(await posts.find({}).toArray());
})


async function loadPostsCollection(){
    const client = await mongodb.MongoClient.connect
    ('mongodb+srv://abc123:test@cluster0-4a0nc.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true
    });

    return client.db('vue_express').collection('post');
}


module.exports = router;