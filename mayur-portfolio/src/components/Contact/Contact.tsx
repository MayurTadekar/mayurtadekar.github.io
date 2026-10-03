const contactLinks = [
    {
        label: "Email",
        value: "your.email@example.com",
        href: "mailto:your.email@example.com",
    },
    {
        label: "LinkedIn",
        value: "linkedin.com/in/yourusername",
        href: "https://www.linkedin.com/in/yourusername",
    },
    {
        label: "GitHub",
        value: "github.com/yourusername",
        href: "https://github.com/yourusername",
    },
];

export default function Contact() {
    return (
        <section
            id="contact"
            className="border-t border-white/10 py-24 md:py-32"
        >
            <div className="grid gap-12 md:grid-cols-[0.35fr_0.65fr] md:gap-20">
                {/* Section Heading */}
                <div>
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/50">
                        Contact
                    </p>

                    <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                        Let&apos;s build
                        <br />
                        something.
                    </h2>
                </div>

                {/* Content */}
                <div className="max-w-3xl">
                    <p className="text-xl leading-9 text-white/90 md:text-2xl md:leading-10">
                        I&apos;m open to opportunities involving C++,
                        real-time graphics, GPU programming, rendering
                        technologies, and engine development.
                    </p>

                    <p className="mt-6 max-w-2xl text-base leading-8 text-white/60">
                        If you&apos;re working on interesting graphics,
                        engine, systems, or performance-oriented software,
                        feel free to get in touch.
                    </p>

                    {/* Contact Links */}
                    <div className="mt-10 border-t border-white/10">
                        {contactLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target={
                                    link.href.startsWith("http")
                                        ? "_blank"
                                        : undefined
                                }
                                rel={
                                    link.href.startsWith("http")
                                        ? "noopener noreferrer"
                                        : undefined
                                }
                                className="group flex items-center justify-between border-b border-white/10 py-5 transition-colors hover:bg-white/[0.03]"
                            >
                                <div>
                                    <p className="text-xs font-medium uppercase tracking-[0.15em] text-white/40">
                                        {link.label}
                                    </p>

                                    <p className="mt-2 text-base text-white/80 transition-colors group-hover:text-white">
                                        {link.value}
                                    </p>
                                </div>

                                <span className="text-lg text-white/40 transition-all group-hover:translate-x-1 group-hover:text-white">
                                    ↗
                                </span>
                            </a>
                        ))}
                    </div>

                    {/* Resume CTA */}
                    <div className="mt-10">
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-sm font-medium transition-all hover:border-white/40 hover:bg-white/[0.05]"
                        >
                            View Resume
                            <span>↗</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}