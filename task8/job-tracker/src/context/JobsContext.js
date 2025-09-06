import { createContext, useState, useEffect } from "react";

export const JobsContext = createContext();

export function JobsProvider({ children }) {
 
const [jobs, setJobs] = useState(() => {
  const saved = localStorage.getItem("jobs");
  return saved
    ? JSON.parse(saved)
    : [
        { id: 1, title: "Frontend Developer", company: "Google"},
        { id: 2, title: "Backend Developer", company: "Amazon" },
      ];
});

 useEffect(() => {
  localStorage.setItem("jobs", JSON.stringify(jobs));
}, [jobs]);

  const addJob = (job) => {
    setJobs((prev) => [...prev, { id: Date.now(), ...job }]);
  };

  const updateJob = (id, data) => {
    setJobs((prev) =>
      prev.map((job) => (job.id === id ? { ...job, ...data } : job))
    );
  };

  const deleteJob = (id) => {
    setJobs((prev) => prev.filter((job) => job.id !== id));
  };

  const replaceJobs = (newJobs) => {
    setJobs(newJobs);
  };

  
  return (
    <JobsContext.Provider
      value={{ jobs, addJob, updateJob, deleteJob, replaceJobs }}
    >
      {children}
    </JobsContext.Provider>
  );
}
