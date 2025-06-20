// routes/controlRoutes.js
import express from "express";
import { 
  updateCircuitState, 
  getCircuitState, 
  getCircuitStateHistory 
} from "../../controllers/circuitControlControllers/control.controller.js"; // Adjust path as needed

const router = express.Router();

// POST route to update circuit state (send 1 or 0 from frontend)
router.post("/circuit-state", updateCircuitState);

// GET route to retrieve current circuit state
router.get("/circuit-state", getCircuitState);

// GET route to retrieve circuit state history (optional)
router.get("/circuit-state/history", getCircuitStateHistory);

export default router;