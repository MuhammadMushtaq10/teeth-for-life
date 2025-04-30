import logo from "../assets/logo.jpg";
import heroImg from "../assets/clinic-hero.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <div
        className="h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-center relative"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10">
          <img
            src={logo}
            alt="Teeth For Life Logo"
            className="w-44 mx-auto mb-6 rounded-xl border-4 border-primaryBlue bg-white p-2"
          />
          <h1 className="text-5xl font-bold text-white mb-4 drop-shadow">
            Welcome to Teeth For Life 🦷
          </h1>
          <p className="text-lg text-gray-100 mb-6 max-w-2xl mx-auto leading-relaxed">
            Providing expert dental care with a gentle touch. Book your appointment today and experience professional, safe, and affordable dental services.
          </p>
          <Link to="/appointment">
            <button className="px-8 py-3 bg-primaryBlue text-white rounded-xl text-lg hover:bg-primaryBlue/90 transition shadow-lg">
              Book Appointment
            </button>
          </Link>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-4xl font-bold text-primaryBlue text-center mb-10">Our Services</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-cyan-50 rounded-xl shadow hover:scale-[1.03] transition text-center">
            <p className="text-5xl mb-4">🦷</p>
            <h3 className="text-xl font-semibold mb-2">Routine Dental Checkup</h3>
            <p className="text-gray-600 text-sm">Regular oral exams to maintain dental health.</p>
          </div>

          <div className="p-6 bg-cyan-50 rounded-xl shadow hover:scale-[1.03] transition text-center">
            <p className="text-5xl mb-4">✨</p>
            <h3 className="text-xl font-semibold mb-2">Scaling and Polishing</h3>
            <p className="text-gray-600 text-sm">Professional cleaning for healthy gums and bright teeth.</p>
          </div>

          <div className="p-6 bg-cyan-50 rounded-xl shadow hover:scale-[1.03] transition text-center">
            <p className="text-5xl mb-4">😁</p>
            <h3 className="text-xl font-semibold mb-2">Teeth Whitening</h3>
            <p className="text-gray-600 text-sm">Advanced whitening treatments for a radiant smile.</p>
          </div>

          <div className="p-6 bg-cyan-50 rounded-xl shadow hover:scale-[1.03] transition text-center">
            <p className="text-5xl mb-4">🛠️</p>
            <h3 className="text-xl font-semibold mb-2">Dental Fillings</h3>
            <p className="text-gray-600 text-sm">Quick restoration of decayed or damaged teeth.</p>
          </div>

          <div className="p-6 bg-cyan-50 rounded-xl shadow hover:scale-[1.03] transition text-center">
            <p className="text-5xl mb-4">🦷</p>
            <h3 className="text-xl font-semibold mb-2">Root Canal Treatment</h3>
            <p className="text-gray-600 text-sm">Save infected teeth with expert root canal care.</p>
          </div>

          <div className="p-6 bg-cyan-50 rounded-xl shadow hover:scale-[1.03] transition text-center">
            <p className="text-5xl mb-4">🦷</p>
            <h3 className="text-xl font-semibold mb-2">Tooth Extraction</h3>
            <p className="text-gray-600 text-sm">Safe and gentle removal of problematic teeth.</p>
          </div>

          <div className="p-6 bg-cyan-50 rounded-xl shadow hover:scale-[1.03] transition text-center">
            <p className="text-5xl mb-4">🦷</p>
            <h3 className="text-xl font-semibold mb-2">Dentures and Bridges</h3>
            <p className="text-gray-600 text-sm">Restoring your smile and bite with prosthetics.</p>
          </div>

          <div className="p-6 bg-cyan-50 rounded-xl shadow hover:scale-[1.03] transition text-center">
            <p className="text-5xl mb-4">🦷</p>
            <h3 className="text-xl font-semibold mb-2">Dental Implantation</h3>
            <p className="text-gray-600 text-sm">Permanent solutions for missing teeth.</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;
