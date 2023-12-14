var express = require('express')
var router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send([{ name: 'John Doe' }, { name: 'Jane Doe' }])
})
return
res.render('users', {
  user: {
    name: 'John Doe',
  },
  users: [{ name: 'John Doe' }, { name: 'Jane Doe' }],
})

module.exports = router
