const { Router } = require('express');
const {adminModel} = require('../db');

const adminRouter = Router();


  adminRouter.post("/signup", (req, res) => {
    res.json(
      {message: "signup endpoint"}
    )
  })
  
  adminRouter.post("/signin", (req, res) => {
    res.json(
      {message: "signin endpoint"}
    )
  })
  
  adminRouter.post("/", (req, res) => {
    res.json(
      {message: "course creation endpoint"}
    )
  })

  adminRouter.put("/", (req, res) => {
    res.json(
      {message: "course modify endpoint"}
    )
  })

  adminRouter.get("/bulk", (req, res) => {
    res.json(
      {message: "course creation endpoint"}
    )
  })

module.exports = {
  adminRouter: adminRouter
}
