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

router.get("/:id", (req, res, next) => {
  res.send({
    message: "Get user by id",
    user: users.find((user) => user.id === Number.parseInt(req.params.id)),
  })
})

module.exports = router
