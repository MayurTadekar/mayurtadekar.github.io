interface EducationItem {
    period: string;
    degree: string;
    field: string;
    institution: string;
    location: string;
    grade: string;
    description: string;
}

const education: EducationItem[] = [
    {
        period: "2017 — 2021",
        degree: "Bachelor of Engineering",
        field: "Computer Engineering",
        institution:
            "JSPM's NTC — Savitribai Phule Pune University",
        location: "Pune, Maharashtra, India",
        grade: "CGPA 7.73 / 10 · First Class",
        description:
            "Studied computer engineering with a focus on programming, computer systems, data structures, algorithms, operating systems, databases, and software development.",
    },
];

export default function Education() {
    return (
        <section
            id="education"
            className="border-t border-white/10 py-24 md:py-32"
        >
            <div className="grid gap-12 md:grid-cols-[0.35fr_0.65fr] md:gap-20">
                {/* Section Heading */}
                <div>
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/50">
                        Education
                    </p>

                    <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                        Academic
                        <br />
                        foundation.
                    </h2>
                </div>

                {/* Education List */}
                <div className="space-y-12">
                    {education.map((item) => (
                        <article
                            key={`${item.institution}-${item.degree}`}
                            className="relative border-l border-white/10 pl-8"
                        >
                            {/* Timeline Indicator */}
                            <span
                                className="absolute -left-[5px] top-1 h-2 w-2 rounded-full bg-white"
                                aria-hidden="true"
                            />

                            {/* Period */}
                            <p className="text-sm font-medium uppercase tracking-[0.15em] text-white/40">
                                {item.period}
                            </p>

                            {/* Degree */}
                            <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                                {item.degree}
                            </h3>

                            {/* Field */}
                            <p className="mt-1 text-lg text-white/70">
                                {item.field}
                            </p>

                            {/* Institution */}
                            <p className="mt-5 text-base font-medium">
                                {item.institution}
                            </p>

                            {/* Location */}
                            <p className="mt-1 text-sm text-white/40">
                                {item.location}
                            </p>

                            {/* Grade */}
                            <div className="mt-6 inline-flex rounded-full border border-white/10 px-4 py-2">
                                <span className="text-sm text-white/70">
                                    {item.grade}
                                </span>
                            </div>

                            {/* Description */}
                            <p className="mt-6 max-w-2xl text-base leading-8 text-white/60">
                                {item.description}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
