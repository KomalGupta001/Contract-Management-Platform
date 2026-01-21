import { Request, Response } from "express";
import { prisma } from "../prisma";
import { blueprintSchema } from "../validators/blueprint.validator";

export const createBlueprint = async (req: Request, res: Response) => {
  const parsed = blueprintSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json(parsed.error);
  }

  const blueprint = await prisma.blueprint.create({
    data: parsed.data
  });

  res.status(201).json(blueprint);
};

export const getBlueprints = async (_: Request, res: Response) => {
  const blueprints = await prisma.blueprint.findMany();
  res.json(blueprints);
};

export const getBlueprintById = async (req: Request, res: Response) => {
  const blueprint = await prisma.blueprint.findUnique({
    where: { id: req.params.id }
  });

  if (!blueprint) {
    return res.status(404).json({ message: "Blueprint not found" });
  }

  res.json(blueprint);
};
