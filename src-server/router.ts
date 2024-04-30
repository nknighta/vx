import express, { Request, Response } from "express";
export const router = express.Router();

router.get("/info", (req: Request, res: Response, next) => {
  res.status(200).json({name: "VX",version: "0.1.0", author: "nknight amamiya"});
});