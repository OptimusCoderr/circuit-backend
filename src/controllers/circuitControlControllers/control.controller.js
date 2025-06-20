// controllers/controlController.js
import Control from "../../models/Control.model.js"; // Adjust path as needed

// Controller to update circuit state
export const updateCircuitState = async (req, res) => {
  try {
    const { circuitstate } = req.body;
    
    // Validate input - should be "0" or "1"
    if (circuitstate !== "0" && circuitstate !== "1") {
      return res.status(400).json({
        success: false,
        message: "Circuit state must be '0' or '1'"
      });
    }

    // Find existing control document or create new one
    let control = await Control.findOne();
    
    if (control) {
      // Update existing document
      control.circuitstate = circuitstate;
      await control.save();
    } else {
      // Create new document if none exists
      control = new Control({ circuitstate });
      await control.save();
    }

    res.status(200).json({
      success: true,
      message: "Circuit state updated successfully",
      data: control
    });

  } catch (error) {
    console.error("Error updating circuit state:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message
    });
  }
};

// Controller to get current circuit state
export const getCircuitState = async (req, res) => {
  try {
    const control = await Control.findOne().sort({ createdAt: -1 });
    
    if (!control) {
      return res.status(404).json({
        success: false,
        message: "No circuit state found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Circuit state retrieved successfully",
      data: control
    });

  } catch (error) {
    console.error("Error getting circuit state:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message
    });
  }
};

// Controller to get all circuit state history
export const getCircuitStateHistory = async (req, res) => {
  try {
    const controls = await Control.find().sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      message: "Circuit state history retrieved successfully",
      data: controls,
      count: controls.length
    });

  } catch (error) {
    console.error("Error getting circuit state history:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message
    });
  }
};