import { ContractStatus } from "@prisma/client";

const allowedTransitions: Record<ContractStatus, ContractStatus[]> = {
  CREATED: ["APPROVED", "REVOKED"],
  APPROVED: ["SENT"],
  SENT: ["SIGNED", "REVOKED"],
  SIGNED: ["LOCKED"],
  LOCKED: [],
  REVOKED: []
};

export function validateTransition(
  current: ContractStatus,
  next: ContractStatus
) {
  if (!allowedTransitions[current].includes(next)) {
    throw new Error(
      `Invalid lifecycle transition from ${current} to ${next}`
    );
  }
}
