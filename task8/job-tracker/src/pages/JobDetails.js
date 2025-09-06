import { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { JobsContext } from "../context/JobsContext";

export default function JobDetails() {
  const { id } = useParams();
  const { jobs, updateJob, deleteJob } = useContext(JobsContext);
  const navigate = useNavigate();

  const job = jobs.find((job) => job.id === Number(id));

  // حالات الفورم
  const [company, setCompany] = useState(job?.company || "");
  const [title, setTitle] = useState(job?.title || "");
  const [status, setStatus] = useState(job?.status || "Applied");
  const [date, setDate] = useState(job?.date || "");
  const [notes, setNotes] = useState(job?.notes || "");

  if (!job) return <p>Job not found</p>;

  const handleSave = (e) => {
    e.preventDefault();
    updateJob(job.id, { company, title, status, date, notes });
    alert("Job updated successfully!");
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this job?")) {
      deleteJob(job.id);
      navigate("/");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 border rounded shadow mt-6">
      <h1 className="text-2xl font-bold mb-4">Edit Job</h1>

      <form onSubmit={handleSave} className="flex flex-col gap-3">
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Company"
          className="p-2 border rounded"
          required
        />
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="p-2 border rounded"
          required
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="Applied">Applied</option>
          <option value="Interviewing">Interviewing</option>
          <option value="Offer">Offer</option>
          <option value="Rejected">Rejected</option>
        </select>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="p-2 border rounded"
          required
        />
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Notes"
          className="p-2 border rounded"
        />

        <div className="flex gap-2 mt-2">
          <button
            type="submit"
            className="px-4 py-2 bg-yellow-400 text-white rounded hover:bg-yellow-500"
          >
            Save
          </button>
          <button
            type="button"
            onClick={handleDelete}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Delete
          </button>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
}
