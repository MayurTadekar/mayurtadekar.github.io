"use client";

import { useState } from "react";
import Link from "next/link";

interface Project {
    title: string;
    description: string;
    technologies: string[];
    platforms: string[];
    slug: string;
    date: string;
    section: string;
}

const sections = [
    "All",
    "RTR",
    "GPU",
    "Vulkan",
    "OpenCL",
    "Systems",
];

const technologies = [
    "All",
    "OpenGL",
    "OpenGL ES",
    "Vulkan",
    "CUDA",
    "OpenCL",
    "WebGL",
];

const platforms = [
    "All",
    "Windows",
    "Linux",
    "macOS",
    "Android",
    "iOS",
    "Web",
];

const projects: Project[] = [
    {
        title: "FFT Ocean",
        description:
            "Real-time ocean simulation using FFT-based wave generation and GPU computation.",
        technologies: ["OpenGL"],
        platforms: ["Windows", "Linux", "macOS"],
        slug: "fft-ocean",
        date: "2026-09",
        section: "RTR",
    },

    {
        title: "Atmospheric Scattering",
        description:
            "Real-time atmospheric rendering with dynamic sun positioning and volumetric scattering.",
        technologies: ["OpenGL"],
        platforms: ["Windows", "Linux", "macOS"],
        slug: "atmospheric-scattering",
        date: "2026-08",
        section: "RTR",
    },

    {
        title: "Volumetric Clouds",
        description:
            "Real-time volumetric cloud rendering using procedural techniques and GPU shaders.",
        technologies: ["OpenGL"],
        platforms: ["Windows", "Linux", "macOS"],
        slug: "volumetric-clouds",
        date: "2026-07",
        section: "RTR",
    },

    {
        title: "Procedural Fire",
        description:
            "Procedural and raymarched fire rendering implemented using GPU shaders.",
        technologies: ["OpenGL"],
        platforms: ["Windows", "Linux", "macOS"],
        slug: "procedural-fire",
        date: "2026-06",
        section: "RTR",
    },

    {
        title: "CUDA Smoke",
        description:
            "GPU-accelerated smoke simulation with CPU and CUDA performance comparison.",
        technologies: ["CUDA"],
        platforms: ["Windows", "Linux"],
        slug: "cuda-smoke",
        date: "2026-08",
        section: "GPU",
    },

    {
        title: "Vulkan + OpenCL",
        description:
            "GPU interoperability experiments combining Vulkan rendering with OpenCL computation.",
        technologies: ["Vulkan", "OpenCL"],
        platforms: ["Windows", "Linux", "Android"],
        slug: "vulkan-opencl",
        date: "2026-09",
        section: "GPU",
    },

    {
        title: "Vulkan + CUDA",
        description:
            "GPU interoperability experiments combining Vulkan graphics and CUDA computation.",
        technologies: ["Vulkan", "CUDA"],
        platforms: ["Windows", "Linux"],
        slug: "vulkan-cuda",
        date: "2026-08",
        section: "GPU",
    },

    {
        title: "Maharudra",
        description:
            "Large-scale OpenGL graphics project developed using C++, Win32 SDK, and OpenGL 4.5.",
        technologies: ["OpenGL"],
        platforms: ["Windows"],
        slug: "maharudra",
        date: "2021",
        section: "RTR",
    },

    {
        title: "Vulkan Renderer",
        description:
            "A Vulkan-based rendering project exploring modern GPU rendering architecture and graphics pipelines.",
        technologies: ["Vulkan"],
        platforms: ["Windows", "Linux", "Android"],
        slug: "vulkan-renderer",
        date: "2026-10",
        section: "Vulkan",
    },

    {
        title: "x86 Linux Assembly",
        description:
            "Low-level programming experiments using x86 assembly on Linux.",
        technologies: [],
        platforms: ["Linux"],
        slug: "x86-linux-assembly",
        date: "2025",
        section: "Systems",
    },
];

export default function ProjectsPage() {
    const [activeSection, setActiveSection] = useState("All");
    const [activeTechnology, setActiveTechnology] = useState("All");
    const [activePlatform, setActivePlatform] = useState("All");

    /*
     * Projects belonging to the currently selected section.
     */
    const sectionProjects =
        activeSection === "All"
            ? projects
            : projects.filter(
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
        })
        .sort((projectA, projectB) =>
            projectB.date.localeCompare(projectA.date),
        );

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
                                        className={`shrink-0 rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                                            isActive
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
                                        className={`shrink-0 rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                                            isActive
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
                                        className={`shrink-0 rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                                            isActive
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
                                    <div className="flex gap-6 md:gap-10">
                                        {/* Number */}
                                        <span className="pt-1 text-xs text-white/30">
                                            {String(index + 1).padStart(
                                                2,
                                                "0",
                                            )}
                                        </span>

                                        {/* Content */}
                                        <div className="flex-1">
                                            {/* Title + Date */}
                                            <div className="flex items-start justify-between gap-6">
                                                <div className="flex min-w-0 items-center gap-4">
                                                    <h3 className="text-xl font-medium tracking-tight transition-colors group-hover:text-white/70 md:text-2xl">
                                                        {project.title}
                                                    </h3>

                                                    <span className="hidden shrink-0 text-xs text-white/30 sm:block">
                                                        {project.date}
                                                    </span>
                                                </div>

                                                <span className="shrink-0 text-lg text-white/30 transition-all group-hover:translate-x-1 group-hover:text-white">
                                                    ↗
                                                </span>
                                            </div>

                                            {/* Mobile Date */}
                                            <div className="mt-2 sm:hidden">
                                                <span className="text-xs text-white/30">
                                                    {project.date}
                                                </span>
                                            </div>

                                            {/* Description */}
                                            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/50">
                                                {project.description}
                                            </p>

                                            {/* Technologies */}
                                            {project.technologies.length >
                                                0 && (
                                                <div className="mt-5 flex flex-wrap gap-2">
                                                    {project.technologies.map(
                                                        (technology) => (
                                                            <span
                                                                key={
                                                                    technology
                                                                }
                                                                className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/40"
                                                            >
                                                                {technology}
                                                            </span>
                                                        ),
                                                    )}
                                                </div>
                                            )}

                                            {/* Platforms */}
                                            <div className="mt-3 flex flex-wrap gap-2">
                                                {project.platforms.map(
                                                    (platform) => (
                                                        <span
                                                            key={platform}
                                                            className="text-xs text-white/30"
                                                        >
                                                            {platform}
                                                        </span>
                                                    ),
                                                )}
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

