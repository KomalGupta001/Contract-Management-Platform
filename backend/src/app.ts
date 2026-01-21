import express from "express";
import cors from "cors";
import blueprintRoutes from "./routes/blueprint.routes";
import contractRoutes from "./routes/contract.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/blueprints", blueprintRoutes);
app.use("/api/contracts", contractRoutes);

export default app;
