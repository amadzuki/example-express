var express = require("express")
var router = express.Router()

const users = [
  {
    id: 1,
    name: "Marzuki",
    email: "marzuki@marzuki.com",
  },
  {
    id: 2,
    name: "Ahmad",
    email: "ahmad@marzuki.com",
  },
]

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send({
    message: "Get all users",
    users: users,
  })
})

module.exports = router
