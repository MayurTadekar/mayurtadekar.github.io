import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid() {
    return (
        <div className="grid gap-12 md:grid-cols-3">
            {projects.map((project) => (
                <ProjectCard
                    key={project.slug}
                    project={project}
                />
            ))}
        </div>
    );
}
