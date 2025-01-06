import express from 'express';
import { 
  createUser, 
  getAllUsers, 
  getUserById, 
  updateUser, 
  deleteUser, 
  loginUser
} from '../controllers/user.controller.js'; // Adjust path if needed

const router = express.Router();

// User Login 
router.post('/login', loginUser)

// User Logout
// router.post('/logout', logoutUser);

// Create a new user
router.post('/signup', createUser);

// Get all users
router.get('/', getAllUsers);

// Get user by ID
router.get('/:id', getUserById);

// Update user details
router.put('/:id', updateUser);

// Delete a user
router.delete('/:id', deleteUser);

export default router;
