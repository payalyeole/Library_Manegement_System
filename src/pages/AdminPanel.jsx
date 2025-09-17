import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../utils/auth";

export default function AdminPanel() {
  const { token, user, logout } = useAuth();
  const [stats, setStats] = useState(null);
  const [err, setErr] = useState("");

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await axios.get("http://localhost:8080/api/admin/stats", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setStats(res.data);
      } catch (e) {
        setErr("Failed to load stats");
      }
    }
    fetchStats();
  }, [token]);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-blue-700">Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <div className="text-gray-700">Hi, <span className="font-semibold">{user?.username}</span></div>
            <button
              onClick={logout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </div>

        {err && <div className="text-red-600 mb-4">{err}</div>}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-sm text-gray-500">Total Books</h3>
            <div className="text-3xl font-bold text-blue-700 mt-2">{stats?.totalBooks ?? "—"}</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-sm text-gray-500">Total Students</h3>
            <div className="text-3xl font-bold text-blue-700 mt-2">{stats?.totalStudents ?? "—"}</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-sm text-gray-500">Books Issued</h3>
            <div className="text-3xl font-bold text-blue-700 mt-2">{stats?.booksIssued ?? "—"}</div>
          </div>
        </div>

        {/* Add more admin widgets here */}
      </div>
    </div>
  );
}
