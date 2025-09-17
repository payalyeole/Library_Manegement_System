import Services from "./Services";
import About from "./About";

export default function Home() {
  return (
    <div className="min-h-screen w-[1520px] flex flex-col items-center justify-center bg-gradient-to-b from-white to-blue-50 text-center p-6">
      <h2 className="text-5xl md:text-6xl font-extrabold text-blue-800 mb-6 drop-shadow">
        Welcome to <span className="text-indigo-600">LibraryMS</span>
      </h2>

      <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-10">
        A smart and modern way to manage books, students, and staff efficiently —
        making your library accessible, organized, and future-ready.
      </p>

      <div className="flex gap-6 flex-wrap justify-center">
        <button className="bg-blue-700 text-blue-500 px-8 py-3 rounded-lg shadow-lg hover:bg-blue-800 transition transform hover:scale-105">
          🚀 Get Started
        </button>
        <button className="border-2 border-blue-700 text-blue-700 px-8 py-3 rounded-lg hover:bg-blue-700 hover:text-blue-400 transition transform hover:scale-105">
          📖 Learn More
        </button>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
        <div className="p-6 bg-white shadow-lg rounded-2xl hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-blue-700 mb-2">📚 Book Management</h3>
          <p className="text-gray-600">Easily add, update, and track books in your library.</p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-2xl hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-blue-700 mb-2">👩‍🎓 Student Records</h3>
          <p className="text-gray-600">Manage student and staff profiles with ease and security.</p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-2xl hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-blue-700 mb-2">📊 Reports & Analytics</h3>
          <p className="text-gray-600">Generate insights and keep track of library activities.</p>
        </div>
      </div>

      <div className="w-full mt-20">
        <About />
      </div>

      <div className="w-full mt-20">
        <Services />
      </div>
    </div>
  );
}
