"use client";

import { useState } from "react";
import Link from "next/link";
import { allProjects, platforms, sections, technologies } from "@/data/allprojects";
import Image from "next/image";

export default function ProjectsPage() {
	const [activeSection, setActiveSection] = useState("All");
	const [activeTechnology, setActiveTechnology] = useState("All");
	const [activePlatform, setActivePlatform] = useState("All");

	/*
	 * Projects belonging to the currently selected section.
	 */
	const sectionProjects =
		activeSection === "All"
			? allProjects
			: allProjects.filter(
				(project) => project.section === activeSection,
			);

	/*
	 * Find which technologies are actually available
	 * inside the selected section.
	 */
	const availableTechnologies = new Set(
		sectionProjects.flatMap((project) => project.technologies),
	);

	/*
	 * Find which platforms are actually available
	 * inside the selected section.
	 */
	const availablePlatforms = new Set(
		sectionProjects.flatMap((project) => project.platforms),
	);

	/*
	 * Apply technology + platform filters.
	 *
	 * Projects are sorted from latest to oldest.
	 */
	const filteredProjects = sectionProjects
		.filter((project) => {
			if (activeTechnology === "All") {
				return true;
			}

			return project.technologies.includes(activeTechnology);
		})
		.filter((project) => {
			if (activePlatform === "All") {
				return true;
			}

			return project.platforms.includes(activePlatform);
		});
	// .sort((projectA, projectB) =>
	//     projectB.date.localeCompare(projectA.date),
	// );

	return (
		<main>
			{/* Hero */}
			<section className="border-b border-white/10">
				<div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
					<p className="text-sm font-medium uppercase tracking-[0.2em] text-white/40">
						Projects
					</p>

					<h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
						Things I&apos;ve built,
						<br />
						explored, and engineered.
					</h1>

					<p className="mt-8 max-w-2xl text-lg leading-8 text-white/60">
						A collection of graphics, GPU computing, rendering,
						and systems programming projects developed through
						experimentation and practical engineering.
					</p>
				</div>
			</section>

			{/* Filters */}
			<section className="border-b border-white/10">
				<div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
					{/* Section */}
					<div className="flex items-start gap-4">
						<span className="w-24 shrink-0 pt-2 text-xs font-medium uppercase tracking-[0.15em] text-white/30">
							Section
						</span>

						<div className="flex flex-1 gap-2 overflow-x-auto pb-1">
							{sections.map((section) => {
								const isActive =
									activeSection === section;

								return (
									<button
										key={section}
										type="button"
										onClick={() => {
											setActiveSection(section);

											/*
											 * Reset dependent filters when
											 * changing the section.
											 */
											setActiveTechnology("All");
											setActivePlatform("All");
										}}
										className={`shrink-0 rounded-full border px-4 py-2 text-xs font-medium transition-colors ${isActive
											? "border-white bg-white text-black"
											: "border-white/10 text-white/40 hover:border-white/30 hover:text-white"
											}`}
									>
										{section}
									</button>
								);
							})}
						</div>
					</div>

					{/* Technology */}
					<div className="mt-4 flex items-start gap-4">
						<span className="w-24 shrink-0 pt-2 text-xs font-medium uppercase tracking-[0.15em] text-white/30">
							Technology
						</span>

						<div className="flex flex-1 gap-2 overflow-x-auto pb-1">
							{technologies.map((technology) => {
								const isActive =
									activeTechnology === technology;

								const isAvailable =
									technology === "All" ||
									availableTechnologies.has(
										technology,
									);

								return (
									<button
										key={technology}
										type="button"
										disabled={!isAvailable}
										onClick={() => {
											if (isAvailable) {
												setActiveTechnology(
													technology,
												);
											}
										}}
										className={`shrink-0 rounded-full border px-4 py-2 text-xs font-medium transition-colors ${isActive
											? "border-white bg-white text-black"
											: isAvailable
												? "border-white/10 text-white/40 hover:border-white/30 hover:text-white"
												: "cursor-not-allowed border-white/5 text-white/10"
											}`}
									>
										{technology}
									</button>
								);
							})}
						</div>
					</div>

					{/* Platform */}
					<div className="mt-4 flex items-start gap-4">
						<span className="w-24 shrink-0 pt-2 text-xs font-medium uppercase tracking-[0.15em] text-white/30">
							Platform
						</span>

						<div className="flex flex-1 gap-2 overflow-x-auto pb-1">
							{platforms.map((platform) => {
								const isActive =
									activePlatform === platform;

								const isAvailable =
									platform === "All" ||
									availablePlatforms.has(platform);

								return (
									<button
										key={platform}
										type="button"
										disabled={!isAvailable}
										onClick={() => {
											if (isAvailable) {
												setActivePlatform(
													platform,
												);
											}
										}}
										className={`shrink-0 rounded-full border px-4 py-2 text-xs font-medium transition-colors ${isActive
											? "border-white bg-white text-black"
											: isAvailable
												? "border-white/10 text-white/40 hover:border-white/30 hover:text-white"
												: "cursor-not-allowed border-white/5 text-white/10"
											}`}
									>
										{platform}
									</button>
								);
							})}
						</div>
					</div>
				</div>
			</section>

			{/* Project List */}
			<section>
				<div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
					{/* Result Header */}
					<div className="mb-12 flex items-end justify-between gap-6">
						<div>
							<p className="text-sm font-medium uppercase tracking-[0.2em] text-white/40">
								Selected Work
							</p>

							<h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
								{activeSection === "All"
									? "All Projects"
									: activeSection}
							</h2>
						</div>

						<p className="text-sm text-white/30">
							{filteredProjects.length}{" "}
							{filteredProjects.length === 1
								? "Project"
								: "Projects"}
						</p>
					</div>

					{/* Projects */}
					{filteredProjects.length > 0 ? (
						<div className="divide-y divide-white/10">
							{filteredProjects.map((project, index) => (
								<Link
									key={project.slug}
									href={`/projects/${project.slug}`}
									className="group block py-8 first:pt-0 last:pb-0"
								>
									<div className="flex gap-5 md:gap-8">
										{/* Thumbnail */}
										<div className="relative h-24 w-32 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] sm:h-28 sm:w-44 md:h-32 md:w-52">
											<Image
												src={project.image}
												alt={project.title}
												width={200}
												height={150}
												className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
											/>
										</div>

										{/* Content */}
										<div className="min-w-0 flex-1">
											{/* Number + Title + Date */}
											<div className="flex items-start gap-4">
												{/* Number */}
												<span className="hidden pt-1 text-xs text-white/30 lg:block">
													{String(filteredProjects.length - index).padStart(2, "0")}
												</span>

												<div className="min-w-0 flex-1">
													{/* Title + Date + Arrow */}
													<div className="flex items-start justify-between gap-4">
														<div className="flex min-w-0 flex-wrap items-center gap-3">
															<h3 className="text-lg font-medium tracking-tight transition-colors group-hover:text-white/70 sm:text-xl md:text-2xl">
																{project.title}
															</h3>

															<span className="hidden shrink-0 text-xs text-white/30 sm:block">
																{new Date(
																	project.datetime
																).toLocaleDateString()}
															</span>
														</div>

														<span className="shrink-0 text-lg text-white/30 transition-all group-hover:translate-x-1 group-hover:text-white">
															↗
														</span>
													</div>

													{/* Mobile Date */}
													<div className="mt-2 sm:hidden">
														<span className="text-xs text-white/30">
															{new Date(
																project.datetime
															).toLocaleDateString()}
														</span>
													</div>

													{/* Description */}
													<p className="mt-3 max-w-2xl text-sm leading-7 text-white/50">
														{project.description}
													</p>

													{/* Technologies */}
													{project.technologies.length > 0 && (
														<div className="mt-4 flex flex-wrap gap-2">
															{project.technologies.map(
																(technology) => (
																	<span
																		key={technology}
																		className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/40"
																	>
																		{technology}
																	</span>
																)
															)}
														</div>
													)}

													{/* Platforms */}
													<div className="mt-3 flex flex-wrap gap-2">
														{project.platforms.map((platform) => (
															<span
																key={platform}
																className="text-xs text-white/30"
															>
																{platform}
															</span>
														))}
													</div>
												</div>
											</div>
										</div>
									</div>
								</Link>
							))}
						</div>
					) : (
						<div className="border-y border-white/10 py-20 text-center">
							<p className="text-sm text-white/40">
								No projects found matching the selected
								filters.
							</p>

							<button
								type="button"
								onClick={() => {
									setActiveSection("All");
									setActiveTechnology("All");
									setActivePlatform("All");
								}}
								className="mt-5 text-sm text-white/60 underline underline-offset-4 transition-colors hover:text-white"
							>
								Clear filters
							</button>
						</div>
					)}
				</div>
			</section>
		</main>
	);
}

