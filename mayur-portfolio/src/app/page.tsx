import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Education from "@/components/Education/Education";
import Experience from "@/components/Experience/Experience";
import FeaturedProjects from "@/components/FeaturedProjects/FeaturedProjects";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
	return (
		<div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
			<Navbar />

			<main className="flex flex-1 w-full max-w-6xl flex-col items-center justify-between py-16 px-8 bg-white dark:bg-black sm:items-start">

				<Hero />
				<FeaturedProjects />
				<About />
				<Experience />
				<Education />
				<Contact />

			</main>

			<Footer />
		</div>
	);
}
