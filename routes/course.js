const { Router } = require('express');

const courseRouter = Router();
  
  courseRouter.post("/purchase", (req, res) => {
    res.json(
      {message: "purchasing endpoint"}
    )
  })
  
  courseRouter.get("/preview", (req, res) => {
    res.json(
      {message: "courses endpoint"}
    )
  })

module.exports = {
  courseRouter: courseRouter
}