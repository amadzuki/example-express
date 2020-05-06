var express = require("express")
var router = express.Router()

let users = [
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
  const user = users.find((user) => user.id === Number.parseInt(req.params.id))
  res.send({
    message: "Get user by id",
    user: user,
  })
})

router.post("/", (req, res, next) => {
  const newUser = {
    name: req.body.name,
    email: req.body.email,
  }
  const updatedUsers = users.concat(newUser)
  users = updatedUsers
  res.send({
    message: "Add new user",
    newUser: newUser,
  })
})

module.exports = router
