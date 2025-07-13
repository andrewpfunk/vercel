// const couchbase = require('couchbase'); // crashing in both netlify and vercel
const { MongoClient } = require("mongodb"); // not crashing

module.exports = (req, res) => {
    res.status(200).json({ message: 'Hello from Vercel Function!' });
};
