import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Appointment from "./models/Appointment.js";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://muhammadmushtaq:ncr26979@cluster0.369dkbu.mongodb.net/teethforlife?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.error(err));

// API Route to book appointment
app.post("/api/appointments", async (req, res) => {
  try {
    const newAppointment = new Appointment(req.body);
    await newAppointment.save();
    res.status(201).json({ message: "Appointment booked successfully!" });
  } catch (err) {
    res.status(500).json({ error: "Failed to book appointment" });
  }
});

// Get all appointments
app.get("/api/appointments", async (req, res) => {
    try {
      const appointments = await Appointment.find();
      res.status(200).json(appointments);
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch appointments" });
    }
  });
  

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
