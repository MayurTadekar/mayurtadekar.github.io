
import { Project } from "@/types/types";

export const sections = [
	"All",
	"RTR",
	"GPU",
	"Vulkan",
	"OpenCL",
	"Systems",
];

export const technologies = [
	"All",
	"OpenGL",
	"OpenGL ES",
	"Vulkan",
	"CUDA",
	"OpenCL",
	"WebGL",
];

export const platforms = [
	"All",
	"Windows",
	"Linux",
	"macOS",
	"Android",
	"iOS",
	"Web",
];

export const allProjects: Project[] = [
	{
		title: "FFT Ocean",
		description: "Real-time ocean simulation using FFT-based wave generation and GPU computation.",
		image: "",
		technologies: ["OpenGL"],
		platforms: ["Windows", "Linux", "macOS"],
		slug: "fft-ocean",
		date: "2026-09",
		section: "RTR",
		videoLink: "",
		github: "",
	},

	{
		title: "Atmospheric Scattering",
		description:"Real-time atmospheric rendering with dynamic sun positioning and volumetric scattering.",
		image: "",
		technologies: ["OpenGL"],
		platforms: ["Windows", "Linux", "macOS"],
		slug: "atmospheric-scattering",
		date: "2026-08",
		section: "RTR",
		videoLink: "",
		github: "",
	},

	{
		title: "Volumetric Clouds",
		description:
			"Real-time volumetric cloud rendering using procedural techniques and GPU shaders.",
		image: "",
		technologies: ["OpenGL"],
		platforms: ["Windows", "Linux", "macOS"],
		slug: "volumetric-clouds",
		date: "2026-07",
		section: "RTR",
		videoLink: "",
		github: "",
	},

	{
		title: "Procedural Fire",
		description:
			"Procedural and raymarched fire rendering implemented using GPU shaders.",
		image: "",
		technologies: ["OpenGL"],
		platforms: ["Windows", "Linux", "macOS"],
		slug: "procedural-fire",
		date: "2026-06",
		section: "RTR",
		videoLink: "",
		github: "",
	},

	{
		title: "CUDA Smoke",
		description:
			"GPU-accelerated smoke simulation with CPU and CUDA performance comparison.",
		image: "",
		technologies: ["CUDA"],
		platforms: ["Windows", "Linux"],
		slug: "cuda-smoke",
		date: "2026-08",
		section: "GPU",
		videoLink: "",
		github: "",
	},

	{
		title: "Vulkan + OpenCL",
		description:
			"GPU interoperability experiments combining Vulkan rendering with OpenCL computation.",
		image: "",
		technologies: ["Vulkan", "OpenCL"],
		platforms: ["Windows", "Linux", "Android"],
		slug: "vulkan-opencl",
		date: "2026-09",
		section: "GPU",
		videoLink: "",
		github: "",
	},

	{
		title: "Vulkan + CUDA",
		description:
			"GPU interoperability experiments combining Vulkan graphics and CUDA computation.",
		image: "",
		technologies: ["Vulkan", "CUDA"],
		platforms: ["Windows", "Linux"],
		slug: "vulkan-cuda",
		date: "2026-08",
		section: "GPU",
		videoLink: "",
		github: "",
	},

	{
		title: "Maharudra",
		description:
			"Large-scale OpenGL graphics project developed using C++, Win32 SDK, and OpenGL 4.5.",
		image: "",
		technologies: ["OpenGL"],
		platforms: ["Windows"],
		slug: "maharudra",
		date: "2021",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/Nhg3OsKh3a8?si=lYkBiOgYPT3Sk8Mc",
		github: "",
	},

	{
		title: "Vulkan Renderer",
		description:
			"A Vulkan-based rendering project exploring modern GPU rendering architecture and graphics pipelines.",
		image: "",
		technologies: ["Vulkan"],
		platforms: ["Windows", "Linux", "Android"],
		slug: "vulkan-renderer",
		date: "2026-10",
		section: "Vulkan",
		videoLink: "",
		github: "",
	},

	{
		title: "x86 Linux Assembly",
		description:
			"Low-level programming experiments using x86 assembly on Linux.",
		image: "",
		technologies: [],
		platforms: ["Linux"],
		slug: "x86-linux-assembly",
		date: "2025",
		section: "Systems",
		videoLink: "",
		github: "",
	},
];
