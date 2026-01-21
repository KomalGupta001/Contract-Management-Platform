import { z } from "zod";
import { ContractStatus } from "@prisma/client";

export const createContractSchema = z.object({
  name: z.string(),
  blueprintId: z.string(),
  fields: z.array(z.any())
});

export const transitionSchema = z.object({
  status: z.nativeEnum(ContractStatus)
});
