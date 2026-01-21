import { Request, Response } from "express";
import { prisma } from "../prisma";
import { validateTransition } from "../services/lifecycle.service";
import {
  createContractSchema,
  transitionSchema
} from "../validators/contract.validator";

export const createContract = async (req: Request, res: Response) => {
  const parsed = createContractSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json(parsed.error);
  }

  const blueprint = await prisma.blueprint.findUnique({
    where: { id: parsed.data.blueprintId }
  });

  if (!blueprint) {
    return res.status(404).json({ message: "Blueprint not found" });
  }

  const contract = await prisma.contract.create({
    data: {
      name: parsed.data.name,
      blueprintId: blueprint.id,
      fields: parsed.data.fields
    }
  });

  res.status(201).json(contract);
};

export const getContracts = async (_: Request, res: Response) => {
  const contracts = await prisma.contract.findMany({
    include: { blueprint: true }
  });
  res.json(contracts);
};

export const transitionContract = async (req: Request, res: Response) => {
  const parsed = transitionSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json(parsed.error);
  }

  const contract = await prisma.contract.findUnique({
    where: { id: req.params.id }
  });

  if (!contract) {
    return res.status(404).json({ message: "Contract not found" });
  }

  validateTransition(contract.status, parsed.data.status);

  const updated = await prisma.contract.update({
    where: { id: contract.id },
    data: { status: parsed.data.status }
  });

  res.json(updated);
};
