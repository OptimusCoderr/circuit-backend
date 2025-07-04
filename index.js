import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import authRoutes from "./src/routes/authRoutes/auth.routes.js";
import circuitRoutes from "./src/routes/circuitRoutes/circuit.routes.js";
import energyRoutes from "./src/routes/energyRoutes/energy.routes.js";
import controlRoutes from "./src/routes/controlRoutes/control.routes.js";
import { connectDB } from "./src/lib/connectDB.js";
import mongoose from 'mongoose';



dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(cors({ 
  origin: [
    "https://circuit-monitor.vercel.app",
    "https://optimuscoderr.github.io/circuit-frontend/",
    "https://optimuscoderr.github.io",
    "https://circuit-frontend-kappa.vercel.app",
    "https://circuit-frontend-chi.vercel.app",
    "http://localhost:5173"

  ],
  credentials: true 
}));

app.use(express.json()); // allows us to parse incoming requests:req.body
app.use(cookieParser()); // allows us to parse incoming cookies





// Import routes
app.use("/api/auth", authRoutes);
app.use("/api/circuit",circuitRoutes);
app.use("/api/energy", energyRoutes);
app.use("/api/control", controlRoutes);





async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
  app.use("/", (req, res) => {
    res.send("Circuit Store Server is running!");
  });
}

main().then(() => console.log("Mongodb connect successfully!")).catch(err => console.log(err));

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
