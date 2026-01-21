import { Router } from "express";
import {
  createContract,
  getContracts,
  transitionContract
} from "../controllers/contract.controller";

const router = Router();

router.post("/", createContract);
router.get("/", getContracts);
router.post("/:id/transition", transitionContract);

export default router;
