export type Field = {
  type: "text" | "date" | "checkbox" | "signature";
  label: string;
  position: { x: number; y: number };
};

export type Blueprint = {
  id: string;
  name: string;
  fields: Field[];
};

export type ContractStatus =
  | "CREATED"
  | "APPROVED"
  | "SENT"
  | "SIGNED"
  | "LOCKED"
  | "REVOKED";

export type Contract = {
  id: string;
  name: string;
  status: ContractStatus;
  blueprint: Blueprint;
  createdAt: string;
};
