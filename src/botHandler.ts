import { Request, Response } from "express";
import botAdapter from "./botAdapter";

export default async (req: Request, res: Response) => {
  res.send("Boo!");
};
