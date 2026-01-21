import { Router } from "express";
import {
  createBlueprint,
  getBlueprints,
  getBlueprintById
} from "../controllers/blueprint.controller";

const router = Router();

router.post("/", createBlueprint);
router.get("/", getBlueprints);
router.get("/:id", getBlueprintById);

export default router;
