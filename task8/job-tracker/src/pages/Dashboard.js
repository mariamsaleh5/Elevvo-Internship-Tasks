import { useContext, useState } from "react";
import { JobsContext } from "../context/JobsContext";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const { jobs, replaceJobs } = useContext(JobsContext);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  // فلترة الوظائف + البحث
  const filteredJobs = jobs.filter(
    (job) =>
      (filter === "All" || job.status === filter) &&
      (job.title.toLowerCase().includes(search.toLowerCase()) ||
       job.company.toLowerCase().includes(search.toLowerCase()))
  );

  // Export JSON
  const handleExport = () => {
    const dataStr = JSON.stringify(jobs, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "jobs.json";
    link.click();
  };

  // Import JSON
  const handleImport = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const importedJobs = JSON.parse(event.target.result);
      replaceJobs(importedJobs);
    };
    reader.readAsText(file);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row md:justify-between mb-4 gap-2">
        <input
          type="text"
          placeholder="Search by title or company"
          className="p-2 border rounded flex-1"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="All">All Status</option>
          <option value="Applied">Applied</option>
          <option value="Interviewing">Interviewing</option>
          <option value="Offer">Offer</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>

      {/* Jobs List */}
      <div className="grid gap-4 md:grid-cols-2">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="p-4 border rounded shadow hover:shadow-md transition"
          >
            <h2 className="font-semibold text-lg">{job.title}</h2>
            <p className="text-gray-600">{job.company}</p>
            <p className="text-sm">{job.status}</p>
            <Link
              to={`/job/${job.id}`}
              className="text-blue-500 hover:underline mt-2 inline-block"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>

      {/* Export / Import */}
    <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-2">
  <button
    onClick={handleExport}
    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full sm:w-auto"
  >
    Export JSON
  </button>
  
  <input
    type="file"
    accept=".json"
    onChange={handleImport}
    className="px-4 py-2 border rounded w-full sm:w-auto"
  />
  
  <Link to="/add" className="w-full sm:w-auto">
    <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 w-full sm:w-auto">
      Add Job
    </button>
  </Link>
</div>

    </div>
  );
}
