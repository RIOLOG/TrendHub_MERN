const express = require('express');
const { isAdmin, requireSignIn } = require('../middlewares/authMiddleware');
const {
  categoryController,
  createCategoryController,
  deleteCategoryCOntroller,
  singleCategoryController,
  updateCategoryController,
} = require('../controllers/categoryController');  

const router = express.Router();

// Routes
router.post('/create-category', requireSignIn, isAdmin, createCategoryController);
router.put('/update-category/:id', requireSignIn, isAdmin, updateCategoryController);
router.get('/get-category', categoryController); 
router.get('/single-category/:slug', singleCategoryController);
router.delete('/delete-category/:id', requireSignIn, isAdmin, deleteCategoryCOntroller);

module.exports = router;
