import jwt from "jsonwebtoken";
import { errorHandler } from '../utils/error.js';

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(errorHandler(401, "unauthorized"));
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return next(errorHandler,(40))
    }
    req.user = user;
    next();
  });
};
