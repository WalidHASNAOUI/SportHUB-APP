// src/middlewares/auth.middleware.js

import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

// Export authenticateUser as a named export
export const authenticateUser = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ _id: decoded.id });

    if (!user) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    req.user = user; // Attach user to the request
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Not authorized' });
  }
};
