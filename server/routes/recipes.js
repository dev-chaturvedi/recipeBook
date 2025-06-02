import express from "express";
import jwt from "jsonwebtoken";
import Recipe from "../models/Recipe.js";

const router = express.Router();

function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.sendStatus(401);
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch {
    res.sendStatus(403);
  }
}

router.post("/", authMiddleware, async (req, res) => {
  const recipe = new Recipe({ ...req.body, createdBy: req.userId });
  await recipe.save();
  res.status(201).json(recipe);
});

router.get("/", async (req, res) => {
  const recipes = await Recipe.find().populate("createdBy", "username");
  res.json(recipes);
});

router.put("/:id", authMiddleware, async (req, res) => {
  const updated = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete("/:id", authMiddleware, async (req, res) => {
  await Recipe.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

export default router;
