

export default function About() {
    return (
        <section
            id="about"
            className="border-t border-white/10 py-24 md:py-32"
        >
            <div className="grid gap-12 md:grid-cols-[0.35fr_0.65fr] md:gap-20">
                {/* Section Heading */}
                <div>
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/50">
                        About
                    </p>

                    <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                        Building with code,
                        <br />
                        thinking in systems.
                    </h2>
                </div>

                {/* Content */}
                <div className="max-w-3xl">
                    <p className="text-xl leading-9 text-white/90 md:text-2xl md:leading-10">
                        I&apos;m a C++ developer focused on real-time graphics,
                        GPU programming, rendering technologies, and
                        engine-level systems.
                    </p>

                    <div className="mt-8 space-y-6 text-base leading-8 text-white/60">
                        <p>
                            My work revolves around understanding how systems
                            work at a deeper level — from low-level programming
                            and memory management to graphics APIs, GPU
                            computation, shaders, and real-time rendering.
                        </p>

                        <p>
                            I have worked with technologies including C++,
                            OpenGL, CUDA, Vulkan, OpenCL, GLSL, Win32, and
                            Unreal Engine, with a particular interest in
                            graphics programming and performance-oriented
                            systems.
                        </p>

                        <p>
                            Alongside development, I founded Marshalling Void,
                            where I teach programming and help students build
                            strong technical foundations through coding,
                            practice, and real projects.
                        </p>
                    </div>

                    {/* Focus Areas */}
                    <div className="mt-12 grid gap-8 border-t border-white/10 pt-8 sm:grid-cols-3">
                        <div>
                            <p className="text-sm text-white/40">
                                Focus
                            </p>

                            <p className="mt-2 text-sm font-medium">
                                Real-Time Graphics
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-white/40">
                                Core
                            </p>

                            <p className="mt-2 text-sm font-medium">
                                C++ &amp; GPU Programming
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-white/40">
                                Interests
                            </p>

                            <p className="mt-2 text-sm font-medium">
                                Rendering &amp; Engines
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
