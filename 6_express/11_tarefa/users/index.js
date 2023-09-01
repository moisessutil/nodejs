var express = require('express')
var router = express.Router()

const path = require('path')

const basePath = path.join(__dirname, '../templates')

router.get('/dois', (req, res) => {
    res.sendFile(`${basePath}/dois.html`)
})

module.exports = router