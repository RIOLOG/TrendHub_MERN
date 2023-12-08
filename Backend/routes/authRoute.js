const express = require('express');
const { registerController, loginController, testController } = require('../controllers/authController');
const {requireSignIn, isAdmin}  = require('../middlewares/authMiddleware')


// Routing to different pages:
const router = express.Router();

// Making APIs:

// Register
router.post("/register", async (req, res) => {
  try
   {
    await registerController(req, res);
  } 
  catch (error)
   {

    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Login
router.post("/login", async (req, res) => {
  try 
  {
    await loginController(req, res);
  } 
  catch (error) 
  {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});


//jwt check route nromal user
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ok:true});
});


//jwt check route admin user
router.get("/admin-auth", requireSignIn, isAdmin ,(req, res) => {
  res.status(200).send({ok:true});
});



//test
router.get('/test',requireSignIn,isAdmin, testController)

module.exports = router;
