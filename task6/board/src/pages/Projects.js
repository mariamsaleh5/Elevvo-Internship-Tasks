

export default function Projects() {
    const projects = [
        {
            name: "Project Alpha",
            status: "In Progress",
            deadline: "2025-09-30"
        },
        {
            name: "Project Beta",
            status: "Completed",
            deadline: "2026-08-15"  
        },
        {
            name: "Project Gamma",
            status: "Not Started",
            deadline: "2026-07-31"
        }
    ];
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-green-600 ">Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="border-b border-gray-200 py-4 shadow rounded-2xl p-4">
          <h3 className="text-xl font-semibold">{project.name}</h3>
          <p>Status: {project.status}</p>
          <p className="text-red-500">Deadline: {project.deadline}</p>
        </div>
      ))}
     
    </div>
  );
}
