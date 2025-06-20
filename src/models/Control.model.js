import mongoose from "mongoose";

const controlSchema = new mongoose.Schema({

  circuitstate: {
    type: String,
  },
}, {timestamps: true}

);

const Control = mongoose.model("Control", controlSchema);
export default Control;