import { Request, Response } from "express";
import * as userService from "../services/userService";
import jwt from "jsonwebtoken";

export const createUser = async (req: Request, res: Response) => {
    const { email, password, passwordConfirmation } = req.body;
    if (password !== passwordConfirmation) {
      return res.status(400).json({ message: "Passwords do not match" });
    }
    try {
      const newUser = await userService.createUser({ email, password });
      res.status(201).json({ id: newUser.id, email: newUser.email });
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(400).json({ message: 'An unexpected error occurred' });
      }
    }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await userService.loginUser(email, password);
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ userId: user.id }, '647570616A616E61', { expiresIn: '1h' });
    res.json({ user: { id: user.id, email: user.email }, token });
  } catch (error) {
    if (error instanceof Error) {
        res.status(500).json({ message: error.message });
    } else {
        res.status(500).json({ message: 'An unexpected error occurred' });
    }
  }
};

export const getUser = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.userId);
  try {
    const user = await userService.getUser(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ id: user.id, email: user.email });
  } catch (error) {
    if (error instanceof Error) {
        res.status(500).json({ message: error.message });
    } else {
        res.status(500).json({ message: 'An unexpected error occurred' });
    }
  }
};
