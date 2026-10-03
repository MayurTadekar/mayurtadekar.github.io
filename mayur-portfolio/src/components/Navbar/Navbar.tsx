"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const navLinks = [
		{ name: "About", href: "#about" },
		{ name: "Projects", href: "#projects" },
		{ name: "Skills", href: "#skills" },
		{ name: "Contact", href: "#contact" },
	];

	return (
		<header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/80">
			<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

				{/* Logo / Brand Name */}
				<div className="flex-shrink-0">
					<Link href="/" className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
						John<span className="text-blue-600">.Dev</span>
					</Link>
				</div>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex space-x-8">
					{navLinks.map((link) => (
						<Link
							key={link.name}
							href={link.href}
							className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
						>
							{link.name}
						</Link>
					))}
				</nav>

				{/* Desktop Call to Action Button */}
				<div className="hidden md:flex items-center">
					<Link
						href="#contact"
						className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
					>
						Hire Me
					</Link>
				</div>

				{/* Mobile Hamburger Menu Button */}
				<div className="flex md:hidden">
					<button
						onClick={() => setIsOpen(!isOpen)}
						type="button"
						className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
						aria-controls="mobile-menu"
						aria-expanded={isOpen}
					>
						<span className="sr-only">Open main menu</span>
						{!isOpen ? (
							<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
							</svg>
						) : (
							<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
							</svg>
						)}
					</button>
				</div>
			</div>

			{/* Mobile Menu Dropdown */}
			{isOpen && (
				<div className="md:hidden border-b border-gray-200 bg-white px-2 pt-2 pb-4 dark:border-gray-800 dark:bg-gray-900" id="mobile-menu">
					<div className="space-y-1">
						{navLinks.map((link) => (
							<Link
								key={link.name}
								href={link.href}
								onClick={() => setIsOpen(false)}
								className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-400"
							>
								{link.name}
							</Link>
						))}
						<div className="mt-4 px-3">
							<Link
								href="#contact"
								onClick={() => setIsOpen(false)}
								className="block w-full text-center rounded-md bg-blue-600 px-4 py-2.5 text-base font-medium text-white shadow-sm hover:bg-blue-700"
							>
								Hire Me
							</Link>
						</div>
					</div>
				</div>
			)}
		</header>
	);
}
