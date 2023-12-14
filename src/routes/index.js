var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  //res.render('index', { title: 'Picnigram' })
  res.send([{ name: 'John' }, { name: 'Jane' }])
})

module.exports = router
