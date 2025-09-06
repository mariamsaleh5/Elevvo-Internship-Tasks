import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const earningsData = [
  { month: "Jan", earnings: 400 },
  { month: "Feb", earnings: 800 },
  { month: "Mar", earnings: 1200 },
  { month: "Apr", earnings: 600 },
  { month: "May", earnings: 1500 },
  { month: "Jun", earnings: 2000 },
];

const taskData = [
  { name: "Development", value: 40 },
  { name: "Design", value: 25 },
  { name: "Testing", value: 20 },
  { name: "Meetings", value: 15 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Overview = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-300 shadow rounded-2xl p-4">
          <h3 className="text-lg font-semibold">Total Projects</h3>
          <p className="text-2xl font-bold mt-2">12</p>
        </div>

        <div className="bg-gray-300 shadow rounded-2xl p-4">
          <h3 className="text-lg font-semibold">Earnings</h3>
          <p className="text-2xl font-bold mt-2">$4,500</p>
        </div>

        <div className="bg-gray-300 shadow rounded-2xl p-4">
          <h3 className="text-lg font-semibold">Tasks Due</h3>
          <p className="text-2xl font-bold mt-2">7</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white shadow rounded-2xl p-4">
        <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
        <ul className="space-y-2">
          <li className="border-b pb-2">✅ Completed task: Design Landing Page</li>
          <li className="border-b pb-2">📂 New project created: Dashboard App</li>
          <li className="border-b pb-2">💰 Payment received: $800</li>
          <li>📝 Task assigned: Fix login bug</li>
        </ul>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <div className="bg-white shadow rounded-2xl p-4">
          <h3 className="text-lg font-semibold mb-4 text-blue-600">
            Monthly Earnings
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={earningsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="earnings" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white shadow rounded-2xl p-4">
          <h3 className="text-lg font-semibold mb-4 text-purple-600">
            Task Distribution
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={taskData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {taskData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Extra Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-2xl p-4">
          <h3 className="text-lg font-semibold text-green-600">Completed Tasks</h3>
          <p className="text-2xl font-bold mt-2">45</p>
        </div>

        <div className="bg-white shadow rounded-2xl p-4">
          <h3 className="text-lg font-semibold text-green-600">Active Clients</h3>
          <p className="text-2xl font-bold mt-2">8</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
