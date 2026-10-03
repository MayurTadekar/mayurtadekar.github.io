const footerLinks = [
    {
        label: "GitHub",
        href: "https://github.com/yourusername",
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/yourusername",
    },
    {
        label: "Email",
        href: "mailto:your.email@example.com",
    },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-white/10">
            <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between lg:px-8">
                {/* Brand */}
                <div>
                    <h1 className="text-sm font-semibold tracking-tight">
                        Mayur Tadekar
                    </h1>

                    <h2 className="mt-1 text-xs text-white/40">
                        C++ · Graphics · Engine Development
                    </h2>
                </div>

                {/* Links */}
                <nav
                    aria-label="Footer navigation"
                    className="flex flex-wrap items-center gap-6"
                >
                    {footerLinks.map((link) => (
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
                            className="text-sm text-white/50 transition-colors hover:text-white"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Copyright */}
                <p className="text-xs text-white/30 md:text-right">
                    © {currentYear} Mayur Tadekar
                </p>
            </div>
        </footer>
    );
}
