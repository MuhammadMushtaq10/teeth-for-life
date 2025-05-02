import { useState } from "react";

function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    service: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:5000/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert("Appointment booked successfully!");
        setFormData({
          name: "",
          phone: "",
          date: "",
          time: "",
          service: "",
        });
      } else {
        alert("Failed to book appointment");
      }
    } catch (error) {
      console.error("Error booking appointment:", error);
    }
  };
  

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12">
      <h1 className="text-4xl font-bold text-primaryBlue mb-8 text-center">Book an Appointment 🦷</h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-cyan-50 p-8 rounded-xl shadow-lg space-y-6"
      >
        <div>
          <label className="block mb-2 text-gray-700">Patient Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryBlue"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-700">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryBlue"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 text-gray-700">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryBlue"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700">Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryBlue"
            />
          </div>
        </div>

        <div>
          <label className="block mb-2 text-gray-700">Select Service</label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryBlue"
          >
            <option value="">Choose a service</option>
            <option>Routine Dental Checkup</option>
            <option>Scaling and Polishing</option>
            <option>Teeth Whitening</option>
            <option>Dental Fillings</option>
            <option>Root Canal Treatment</option>
            <option>Tooth Extraction</option>
            <option>Dentures and Bridges</option>
            <option>Dental Implantation</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-primaryBlue text-white py-3 rounded-lg text-lg hover:bg-primaryBlue/90 transition shadow"
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
}

export default Appointment;
