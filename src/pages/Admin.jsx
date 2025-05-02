import { useEffect, useState } from "react";

function Admin() {
  const [appointments, setAppointments] = useState([]);

  // Fetch appointments from backend
  const fetchAppointments = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/appointments");
      const data = await res.json();
      setAppointments(data);
    } catch (err) {
      console.error("Error fetching appointments:", err);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <div className="min-h-screen bg-white p-6 md:p-12">
      <h1 className="text-4xl font-bold text-primaryBlue mb-8 text-center">📋 All Appointments</h1>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 rounded-xl shadow">
          <thead className="bg-primaryBlue text-white">
            <tr>
              <th className="p-3">Patient Name</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Date</th>
              <th className="p-3">Time</th>
              <th className="p-3">Service</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appt) => (
              <tr key={appt._id} className="border-b text-center hover:bg-cyan-50 transition">
                <td className="p-3">{appt.name}</td>
                <td className="p-3">{appt.phone}</td>
                <td className="p-3">{appt.date}</td>
                <td className="p-3">{appt.time}</td>
                <td className="p-3">{appt.service}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;
