import { FeaturedProject } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
	project: FeaturedProject;
}

export default function ProjectCard({ project }: ProjectCardProps) {
	return (
		<article className="group">
			{/* Project Image */}
			<Link
				href={`/projects/${project.slug}`}
				className="block overflow-hidden rounded-xl"
			>
				<div className="relative aspect-video overflow-hidden">
					<Image
						src={project.image}
						alt={project.title}
						fill
						className="object-cover transition-transform duration-500 group-hover:scale-105"
					/>
				</div>
			</Link>

			{/* Project Information */}
			<div className="mt-5">
				<div className="flex items-start justify-between gap-4">
					<h3 className="text-xl font-semibold tracking-tight">
						{project.title}
					</h3>

					<Link
						href={`/projects/${project.slug}`}
						className="text-sm opacity-60 transition-opacity group-hover:opacity-100"
						aria-label={`View ${project.title} project`}
					>
						↗
					</Link>
				</div>

				<p className="mt-2 text-sm leading-6 opacity-60">
					{project.description}
				</p>

				{/* Technologies */}
				<div className="mt-4 flex flex-wrap gap-2">
					{project.technologies.map((technology) => (
						<span
							key={technology}
							className="rounded-full border border-white/10 px-3 py-1 text-xs opacity-70"
						>
							{technology}
						</span>
					))}
				</div>
			</div>
		</article>
	);
}
