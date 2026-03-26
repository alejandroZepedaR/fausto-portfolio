import { ProjectType } from "@/lib/projects";
export const ProjectCard = ({ project }: { project: ProjectType }) => {
  return (
    <div className="card card-side bg-base-200 shadow-sm">
      {project.image && (
        <figure className="w-32 shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-32 h-full object-cover"
          />
        </figure>
      )}
      <div className="card-body">
        <h2 className="card-title">{project.title}</h2>
        <p>{project.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View</button>
        </div>
      </div>
    </div>
  );
};
