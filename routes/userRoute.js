const express = require('express')
const userController = require('../controllers/userController')
const authController = require('../controllers/authController')
const protectedUser = require('../middlewares/auth');
const checkObjectId = require('../middlewares/checkId');
const router = express.Router()
 
router.route('/register').post(authController.signup)
router.route('/login').post(authController.loginUser)
router.route('/forgotPassword').post(authController.forgotPassword)
router.route('/resetPassword/:token').patch(authController.resetPassword)
router
  .route('/updateCurrentUser')
  .patch(protectedUser, userController.updateCurrentUser)
 
router
  .route('/deleteCurrentUser')
  .delete(protectedUser, userController.deleteCurrentUser)
 
router
  .route('/getUser')
  .get(protectedUser, userController.getCurrentUser)
 
router
  .route('/updatePassword')
  .patch(protectedUser, authController.updatePassword)
router.patch(
  '/updateUser',
  protectedUser,
  userController.updateCurrentUser
)
 
router.route('/').get(protectedUser, userController.getUsers)
 
router
  .route('/:id')
  .delete(
    protectedUser,
    authController.isAdmin,
    userController.deleteUser
  )
  .get(
    protectedUser,
    authController.isAdmin,
    userController.getUser
  )
 
module.exports = router