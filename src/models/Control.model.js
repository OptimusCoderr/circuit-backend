import mongoose from "mongoose";

const controlSchema = new mongoose.Schema({
  circuitstate: {
    type: String,
  },
  circuitstate1: {
    type: String,
  },
}, {timestamps: true}

);

const Control = mongoose.model("Control", controlSchema);
export default Control;
