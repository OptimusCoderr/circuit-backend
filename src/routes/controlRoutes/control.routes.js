// routes/controlRoutes.js
import express from "express";
import { 
  updateCircuitState, 
  updateCircuitState1,
  getCircuitState,
  getCircuitState1, 
  getCircuitStateHistory 
} from "../../controllers/circuitControlControllers/control.controller.js"; // Adjust path as needed

const router = express.Router();

// POST routes to update circuit states (send 1 or 0 from frontend)
router.post("/circuit-state", updateCircuitState);
router.post("/circuit-state1", updateCircuitState1);

// GET routes to retrieve individual circuit states
router.get("/circuit-state", getCircuitState);
router.get("/circuit-state1", getCircuitState1);

// GET route to retrieve circuit state history (optional)
router.get("/circuit-state/history", getCircuitStateHistory);

export default router;
