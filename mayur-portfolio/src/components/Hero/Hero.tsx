import Image from "next/image";

export default function Hero() {
    return (
        <section className="border-b border-white/10">
            <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
                {/* Left Content */}
                <div>
                    {/* Name */}
                    <h1 className="text-3xl font-medium uppercase tracking-[0.2em] text-white">
                        Mayur Tadekar
                    </h1>

                    {/* Role */}
                    <h2 className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-white/80">
                        C++ / Graphics / Engine Engineering
                    </h2>

                    {/* Main Heading */}
                    <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-xl md:text-2xl lg:text-3xl text-white/60">
                    	I build real-time graphics systems and
                        GPU-accelerated applications focused on rendering,
                        engine programming, and performance-oriented
                        software.
					</h1>

                    {/* CTA */}
                    <div className="mt-10 flex flex-wrap gap-4">
                        <a
                            href="#work"
                            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-opacity hover:opacity-80"
                        >
                            View Projects
                            <span>↗</span>
                        </a>

                        <a
                            href="/resume/Mayur_Tadekar_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium transition-colors hover:border-white/40 hover:bg-white/[0.05]"
                        >
                            Resume
                            <span>↗</span>
                        </a>
                    </div>

                    {/* Technologies */}
                    <div className="mt-12 flex flex-wrap gap-2">
                        {[
                            "C++",
                            "OpenGL",
                            "CUDA",
                            "Vulkan",
                            "GLSL",
                            "OpenCL",
                        ].map((technology) => (
                            <span
                                key={technology}
                                className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/50"
                            >
                                {technology}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative mx-auto w-full max-w-md lg:ml-auto">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
                        <Image
                            src="/images/my_avatar.png"
                            alt="Mayur Tadekar"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 40vw"
                        />
                    </div>

                    {/* Small visual detail */}
                    <div className="absolute -bottom-4 -left-4 hidden rounded-full border border-white/10 bg-black px-4 py-2 text-xs text-white/50 sm:block">
                        C++ · Graphics · GPU
                    </div>
                </div>
            </div>
        </section>
    );
}