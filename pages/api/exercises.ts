// pages/api/exercises/index.js
import { promises as fs } from "fs";
import path from "path";
import type { NextApiRequest, NextApiResponse } from "next";

const DATA_FILE = path.join(process.cwd(), "data", "exercises.json");

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const newExercise = req.body;

    try {
      const data = await fs.readFile(DATA_FILE, "utf8");
      const exercises = JSON.parse(data);
      exercises.push(newExercise);
      await fs.writeFile(DATA_FILE, JSON.stringify(exercises, null, 2));
      res.status(201).json(newExercise);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
};
