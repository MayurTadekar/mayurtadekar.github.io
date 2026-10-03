
interface ExperienceItem {
    period: string;
    role: string;
    organization: string;
    description: string;
    responsibilities: string[];
    technologies: string[];
}

const experiences: ExperienceItem[] = [
    {
        period: "2020 — Present",
        role: "Founder & Technical Educator",
        organization: "Marshalling Void",
        description:
            "Founded Marshalling Void with a focus on helping students develop strong programming fundamentals and practical software development skills.",
        responsibilities: [
            "Design and deliver programming and computer science courses.",
            "Teach C, C++, Java, Python, Data Structures, Algorithms, and system-level concepts.",
            "Develop hands-on assignments and real-world programming projects.",
            "Conduct technical workshops and mentoring sessions.",
            "Build structured learning paths focused on programming fundamentals and practical skills.",
        ],
        technologies: [
            "C",
            "C++",
            "Java",
            "Python",
            "Data Structures",
            "Algorithms",
        ],
    },
    {
        period: "2019 — Present",
        role: "Independent Graphics & Systems Developer",
        organization: "Independent",
        description:
            "Independent development focused on real-time graphics, GPU programming, rendering systems, and performance-oriented software.",
        responsibilities: [
            "Develop real-time rendering applications using modern graphics APIs.",
            "Implement GPU-accelerated simulations and compute workloads.",
            "Explore graphics programming through practical rendering projects.",
            "Work with low-level system programming and platform APIs.",
            "Research and implement rendering techniques through independent projects.",
        ],
        technologies: [
            "C++",
            "OpenGL",
            "CUDA",
            "Vulkan",
            "OpenCL",
            "GLSL",
            "Win32",
        ],
    },
];

export default function Experience() {
    return (
        <section
            id="experience"
            className="border-t border-white/10 py-24 md:py-32"
        >
            <div className="grid gap-12 md:grid-cols-[0.35fr_0.65fr] md:gap-20">
                {/* Section Heading */}
                <div>
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/50">
                        Experience
                    </p>

                    <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                        What I&apos;ve
                        <br />
                        been building.
                    </h2>
                </div>

                {/* Experience List */}
                <div className="space-y-16">
                    {experiences.map((experience) => (
                        <article
                            key={`${experience.organization}-${experience.role}`}
                            className="relative border-l border-white/10 pl-8"
                        >
                            {/* Timeline Indicator */}
                            <span
                                className="absolute -left-[5px] top-1 h-2 w-2 rounded-full bg-white"
                                aria-hidden="true"
                            />

                            {/* Period */}
                            <p className="text-sm font-medium uppercase tracking-[0.15em] text-white/40">
                                {experience.period}
                            </p>

                            {/* Role */}
                            <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                                {experience.role}
                            </h3>

                            {/* Organization */}
                            <p className="mt-1 text-base font-medium text-white/60">
                                {experience.organization}
                            </p>

                            {/* Description */}
                            <p className="mt-6 max-w-2xl text-base leading-8 text-white/60">
                                {experience.description}
                            </p>

                            {/* Responsibilities */}
                            <ul className="mt-6 max-w-2xl space-y-3">
                                {experience.responsibilities.map(
                                    (responsibility) => (
                                        <li
                                            key={responsibility}
                                            className="flex gap-3 text-sm leading-7 text-white/60"
                                        >
                                            <span
                                                className="mt-3 h-1 w-1 shrink-0 rounded-full bg-white/40"
                                                aria-hidden="true"
                                            />

                                            <span>{responsibility}</span>
                                        </li>
                                    ),
                                )}
                            </ul>

                            {/* Technologies */}
                            <div className="mt-7 flex flex-wrap gap-2">
                                {experience.technologies.map((technology) => (
                                    <span
                                        key={technology}
                                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60"
                                    >
                                        {technology}
                                    </span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
