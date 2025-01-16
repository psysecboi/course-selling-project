const { Router } = require('express');

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
  
  adminRouter.post("/course", (req, res) => {
    res.json(
      {message: "course creation endpoint"}
    )
  })

  adminRouter.put("/course", (req, res) => {
    res.json(
      {message: "course modify endpoint"}
    )
  })

  adminRouter.get("/course/bulk", (req, res) => {
    res.json(
      {message: "course creation endpoint"}
    )
  })

module.exports = {
  adminRouter: adminRouter
}
