import { allProjects } from "@/data/allprojects";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ProjectPageProps {
	params: Promise<{
		slug: string;
	}>;
}

export function generateStaticParams() {
	return allProjects.map((project) => ({
		slug: project.slug,
	}));
}

function isYouTubeUrl(url: string): boolean {
	return (
		url.includes("youtube.com") ||
		url.includes("youtu.be")
	);
}

function getYouTubeEmbedUrl(url: string): string {
	try {
		const parsedUrl = new URL(url);

		if (parsedUrl.hostname.includes("youtu.be")) {
			return `https://www.youtube.com/embed/${parsedUrl.pathname.slice(1)}`;
		}

		const videoId = parsedUrl.searchParams.get("v");

		if (videoId) {
			return `https://www.youtube.com/embed/${videoId}`;
		}

		return url;
	} catch {
		return url;
	}
}

export default async function ProjectPage({
	params,
}: ProjectPageProps) {
	const { slug } = await params;

	const project = allProjects.find(
		(project) => project.slug === slug,
	);

	if (!project) {
		notFound();
	}

	return (
		<main>
			{/* Hero */}
			<section className="border-b border-white/10">
				<div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">

					{/* Back */}
					<Link
						href="/projects"
						className="inline-flex items-center gap-2 text-sm text-white/40 transition-colors hover:text-white"
					>
						<span>←</span>
						<span>Back to Projects</span>
					</Link>

					{/* Title */}
					<div className="mt-12">
						<p className="text-sm font-medium uppercase tracking-[0.2em] text-white/40">
							{project.section}
						</p>

						<h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl">
							{project.title}
						</h1>

						<p className="mt-6 max-w-3xl text-lg leading-8 text-white/50">
							{project.description}
						</p>
					</div>
				</div>
			</section>

			{/* Video */}
			<section>
				<div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">

					<div className="overflow-hidden rounded-2xl border border-white/10 bg-black">
						{isYouTubeUrl(project.videoLink) ? (
							<div className="aspect-video">
								<iframe
									src={getYouTubeEmbedUrl(
										project.videoLink,
									)}
									title={`${project.title} video`}
									className="h-full w-full"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									allowFullScreen
								/>
							</div>
						) : (
							<video
								className="block aspect-video w-full object-contain"
								controls
								playsInline
								preload="metadata"
								poster={project.image}
							>
								<source
									src={project.videoLink}
									type="video/mp4"
								/>

								Your browser does not support the video tag.
							</video>
						)}
					</div>

				</div>
			</section>

			{/* Project Information */}
			<section className="border-t border-white/10">
				<div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">

					<div className="grid gap-12 md:grid-cols-[1fr_320px]">

						{/* Description */}
						<div>
							<p className="text-sm font-medium uppercase tracking-[0.2em] text-white/40">
								About the Project
							</p>

							<h2 className="mt-4 text-3xl font-semibold tracking-tight">
								{project.title}
							</h2>

							<p className="mt-6 max-w-3xl text-base leading-8 text-white/50">
								{project.description}
							</p>
						</div>

						{/* Metadata */}
						<aside className="space-y-8">

							{/* Technologies */}
							<div>
								<p className="text-xs font-medium uppercase tracking-[0.15em] text-white/30">
									Technology
								</p>

								<div className="mt-3 flex flex-wrap gap-2">
									{project.technologies.map(
										(technology) => (
											<span
												key={technology}
												className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/50"
											>
												{technology}
											</span>
										),
									)}
								</div>
							</div>

							{/* Platforms */}
							<div>
								<p className="text-xs font-medium uppercase tracking-[0.15em] text-white/30">
									Platform
								</p>

								<div className="mt-3 flex flex-wrap gap-2">
									{project.platforms.map(
										(platform) => (
											<span
												key={platform}
												className="text-sm text-white/50"
											>
												{platform}
											</span>
										),
									)}
								</div>
							</div>

							{/* Date */}
							<div>
								<p className="text-xs font-medium uppercase tracking-[0.15em] text-white/30">
									Date
								</p>

								<p className="mt-3 text-sm text-white/50">
									{project.datetime}
								</p>
							</div>

							{/* GitHub */}
							{project.github && (
								<div>
									<a
										href={project.github}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
									>
										View on GitHub
										<span>↗</span>
									</a>
								</div>
							)}

						</aside>
					</div>
				</div>
			</section>
		</main>
	);
}
