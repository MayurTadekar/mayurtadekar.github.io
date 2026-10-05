
export interface FeaturedProject {
	title: string;
	description: string;
	image: string;
	technologies: string[];
	slug: string;
	github?: string;
	videoLink: string;
};

export interface Project {
	title: string;
	description: string;
	image: string;
	technologies: string[];
	platforms: string[];
	slug: string;
	datetime: string;
	section: string;
	github?: string;
	videoLink: string;
};

