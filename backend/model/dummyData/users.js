const bcrypt = require("bcryptjs")

const users = [
  {
    name: "Ahmed Salah",
    email: "ahmed@ahmed.com",
    pass: bcrypt.hashSync("6459210",10),
    isAdmin: true,
  },
  {
    name: "Sameh Seed",
    email: "sameh@sameh.com",
    pass: bcrypt.hashSync( "6459210",10),
    isAdmin: true,
  }
]

module.exports=users;
