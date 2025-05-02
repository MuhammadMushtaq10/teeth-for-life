import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-primaryBlue">
      <h2 className="text-2xl font-bold text-white">Teeth For Life 🦷</h2>
      <div className="flex gap-6">
        <Link to="/" className="text-white font-medium text-lg hover:text-blue-600">Home</Link>
        <Link to="/about" className="text-white font-medium text-lg hover:text-blue-600">About</Link>
        <Link to="/services" className="text-white font-medium text-lg hover:text-blue-600">Services</Link>
        <Link to="/appointment" className="text-white font-medium text-lg hover:text-blue-600">Appointment</Link>
        <Link to="/contact" className="text-white font-medium text-lg hover:text-blue-600">Contact</Link>
        <Link to="/admin" className="text-gray-800 font-medium text-lg hover:text-primaryBlue">Admin</Link>

      </div>
    </nav>
  );
};

export default Navbar;
