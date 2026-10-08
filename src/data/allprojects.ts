
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
	"WebGL",
	"Direct3D 11",
	"CUDA",
	"OpenCL",
];

export const platforms = [
	"All",
	"Windows",
	"Linux",
	"MacOS",
	"Android",
	"iOS",
	"Web",
];

// {
// 	title: "",
// 	description: "",
// 	image: "",
// 	technologies: [""],
// 	platforms: [""],
// 	slug: "",
// 	datetime: "2026-10-04T00:00:00Z",
// 	section: "",
// 	videoLink: "",
// 	github: "",
// },

export const allProjects: Project[] = [

	// 142
	{
		title: "Interleaved Cube",
		description: "Interleaved vertex data layout with position, color, normal, and texture-coordinate attributes stored sequentially within the same vertex structure. Direct3D 11 accesses each attribute using the appropriate stride and memory offset through the input layout, demonstrating structured vertex buffer organization.",
		image: "/images/projects/d3d11/20.jpg",
		technologies: ["Direct3D 11", "HLSL"],
		platforms: ["Windows"],
		slug: "interleaved-cube-d3d11",
		datetime: "2026-10-08T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/R806gVr-3Cw",
	},

	// 141
	{
		title: "Geometry Shader - 1 Triangle to 3 Triangles",
		description: "A geometry shader demonstration where a single input triangle is processed and expanded into multiple output triangles. The project explores primitive amplification and programmable geometry generation using HLSL.",
		image: "/images/projects/d3d11/19.jpg",
		technologies: ["Direct3D 11", "HLSL"],
		platforms: ["Windows"],
		slug: "geometry-shader-1-triangle-to-3-triangles-d3d11",
		datetime: "2026-10-08T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/o3KaerXSPVk",
	},

	// 140
	{
		title: "Tessellation Shader - Bezier Curve",
		description: "A Direct3D 11 tessellation project demonstrating GPU-based generation of a Bezier curve. Control points are processed through the tessellation pipeline to dynamically generate the curve geometry using programmable shader stages.",
		image: "/images/projects/d3d11/18.jpg",
		technologies: ["Direct3D 11", "HLSL"],
		platforms: ["Windows"],
		slug: "tessellation-shader-bezier-curve-d3d11",
		datetime: "2026-10-08T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/t1ogCffKBPc",
	},

	// 139
	{
		title: "24 Materials on 24 Spheres",
		description: "A material and lighting demonstration rendering 24 spheres with different material properties. Ambient, diffuse, and specular coefficients are varied to demonstrate how material parameters affect the appearance of objects under the same lighting model.",
		image: "/images/projects/d3d11/17.jpg",
		technologies: ["Direct3D 11", "HLSL"],
		platforms: ["Windows"],
		slug: "24-materials-24-spheres-d3d11",
		datetime: "2026-10-08T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/oZ4tRtSRKd4",
	},

	// 138
	{
		title: "3 Lights on Revolving Sphere - RGB Lighting",
		description: "A dynamic lighting scene featuring three independently moving red, green, and blue light sources revolving around a sphere. The project demonstrates multiple light sources, RGB lighting, Phong illumination, and real-time animation.",
		image: "/images/projects/d3d11/16.jpg",
		technologies: ["Direct3D 11", "HLSL"],
		platforms: ["Windows"],
		slug: "3-lights-revolving-sphere-rgb-d3d11",
		datetime: "2026-10-08T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/dnLb-8eq38k",
	},

	// 137
	{
		title: "Per Vertex - Per Fragment Lighting",
		description: "A comparative Direct3D 11 lighting implementation demonstrating both per-vertex and per-fragment Phong lighting. The project highlights the difference between interpolated vertex-level lighting and lighting calculations performed independently for each fragment.",
		image: "/images/projects/d3d11/15.jpg",
		technologies: ["Direct3D 11", "HLSL"],
		platforms: ["Windows"],
		slug: "per-vertex-per-fragment-lighting-d3d11",
		datetime: "2026-10-08T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/OwQzYrY0k8I",
	},

	// 136
	{
		title: "Two Lights on Spinning Pyramid - Phong Lighting",
		description: "A real-time lighting project demonstrating two independent light sources applied to a rotating pyramid. Ambient, diffuse, and specular components are calculated using the Phong lighting model through HLSL shaders.",
		image: "/images/projects/d3d11/14.jpg",
		technologies: ["Direct3D 11", "HLSL"],
		platforms: ["Windows"],
		slug: "two-lights-spinning-pyramid-phong-d3d11",
		datetime: "2026-10-08T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/Ii36Q2PrnJA",
	},

	// 135
	{
		title: "Per Fragment Lighting on Sphere",
		description: "A Direct3D 11 implementation of Phong lighting calculated per fragment on a sphere. Lighting calculations are performed in the pixel shader, providing detailed lighting variation across the surface.",
		image: "/images/projects/d3d11/13.jpg",
		technologies: ["Direct3D 11", "HLSL"],
		platforms: ["Windows"],
		slug: "per-fragment-lighting-sphere-d3d11",
		datetime: "2026-10-08T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/_Vx1KWLQt2U",
	},

	// 134
	{
		title: "Per Vertex Lighting",
		description: "A Direct3D 11 implementation of Phong lighting calculated at the vertex level. Ambient, diffuse, and specular components are evaluated in the vertex shader and interpolated across the rendered surface.",
		image: "/images/projects/d3d11/12.jpg",
		technologies: ["Direct3D 11", "HLSL"],
		platforms: ["Windows"],
		slug: "per-vertex-lighting-d3d11",
		datetime: "2026-10-08T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/vDYhaq32jm4",
	},

	// 133
	{
		title: "Diffuse Light Sphere",
		description: "A Direct3D 11 implementation of diffuse lighting on a 3D sphere. The varying surface normals across the sphere demonstrate how diffuse illumination changes across the object's surface based on the light direction.",
		image: "/images/projects/d3d11/11.jpg",
		technologies: ["Direct3D 11", "HLSL"],
		platforms: ["Windows"],
		slug: "diffuse-light-sphere-d3d11",
		datetime: "2026-10-08T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/YLIKygKo5nI",
	},

	// 132
	{
		title: "Diffuse Light Pyramid",
		description: "A real-time Direct3D 11 lighting project demonstrating diffuse illumination on a rotating pyramid. The project uses surface normals, light direction, transformations, and HLSL lighting calculations to produce directional lighting across the geometry.",
		image: "/images/projects/d3d11/10.jpg",
		technologies: ["Direct3D 11", "HLSL"],
		platforms: ["Windows"],
		slug: "diffuse-light-pyramid-d3d11",
		datetime: "2026-10-08T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/PDzkzS98EVc",
	},

	// 131
	{
		title: "Diffuse Light Cube",
		description: "A Direct3D 11 lighting implementation applying diffuse illumination to a 3D cube. Surface normals and light direction are used to calculate the intensity of illumination through HLSL shader calculations.",
		image: "/images/projects/d3d11/09.jpg",
		technologies: ["Direct3D 11", "HLSL"],
		platforms: ["Windows"],
		slug: "diffuse-light-cube-d3d11",
		datetime: "2026-10-08T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/db6t8cNkFQk",
	},

	// 130
	{
		title: "Procedural Texture Checkerboard",
		description: "A procedural rendering project that generates a checkerboard pattern through shader calculations rather than relying on a pre-generated image. It demonstrates texture-coordinate processing and GPU-based procedural pattern generation using HLSL.",
		image: "/images/projects/d3d11/08.jpg",
		technologies: ["Direct3D 11", "HLSL"],
		platforms: ["Windows"],
		slug: "procedural-texture-checkerboard-d3d11",
		datetime: "2026-10-08T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/nBbLHutmjTI",
	},

	// 129
	{
		title: "Textured 3D Shapes - Pyramid & Cube",
		description: "A Direct3D 11 project rendering textured 3D geometry consisting of a pyramid and cube. It demonstrates texture coordinates, texture resources, HLSL texture sampling, 3D transformations, and perspective projection.",
		image: "/images/projects/d3d11/07.jpg",
		technologies: ["Direct3D 11", "HLSL"],
		platforms: ["Windows"],
		slug: "textured-3d-shapes-pyramid-cube-d3d11",
		datetime: "2026-10-08T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/eYxnHcAog9o",
	},

	// 128
	{
		title: "Wicked Smiley",
		description: "A Direct3D 11 texture-mapping project demonstrating how a 2D image is mapped onto geometry using texture coordinates. The HLSL pixel shader samples the texture while the rendering pipeline handles the underlying geometry and transformations.",
		image: "/images/projects/d3d11/06.jpg",
		technologies: ["Direct3D 11", "HLSL"],
		platforms: ["Windows"],
		slug: "wicked-smiley-d3d11",
		datetime: "2026-10-08T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/2Ylbvrg8C-w",
	},

	// 127
	{
		title: "3D Rotation - Two Colored 3D Shapes",
		description: "A 3D rendering project demonstrating continuous rotation of two colored objects using Direct3D 11. It combines world transformations, perspective projection, constant buffers, and HLSL vertex processing to render animated 3D geometry.",
		image: "/images/projects/d3d11/05.jpg",
		technologies: ["Direct3D 11", "HLSL"],
		platforms: ["Windows"],
		slug: "3d-rotation-two-colored-3d-shapes-d3d11",
		datetime: "2026-10-08T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/tfldBzzPbZM",
	},

	// 126
	{
		title: "2D Rotation - Two Animated Shapes",
		description: "A real-time 2D transformation project demonstrating continuous rotation of two shapes. Transformation matrices are updated during rendering and supplied to the HLSL vertex shader through constant buffers.",
		image: "/images/projects/d3d11/04.jpg",
		technologies: ["Direct3D 11", "HLSL"],
		platforms: ["Windows"],
		slug: "2d-rotation-two-animated-shapes-d3d11",
		datetime: "2026-10-08T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/lghqcAt53ro",
	},

	// 125
	{
		title: "Two Colored Shapes",
		description: "A Direct3D 11 scene containing two independently rendered colored shapes. The project demonstrates rendering multiple primitives while managing vertex data, transformations, and shader-based color processing through the D3D11 graphics pipeline.",
		image: "/images/projects/d3d11/03.jpg",
		technologies: ["Direct3D 11", "HLSL"],
		platforms: ["Windows"],
		slug: "two-colored-shapes-d3d11",
		datetime: "2026-10-08T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/rVy9pw2qgtk",
	},

	// 124
	{
		title: "Multi-Colored Rectangle",
		description: "A Direct3D 11 implementation of a multi-colored rectangle using per-vertex color attributes. The project demonstrates primitive rendering, vertex buffers, input layouts, HLSL shaders, and perspective transformation.",
		image: "/images/projects/d3d11/02.jpg",
		technologies: ["Direct3D 11", "HLSL"],
		platforms: ["Windows"],
		slug: "multi-colored-rectangle-d3d11",
		datetime: "2026-10-08T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/z6GX1S-O0c4",
	},

	// 123
	{
		title: "Multi-Colored Triangle",
		description: "A foundational Direct3D 11 rendering project demonstrating a multi-colored triangle using per-vertex position and RGB color data. The project establishes the basic D3D11 pipeline with vertex buffers, input layouts, constant buffers, and HLSL vertex and pixel shaders.",
		image: "/images/projects/d3d11/01.jpg",
		technologies: ["Direct3D 11", "HLSL"],
		platforms: ["Windows"],
		slug: "multi-colored-triangle-d3d11",
		datetime: "2026-10-08T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/9NO__-CQLRU",
	},

	// 122
	{
		title: "Interleaved Cube",
		description: "Interleaved vertex data layout with position, color, normal, and texture-coordinate attributes stored sequentially within the same vertex structure. OpenGL ES accesses each attribute using the appropriate stride and memory offset, demonstrating structured vertex buffer organization.",
		image: "/images/projects/opengl_ios/19.jpg",
		technologies: ["OpenGL ES"],
		platforms: ["iOS"],
		slug: "interleaved-cube-ios",
		datetime: "2026-10-08T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/hWWuVpBHwHY",
	},

	// 121
	{
		title: "Sun Earth Moon",
		description: "Hierarchical Sun, Earth, and Moon system using parent-child transformations. The Earth revolves around the Sun while the Moon revolves around the Earth, demonstrating transformation hierarchies, matrix composition, and orbital motion using the OpenGL ES pipeline.",
		image: "/images/projects/opengl_ios/18.jpg",
		technologies: ["OpenGL ES"],
		platforms: ["iOS"],
		slug: "sun-earth-moon-ios",
		datetime: "2026-10-08T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/BNx5M6Xu4ok",
	},

	// 120
	{
		title: "24 Materials on 24 Spheres",
		description: "Renders 24 spheres using different ambient, diffuse, and specular material properties under the same lighting conditions. The project demonstrates how material parameters influence surface appearance using the Phong lighting model.",
		image: "/images/projects/opengl_ios/17.jpg",
		technologies: ["OpenGL ES"],
		platforms: ["iOS"],
		slug: "24-materials-on-24-spheres-ios",
		datetime: "2026-10-08T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/GIjWGMcjMUw",
	},

	// 119
	{
		title: "3 Lights on Revolving Sphere",
		description: "Three independently moving red, green, and blue light sources revolve around a sphere, producing dynamic colored illumination. The project demonstrates multiple dynamic lights, RGB lighting, and combined Phong lighting calculations.",
		image: "/images/projects/opengl_ios/16.jpg",
		technologies: ["OpenGL ES"],
		platforms: ["iOS"],
		slug: "3-lights-on-revolving-sphere-ios",
		datetime: "2026-10-08T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/Evejma7wofk",
	},

	// 118
	{
		title: "Per Vertex — Per Fragment Lighting",
		description: "Compares per-vertex and per-fragment Phong lighting approaches. Per-vertex lighting is calculated at each vertex and interpolated across the primitive, while per-fragment lighting performs the lighting calculation independently for each fragment.",
		image: "/images/projects/opengl_ios/15.jpg",
		technologies: ["OpenGL ES"],
		platforms: ["iOS"],
		slug: "per-vertex-per-fragment-lighting-ios",
		datetime: "2026-10-08T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/j8oJ-75zW-o",
	},

	// 117
	{
		title: "Two Lights on Spinning Pyramid",
		description: "Rotating pyramid illuminated by two independent light sources using the Phong lighting model. Ambient, diffuse, and specular contributions from both lights are calculated and combined to produce the final surface illumination.",
		image: "/images/projects/opengl_ios/14.jpg",
		technologies: ["OpenGL ES"],
		platforms: ["iOS"],
		slug: "two-lights-on-spinning-pyramid-ios",
		datetime: "2026-10-08T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/fiT7qm0RWsM",
	},

	// 116
	{
		title: "Per Fragment Lighting on Sphere",
		description: "Phong lighting calculated at the fragment level on a 3D sphere using interpolated surface normals. Ambient, diffuse, and specular components are evaluated independently for each fragment, producing more precise lighting across the curved surface.",
		image: "/images/projects/opengl_ios/13.jpg",
		technologies: ["OpenGL ES"],
		platforms: ["iOS"],
		slug: "per-fragment-lighting-on-sphere-ios",
		datetime: "2026-10-08T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/N9px-KmvG3k",
	},

	// 115
	{
		title: "Per Vertex Lighting",
		description: "Phong lighting calculated at the vertex level using surface normals, light direction, and viewer direction. Ambient, diffuse, and specular components are evaluated for each vertex and interpolated across the rendered primitive.",
		image: "/images/projects/opengl_ios/12.jpg",
		technologies: ["OpenGL ES"],
		platforms: ["iOS"],
		slug: "per-vertex-lighting-ios",
		datetime: "2026-10-08T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/UxtG0uZ3Ajs",
	},

	// 114
	{
		title: "Diffuse Light Sphere",
		description: "Demonstrates diffuse lighting on a 3D sphere using surface normals and light direction. The varying orientation of the sphere's surface produces different lighting intensities across the geometry.",
		image: "/images/projects/opengl_ios/11.jpg",
		technologies: ["OpenGL ES"],
		platforms: ["iOS"],
		slug: "diffuse-light-sphere-ios",
		datetime: "2026-10-08T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/NAXaX4gN-Po",
	},

	// 113
	{
		title: "Diffuse Light Pyramid",
		description: "Demonstrates diffuse lighting on a rotating 3D pyramid. Surface normals and light direction are used to calculate the lighting response across the pyramid's faces using GLSL ES shaders.",
		image: "/images/projects/opengl_ios/10.jpg",
		technologies: ["OpenGL ES"],
		platforms: ["iOS"],
		slug: "diffuse-light-pyramid-ios",
		datetime: "2026-10-08T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/ccGWKmFJ6NE",
	},

	// 112
	{
		title: "Diffuse Light Cube",
		description: "Demonstrates diffuse lighting on a rotating 3D cube using surface normals and light direction. The project shows how the orientation of each cube surface affects its response to a light source.",
		image: "/images/projects/opengl_ios/09.jpg",
		technologies: ["OpenGL ES"],
		platforms: ["iOS"],
		slug: "diffuse-light-cube-ios",
		datetime: "2026-10-08T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/F4Eke5U8qZs",
	},

	// 111
	{
		title: "Procedural Texture Checkerboard",
		description: "Procedurally generates a checkerboard pattern using mathematical calculations instead of a stored image. The pattern is generated through GLSL ES shader logic, demonstrating procedural texture generation and GPU-based pattern creation.",
		image: "/images/projects/opengl_ios/08.jpg",
		technologies: ["OpenGL ES"],
		platforms: ["iOS"],
		slug: "procedural-texture-checkerboard-ios",
		datetime: "2026-10-08T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/u9kii6InsaA",
	},

	// 110
	{
		title: "Textured 3D Shapes",
		description: "Applies image textures to a 3D pyramid and cube using texture coordinates. The project demonstrates textured geometry, transformation matrices, perspective projection, and GLSL ES texture sampling.",
		image: "/images/projects/opengl_ios/07.jpg",
		technologies: ["OpenGL ES"],
		platforms: ["iOS"],
		slug: "textured-3d-shapes-pyramid-cube-ios",
		datetime: "2026-10-08T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/sExXyiCAFGs",
	},

	// 109
	{
		title: "Wicked Smiley",
		description: "Demonstrates 2D texture mapping by applying the Wicked Smiley image to rendered geometry. Texture coordinates are used to map the image onto the primitive, while the GLSL ES fragment shader performs texture sampling.",
		image: "/images/projects/opengl_ios/06.jpg",
		technologies: ["OpenGL ES"],
		platforms: ["iOS"],
		slug: "wicked-smiley-texture-mapping-ios",
		datetime: "2026-10-08T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/MOith-wkWvA",
	},

	// 108
	{
		title: "3D Rotation — Two Colored 3D Shapes",
		description: "Renders two colored 3D shapes with continuous rotation using transformation matrices and perspective projection. The project demonstrates 3D transformations, real-time animation, and programmable OpenGL ES shaders.",
		image: "/images/projects/opengl_ios/05.jpg",
		technologies: ["OpenGL ES"],
		platforms: ["iOS"],
		slug: "3d-rotation-two-colored-3d-shapes-ios",
		datetime: "2026-10-08T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/inw9SioOS6c",
	},

	// 107
	{
		title: "2D Rotation — Two Animated Shapes",
		description: "Demonstrates real-time 2D rotation by continuously rotating two colored shapes using transformation matrices. The rotation angle is updated over time to produce smooth animation through the OpenGL ES rendering pipeline.",
		image: "/images/projects/opengl_ios/04.jpg",
		technologies: ["OpenGL ES"],
		platforms: ["iOS"],
		slug: "2d-rotation-two-animated-shapes-ios",
		datetime: "2026-10-08T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/cVXDqWhSoCg",
	},

	// 106
	{
		title: "Two Colored Shapes",
		description: "Renders a triangle and rectangle using independent vertex color attributes. The project demonstrates multiple primitive rendering, color interpolation, GLSL ES shaders, and the OpenGL ES rendering pipeline.",
		image: "/images/projects/opengl_ios/03.jpg",
		technologies: ["OpenGL ES"],
		platforms: ["iOS"],
		slug: "two-colored-shapes-ios",
		datetime: "2026-10-08T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/zHT8295ipxI",
	},

	// 105
	{
		title: "Multi-Colored Rectangle",
		description: "Renders a multi-colored rectangle using per-vertex RGB color attributes and perspective projection. OpenGL ES interpolates the vertex colors across the primitive while GLSL ES shaders process the geometry and color data.",
		image: "/images/projects/opengl_ios/02.jpg",
		technologies: ["OpenGL ES"],
		platforms: ["iOS"],
		slug: "multi-colored-rectangle-ios",
		datetime: "2026-10-08T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/5FInrABXThw",
	},

	// 104
	{
		title: "Multi-Colored Triangle",
		description: "Demonstrates a multi-colored triangle using per-vertex RGB color attributes and perspective projection. Each vertex is assigned a different color, which is interpolated across the triangle through the OpenGL ES rendering pipeline.",
		image: "/images/projects/opengl_ios/01.jpg",
		technologies: ["OpenGL ES"],
		platforms: ["iOS"],
		slug: "multi-colored-triangle-ios",
		datetime: "2026-10-08T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/QrGiP9_yifY",
	},

	// 103
	{
		title: "Interleaved Cube",
		description: "Interleaved vertex data layout with position, color, normal, and texture-coordinate attributes stored sequentially within the same vertex structure. OpenGL accesses each attribute using the appropriate stride and memory offset, demonstrating efficient vertex buffer organization.",
		image: "/images/projects/opengl_macos/21.jpg",
		technologies: ["OpenGL"],
		platforms: ["MacOS"],
		slug: "interleaved-cube-macos",
		datetime: "2026-10-07T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/bRE-ZJQUxKo",
	},

	// 102
	{
		title: "Geometry Shader",
		description: "Demonstrates geometry shader processing by taking a single input triangle and generating three output triangles on the GPU. The project explores primitive generation and geometry amplification within the programmable OpenGL pipeline.",
		image: "/images/projects/opengl_macos/20.jpg",
		technologies: ["OpenGL"],
		platforms: ["MacOS"],
		slug: "geometry-shader-1-triangle-to-3-triangles-macos",
		datetime: "2026-10-07T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/E4cIuychKyc",
	},

	// 101
	{
		title: "Tessellation Shader",
		description: "Generates a smooth Bezier curve using OpenGL tessellation shaders. Control points are processed on the GPU through tessellation control and evaluation stages, demonstrating programmable tessellation and GPU-based geometry generation.",
		image: "/images/projects/opengl_macos/19.jpg",
		technologies: ["OpenGL"],
		platforms: ["MacOS"],
		slug: "tessellation-shader-bezier-curve-macos",
		datetime: "2026-10-07T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/IlBi2srHiV4",
	},

	// 100
	{
		title: "Sun Earth Moon",
		description: "Implements a hierarchical Sun, Earth, and Moon system using parent-child transformations. The Earth revolves around the Sun while the Moon revolves around the Earth, demonstrating transformation hierarchies and orbital motion through the OpenGL matrix pipeline.",
		image: "/images/projects/opengl_macos/18.jpg",
		technologies: ["OpenGL"],
		platforms: ["MacOS"],
		slug: "sun-earth-moon-macos",
		datetime: "2026-10-07T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/VI9f6MmxjBo",
	},

	// 99
	{
		title: "24 Materials on 24 Spheres",
		description: "Renders 24 spheres using different ambient, diffuse, and specular material properties under the same lighting conditions. The project demonstrates how material parameters influence surface appearance using the Phong lighting model.",
		image: "/images/projects/opengl_macos/17.jpg",
		technologies: ["OpenGL"],
		platforms: ["MacOS"],
		slug: "24-materials-on-24-spheres-macos",
		datetime: "2026-10-07T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/SIMULHcj4dM",
	},

	// 98
	{
		title: "3 Lights on Revolving Sphere",
		description: "A sphere is illuminated by three independently moving red, green, and blue light sources revolving around the object. The project demonstrates dynamic light movement, RGB illumination, and multi-light Phong lighting calculations.",
		image: "/images/projects/opengl_macos/16.jpg",
		technologies: ["OpenGL"],
		platforms: ["MacOS"],
		slug: "3-lights-on-revolving-sphere-macos",
		datetime: "2026-10-07T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/-9UUvKFoSsQ",
	},

	// 97
	{
		title: "Per Vertex — Per Fragment Lighting",
		description: "Compares per-vertex and per-fragment Phong lighting approaches. Per-vertex lighting is calculated at each vertex and interpolated across the primitive, while per-fragment lighting performs the lighting calculation independently for each fragment.",
		image: "/images/projects/opengl_macos/15.jpg",
		technologies: ["OpenGL"],
		platforms: ["MacOS"],
		slug: "per-vertex-per-fragment-lighting-macos",
		datetime: "2026-10-07T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/Fs8bXxae-RQ",
	},

	// 96
	{
		title: "Two Lights on Spinning Pyramid",
		description: "Demonstrates two independent light sources illuminating a rotating pyramid using the Phong lighting model. Ambient, diffuse, and specular contributions from both lights are calculated and combined to produce the final surface illumination.",
		image: "/images/projects/opengl_macos/14.jpg",
		technologies: ["OpenGL"],
		platforms: ["MacOS"],
		slug: "two-lights-on-spinning-pyramid-macos",
		datetime: "2026-10-07T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/NJW0U0eVl0E",
	},

	// 95
	{
		title: "Per Fragment Lighting",
		description: "Demonstrates Phong lighting calculated at the fragment level on a 3D sphere. Ambient, diffuse, and specular components are evaluated for each fragment using interpolated surface normals, producing smoother and more accurate lighting across the rendered surface.",
		image: "/images/projects/opengl_macos/13.jpg",
		technologies: ["OpenGL"],
		platforms: ["MacOS"],
		slug: "per-fragment-lighting-macos",
		datetime: "2026-10-07T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/f4BQMSWB5v0",
	},

	// 94
	{
		title: "Per Vertex Lighting",
		description: "Implements Phong lighting calculations at the vertex level. Ambient, diffuse, and specular components are calculated using vertex normals, light direction, and viewer direction, with the resulting lighting values interpolated across the rendered surface.",
		image: "/images/projects/opengl_macos/12.jpg",
		technologies: ["OpenGL"],
		platforms: ["MacOS"],
		slug: "per-vertex-lighting-macos",
		datetime: "2026-10-07T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/RmgZi63IzME",
	},

	// 93
	{
		title: "Diffuse Light Sphere",
		description: "Demonstrates diffuse lighting on a 3D sphere using surface normals and light direction. The lighting intensity varies across the curved surface according to the angle between the surface normal and incoming light direction.",
		image: "/images/projects/opengl_macos/11.jpg",
		technologies: ["OpenGL"],
		platforms: ["MacOS"],
		slug: "diffuse-light-sphere-macos",
		datetime: "2026-10-07T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/Lb8XAplrQ-4",
	},

	// 92
	{
		title: "Diffuse Light Pyramid",
		description: "Demonstrates diffuse lighting on a rotating 3D pyramid. Surface normals and light direction are used to calculate the lighting intensity across the pyramid faces using GLSL shaders.",
		image: "/images/projects/opengl_macos/10.jpg",
		technologies: ["OpenGL"],
		platforms: ["MacOS"],
		slug: "diffuse-light-pyramid-macos",
		datetime: "2026-10-07T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/_pankbugHY4",
	},

	// 91
	{
		title: "Diffuse Light Cube",
		description: "Implements diffuse lighting on a rotating 3D cube using surface normals and light direction. The project demonstrates how the orientation of each cube surface affects its response to a light source.",
		image: "/images/projects/opengl_macos/09.jpg",
		technologies: ["OpenGL"],
		platforms: ["MacOS"],
		slug: "diffuse-light-cube-macos",
		datetime: "2026-10-07T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/FTA9ju8qaGA",
	},

	// 90
	{
		title: "Procedural Texture Checkerboard",
		description: "Generates a checkerboard texture procedurally using mathematical calculations rather than a stored image. The pattern is generated and applied through GLSL, demonstrating procedural texture generation and shader-based pattern creation.",
		image: "/images/projects/opengl_macos/08.jpg",
		technologies: ["OpenGL"],
		platforms: ["MacOS"],
		slug: "procedural-texture-checkerboard-macos",
		datetime: "2026-10-07T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/YpgcAy1FwkI",
	},

	// 89
	{
		title: "Textured 3D Shapes",
		description: "Applies 2D image textures to a 3D pyramid and cube using texture coordinates. The project demonstrates textured geometry, perspective projection, transformation matrices, and GLSL texture sampling.",
		image: "/images/projects/opengl_macos/07.jpg",
		technologies: ["OpenGL"],
		platforms: ["MacOS"],
		slug: "textured-3d-shapes-pyramid-cube-macos",
		datetime: "2026-10-07T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/XQeE-WZJfD0",
	},

	// 88
	{
		title: "Wicked Smiley",
		description: "Demonstrates 2D texture mapping by applying the Wicked Smiley image to a rendered quad. Texture coordinates are used to map the image onto the geometry, while the GLSL fragment shader samples the texture during rendering.",
		image: "/images/projects/opengl_macos/06.jpg",
		technologies: ["OpenGL"],
		platforms: ["MacOS"],
		slug: "wicked-smiley-texture-mapping-macos",
		datetime: "2026-10-07T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/fHXL6QZosNs",
	},

	// 87
	{
		title: "3D Rotation — Two Colored 3D Shapes",
		description: "Renders two colored 3D shapes with continuous rotation using transformation matrices. The project demonstrates 3D rotation, perspective projection, real-time animation, and programmable vertex and fragment shaders.",
		image: "/images/projects/opengl_macos/05.jpg",
		technologies: ["OpenGL"],
		platforms: ["MacOS"],
		slug: "3d-rotation-two-colored-3d-shapes-macos",
		datetime: "2026-10-07T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/VaYMYQmevz8",
	},

	// 86
	{
		title: "2D Rotation — Two Animated Shapes",
		description: "Demonstrates real-time 2D rotation by continuously rotating two colored shapes using transformation matrices. The rotation angle is updated over time to create smooth animation through the OpenGL rendering pipeline.",
		image: "/images/projects/opengl_macos/04.jpg",
		technologies: ["OpenGL"],
		platforms: ["MacOS"],
		slug: "2d-rotation-two-animated-shapes-macos",
		datetime: "2026-10-07T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/TIbDr_wY1Uk",
	},

	// 85
	{
		title: "Two Colored Shapes",
		description: "Renders a triangle and rectangle using independent vertex color attributes. The project demonstrates multiple primitive rendering, color interpolation, GLSL shaders, and the basic OpenGL rendering pipeline.",
		image: "/images/projects/opengl_macos/03.jpg",
		technologies: ["OpenGL"],
		platforms: ["MacOS"],
		slug: "two-colored-shapes-macos",
		datetime: "2026-10-07T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/Lvav2ec3z24",
	},

	// 84
	{
		title: "Multi-Colored Rectangle",
		description: "Renders a multi-colored rectangle using per-vertex RGB color attributes and perspective projection. OpenGL interpolates the vertex colors across the primitive while GLSL shaders process the geometry and color data.",
		image: "/images/projects/opengl_macos/02.jpg",
		technologies: ["OpenGL"],
		platforms: ["MacOS"],
		slug: "multi-colored-rectangle-macos",
		datetime: "2026-10-07T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/D4QP08FF5Gw",
	},

	// 83
	{
		title: "Multi-Colored Triangle",
		description: "Demonstrates a multi-colored triangle using per-vertex RGB color attributes and perspective projection. Each vertex is assigned a different color, which is interpolated across the triangle through the OpenGL rendering pipeline.",
		image: "/images/projects/opengl_macos/01.jpg",
		technologies: ["OpenGL"],
		platforms: ["MacOS"],
		slug: "multi-colored-triangle-macos",
		datetime: "2026-10-07T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/4zCkt5eoR5Q",
	},

	// 82
	{
		title: "Interleaved Cube",
		description: "Each cube vertex contains position, color, normal, and texture-coordinate data arranged sequentially within the same vertex structure. WebGL accesses each attribute using the appropriate stride and memory offset, allowing multiple vertex attributes to be supplied efficiently from a single vertex buffer.",
		image: "/images/projects/webgl/19.jpg",
		technologies: ["WebGL"],
		platforms: ["Web"],
		slug: "interleaved-cube-webgl",
		datetime: "2026-10-07T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/cEc9iXRzLow",
	},

	// 81
	{
		title: "Sun Earth Moon",
		description: "The project implements a hierarchical Sun, Earth, and Moon system using parent-child transformations. The Earth revolves around the Sun while the Moon revolves around the Earth, demonstrating transformation hierarchies and orbital motion through the WebGL matrix pipeline.",
		image: "/images/projects/webgl/18.jpg",
		technologies: ["WebGL"],
		platforms: ["Web"],
		slug: "sun-earth-moon-webgl",
		datetime: "2026-10-07T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/au587eVlTuY",
	},

	// 80
	{
		title: "24 Materials on 24 Spheres",
		description: "The project renders 24 spheres with different material properties under the same lighting conditions, demonstrating how ambient, diffuse, and specular material parameters affect surface appearance. The Phong lighting model and GLSL shaders are used to evaluate and display the different material responses.",
		image: "/images/projects/webgl/17.jpg",
		technologies: ["WebGL"],
		platforms: ["Web"],
		slug: "24-materials-on-24-spheres-webgl",
		datetime: "2026-10-07T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/lsxX0FJQnHs",
	},

	// 79
	{
		title: "3 Lights on Revolving Sphere",
		description: "The project demonstrates three dynamic RGB light sources—red, green, and blue—revolving around a 3D sphere. Phong lighting combines the ambient, diffuse, and specular contributions from each light to produce continuously changing illumination across the sphere's surface.",
		image: "/images/projects/webgl/16.jpg",
		technologies: ["WebGL"],
		platforms: ["Web"],
		slug: "3-lights-on-revolving-sphere-webgl",
		datetime: "2026-10-07T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/6ag4InsiZtM",
	},

	// 78
	{
		title: "Per Vertex — Per Fragment Lighting",
		description: "The project compares per-vertex and per-fragment Phong lighting, implementing ambient, diffuse, and specular components through GLSL shaders. Per-vertex lighting calculates illumination at vertices and interpolates the results, while per-fragment lighting performs the calculations independently for each fragment.",
		image: "/images/projects/webgl/15.jpg",
		technologies: ["WebGL"],
		platforms: ["Web"],
		slug: "per-vertex-per-fragment-lighting-webgl",
		datetime: "2026-10-07T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/YjSvbZQZ3es",
	},

	// 77
	{
		title: "Two Lights on Spinning Pyramid",
		description: "The project implements Phong lighting with two independent light sources on a continuously rotating 3D pyramid. Ambient, diffuse, and specular components are calculated per vertex using GLSL shaders, with the resulting lighting values interpolated across the pyramid's surfaces.",
		image: "/images/projects/webgl/14.jpg",
		technologies: ["WebGL"],
		platforms: ["Web"],
		slug: "two-lights-on-spinning-pyramid-webgl",
		datetime: "2026-10-07T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/whV38WU1_cY",
	},

	// 76
	{
		title: "Per Fragment Lighting on Sphere",
		description: "The project implements the Phong lighting model at the fragment level, calculating ambient, diffuse, and specular components for each rendered fragment using interpolated surface normals and light/view directions. The lighting calculations are performed in the GLSL fragment shader for more accurate surface illumination.",
		image: "/images/projects/webgl/13.jpg",
		technologies: ["WebGL"],
		platforms: ["Web"],
		slug: "per-fragment-lighting-webgl",
		datetime: "2026-10-07T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/EMBqScPRYzI",
	},

	// 75
	{
		title: "Per Vertex Lighting",
		description: "The project implements the Phong lighting model at the vertex level, calculating ambient, diffuse, and specular components using surface normals and light/view directions. The resulting lighting values are interpolated across the surface by the WebGL rasterization pipeline.",
		image: "/images/projects/webgl/12.jpg",
		technologies: ["WebGL"],
		platforms: ["Web"],
		slug: "per-vertex-lighting-webgl",
		datetime: "2026-10-07T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/DbgKxr7y0k0",
	},

	// 74
	{
		title: "Diffuse Light Sphere",
		description: "The project demonstrates diffuse lighting on a 3D sphere using surface normals and the direction of a light source. Per-vertex lighting calculations are performed in GLSL, with the resulting intensity interpolated across the sphere's curved surface.",
		image: "/images/projects/webgl/11.jpg",
		technologies: ["WebGL"],
		platforms: ["Web"],
		slug: "diffuse-light-sphere-webgl",
		datetime: "2026-10-07T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/HU2lP0M9_5Y",
	},

	// 73
	{
		title: "Diffuse Light Pyramid",
		description: "The project demonstrates diffuse lighting on a rotating 3D pyramid using surface normals and the direction of a light source. Per-vertex lighting calculations are performed in GLSL, with the resulting intensity interpolated across the pyramid's surfaces.",
		image: "/images/projects/webgl/10.jpg",
		technologies: ["WebGL"],
		platforms: ["Web"],
		slug: "diffuse-light-pyramid-webgl",
		datetime: "2026-10-07T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/V0f1uhoBjqc",
	},

	// 72
	{
		title: "Diffuse Light Cube",
		description: "The project demonstrates diffuse lighting on a rotating 3D cube using surface normals and the direction of a light source. Per-vertex lighting calculations are performed in GLSL, with the resulting intensity interpolated across the cube's surfaces.",
		image: "/images/projects/webgl/09.jpg",
		technologies: ["WebGL"],
		platforms: ["Web"],
		slug: "diffuse-light-cube-webgl",
		datetime: "2026-10-07T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/-te7LTXgi5w",
	},

	// 71
	{
		title: "Procedural Texture Checkerboard",
		description: "The project generates a checkerboard texture procedurally using mathematical logic instead of loading an image from disk. The generated pattern is mapped onto geometry using texture coordinates and processed through the WebGL texture pipeline and GLSL shaders.",
		image: "/images/projects/webgl/08.jpg",
		technologies: ["WebGL"],
		platforms: ["Web"],
		slug: "procedural-texture-checkerboard-webgl",
		datetime: "2026-10-07T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/OF9svqd6DtY",
	},

	// 70
	{
		title: "Textured 3D Shapes",
		description: "The project applies 2D image textures to 3D pyramid and cube geometry using texture coordinates. Perspective projection and transformation matrices position the objects in 3D space, while GLSL texture sampling renders the mapped textures across their surfaces.",
		image: "/images/projects/webgl/07.jpg",
		technologies: ["WebGL"],
		platforms: ["Web"],
		slug: "textured-3d-shapes-webgl",
		datetime: "2026-10-07T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/LqQ2EtFucmo",
	},

	// 69
	{
		title: "Wicked Smiley",
		description: "The project demonstrates 2D texture mapping by applying a Wicked Smiley image to rendered geometry using texture coordinates. The texture is sampled in the GLSL fragment shader, introducing image-based rendering through the WebGL texture pipeline.",
		image: "/images/projects/webgl/06.jpg",
		technologies: ["WebGL"],
		platforms: ["Web"],
		slug: "wicked-smiley-webgl",
		datetime: "2026-10-07T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/_nqXHTl9GQA",
	},

	// 68
	{
		title: "3D Rotation — Two Colored 3D Shapes",
		description: "The project renders two colored 3D shapes and continuously rotates them using 3D transformation matrices. Perspective projection provides the 3D viewing effect, while GLSL shaders drive the WebGL rendering pipeline and real-time animation.",
		image: "/images/projects/webgl/05.jpg",
		technologies: ["WebGL"],
		platforms: ["Web"],
		slug: "3d-rotation-two-colored-3d-shapes-webgl",
		datetime: "2026-10-07T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/e51qf2Ru280",
	},

	// 67
	{
		title: "2D Rotation — Two Animated Shapes",
		description: "The project renders two colored 2D shapes and continuously rotates them using transformation matrices. The rotation is updated over time to produce smooth animation, demonstrating real-time geometric transformations using GLSL shaders and the WebGL rendering pipeline.",
		image: "/images/projects/webgl/04.jpg",
		technologies: ["WebGL"],
		platforms: ["Web"],
		slug: "2d-rotation-two-animated-shapes-webgl",
		datetime: "2026-10-07T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/6lcx-VICRc0",
	},

	// 66
	{
		title: "Two Colored Shapes",
		description: "The project renders a colored triangle and rectangle, each using its own vertex color data. The WebGL pipeline interpolates the colors across the primitives, while GLSL shaders process the geometry and color data within the browser rendering pipeline.",
		image: "/images/projects/webgl/03.jpg",
		technologies: ["WebGL"],
		platforms: ["Web"],
		slug: "two-colored-shapes-webgl",
		datetime: "2026-10-07T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/jiIbnJkV_78",
	},

	// 65
	{
		title: "Multi-Colored Rectangle",
		description: "Each vertex of the rectangle contains a different RGB color, with the WebGL pipeline interpolating these values across the primitive to produce a smooth multi-colored surface. The project uses GLSL shaders to implement the browser-based WebGL rendering pipeline.",
		image: "/images/projects/webgl/02.jpg",
		technologies: ["WebGL"],
		platforms: ["Web"],
		slug: "multi-colored-rectangle-webgl",
		datetime: "2026-10-07T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/6_8ltCoFyMw",
	},

	// 64
	{
		title: "Multi-Colored Triangle",
		description: "Each vertex of the triangle contains a different RGB color, with the WebGL pipeline interpolating these values across the primitive to produce a smooth multi-colored surface. The project uses GLSL shaders and perspective projection for the browser-based WebGL rendering pipeline.",
		image: "/images/projects/webgl/01.jpg",
		technologies: ["WebGL"],
		platforms: ["Web"],
		slug: "multi-colored-triangle-webgl",
		datetime: "2026-10-07T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/OumE_d0jzno",
	},

	// 63
	{
		title: "Interleaved Cube",
		description: "Each cube vertex contains position, color, normal, and texture-coordinate data arranged sequentially within the same vertex structure. OpenGL ES accesses each attribute using the appropriate stride and memory offset, allowing multiple vertex attributes to be supplied from a single vertex buffer.",
		image: "/images/projects/opengl_android/21.jpg",
		technologies: ["OpenGL ES"],
		platforms: ["Android"],
		slug: "interleaved-cube-opengl-es-android",
		datetime: "2026-10-07T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/W-U2gXr1D0k",
	},

	// 62
	{
		title: "Geometry Shader",
		description: "The project demonstrates geometry shader processing by transforming a single input triangle into three output triangles directly within the GPU rendering pipeline. The GLSL ES geometry shader receives the input primitive and generates additional geometry before rasterization.",
		image: "/images/projects/opengl_android/20.jpg",
		technologies: ["OpenGL ES"],
		platforms: ["Android"],
		slug: "geometry-shader-opengl-es-android",
		datetime: "2026-10-07T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/CA-6OSK4AaI",
	},

	// 61
	{
		title: "Tessellation Shader",
		description: "The project uses tessellation shader stages to generate a smooth Bezier curve from a set of control points. The GPU subdivides and processes the input geometry through programmable tessellation stages, demonstrating GPU-based geometry generation using the OpenGL ES shader pipeline.",
		image: "/images/projects/opengl_android/19.jpg",
		technologies: ["OpenGL ES"],
		platforms: ["Android"],
		slug: "tessellation-shader-opengl-es-android",
		datetime: "2026-10-07T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/4iFH542M2R0",
	},

	// 60
	{
		title: "24 Material Spheres",
		description: "The project renders 24 spheres with different material properties under the same lighting conditions, demonstrating how ambient, diffuse, and specular material parameters affect surface appearance. The Phong lighting model and GLSL ES shaders are used to evaluate and display the different material responses.",
		image: "/images/projects/opengl_android/18.jpg",
		technologies: ["OpenGL ES"],
		platforms: ["Android"],
		slug: "24-material-spheres-opengl-es-android",
		datetime: "2026-10-07T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/RQd7g_ylrdU",
	},

	// 59
	{
		title: "Three Lights on Sphere",
		description: "The project demonstrates three dynamic RGB light sources—red, green, and blue—revolving around a 3D sphere. Phong lighting combines the ambient, diffuse, and specular contributions from each light to produce continuously changing illumination across the sphere's surface.",
		image: "/images/projects/opengl_android/17.jpg",
		technologies: ["OpenGL ES"],
		platforms: ["Android"],
		slug: "three-lights-on-sphere-opengl-es-android",
		datetime: "2026-10-07T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/T9ZyJ50UN1g",
	},

	// 58
	{
		title: "Per Vertex - Per Fragment Lighting",
		description: "The project compares per-vertex and per-fragment Phong lighting, implementing ambient, diffuse, and specular components through GLSL ES shaders. Per-vertex lighting calculates illumination at vertices and interpolates the results, while per-fragment lighting performs the calculations independently for each fragment.",
		image: "/images/projects/opengl_android/16.jpg",
		technologies: ["OpenGL ES"],
		platforms: ["Android"],
		slug: "per-vertex-per-fragment-lighting-opengl-es-android",
		datetime: "2026-10-07T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/PFwhqlrsD8o",
	},

	// 57
	{
		title: "Two Lights on Spinning Pyramid",
		description: "The project implements Phong lighting with two independent light sources on a continuously rotating 3D pyramid. Ambient, diffuse, and specular components are calculated per vertex using GLSL ES, with the resulting lighting values interpolated across the pyramid's surfaces.",
		image: "/images/projects/opengl_android/15.jpg",
		technologies: ["OpenGL ES"],
		platforms: ["Android"],
		slug: "two-lights-on-spinning-pyramid-opengl-es-android",
		datetime: "2026-10-07T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/L4NDL7UpTp0",
	},

	// 56
	{
		title: "Per Fragment Lighting",
		description: "The project implements the Phong lighting model at the fragment level, calculating ambient, diffuse, and specular components for each rendered fragment using interpolated surface normals and light/view directions. The lighting calculations are performed in the GLSL ES fragment shader for more accurate surface illumination.",
		image: "/images/projects/opengl_android/14.jpg",
		technologies: ["OpenGL ES"],
		platforms: ["Android"],
		slug: "per-fragment-lighting-opengl-es-android",
		datetime: "2026-10-07T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/HY9eDmOZyDU",
	},

	// 55
	{
		title: "Per Vertex Lighting",
		description: "The project implements the Phong lighting model at the vertex level, calculating ambient, diffuse, and specular components using surface normals and light/view directions. The resulting lighting values are interpolated across the surface by the OpenGL ES rasterization pipeline.",
		image: "/images/projects/opengl_android/13.jpg",
		technologies: ["OpenGL ES"],
		platforms: ["Android"],
		slug: "per-vertex-lighting-opengl-es-android",
		datetime: "2026-10-07T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/85hZKuV5RcA",
	},

	// 54
	{
		title: "Diffuse Light on Sphere",
		description: "The project demonstrates diffuse lighting on a 3D sphere using surface normals and the direction of a light source. Per-vertex lighting calculations are performed in GLSL ES, with the resulting intensity interpolated across the sphere's curved surface.",
		image: "/images/projects/opengl_android/12.jpg",
		technologies: ["OpenGL ES"],
		platforms: ["Android"],
		slug: "diffuse-light-on-sphere-opengl-es-android",
		datetime: "2026-10-07T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/-dxiG0-eN0g",
	},

	// 53
	{
		title: "Diffuse Light on Cube",
		description: "The project demonstrates diffuse lighting on a rotating 3D cube using surface normals and the direction of a light source. Per-vertex lighting calculations are performed in GLSL ES, with the resulting intensity interpolated across the cube's surfaces.",
		image: "/images/projects/opengl_android/11.jpg",
		technologies: ["OpenGL ES"],
		platforms: ["Android"],
		slug: "diffuse-light-on-cube-opengl-es-android",
		datetime: "2026-10-07T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/bgi6c4N0vmw",
	},

	// 52
	{
		title: "Diffuse Light on Pyramid",
		description: "The project demonstrates diffuse lighting on a rotating 3D pyramid using surface normals and the direction of a light source. Per-vertex lighting calculations are performed in GLSL ES, with the resulting intensity interpolated across the pyramid's surfaces.",
		image: "/images/projects/opengl_android/10.jpg",
		technologies: ["OpenGL ES"],
		platforms: ["Android"],
		slug: "diffuse-light-on-pyramid-opengl-es-android",
		datetime: "2026-10-07T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/SmZSdf7gqRA",
	},

	// 51
	{
		title: "Procedural Texture Checkerboard",
		description: "The project generates a checkerboard texture procedurally using mathematical logic instead of loading an image from disk. The generated pattern is mapped onto geometry using texture coordinates and processed through the OpenGL ES texture pipeline and GLSL ES shaders.",
		image: "/images/projects/opengl_android/09.jpg",
		technologies: ["OpenGL ES"],
		platforms: ["Android"],
		slug: "procedural-texture-checkerboard-opengl-es-android",
		datetime: "2026-10-07T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/dpMyOP8B7Kk",
	},

	// 50
	{
		title: "Textured 3D Shapes",
		description: "The project applies 2D image textures to 3D pyramid and cube geometry using texture coordinates. Perspective projection and transformation matrices position the objects in 3D space, while GLSL ES texture sampling renders the mapped textures across their surfaces.",
		image: "/images/projects/opengl_android/08.jpg",
		technologies: ["OpenGL ES"],
		platforms: ["Android"],
		slug: "textured-3d-shapes-opengl-es-android",
		datetime: "2026-10-07T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/enuP-56hdVg",
	},

	// 49
	{
		title: "Wicked Smiley",
		description: "The project demonstrates 2D texture mapping by applying a Wicked Smiley image to rendered geometry using texture coordinates. The texture is sampled in the GLSL ES fragment shader, introducing image-based rendering through the OpenGL ES texture pipeline.",
		image: "/images/projects/opengl_android/07.jpg",
		technologies: ["OpenGL ES"],
		platforms: ["Android"],
		slug: "wicked-smiley-opengl-es-android",
		datetime: "2026-10-07T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/eRY9vUGZHbA",
	},

	// 48
	{
		title: "3D Rotation",
		description: "The project renders two colored 3D shapes and continuously rotates them using 3D transformation matrices. Perspective projection provides the 3D viewing effect, while GLSL ES shaders drive the Android OpenGL ES rendering pipeline and real-time animation.",
		image: "/images/projects/opengl_android/06.jpg",
		technologies: ["OpenGL ES"],
		platforms: ["Android"],
		slug: "3d-rotation-opengl-es-android",
		datetime: "2026-10-07T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/tIhI3ediWRA",
	},

	// 47
	{
		title: "2D Rotation",
		description: "The project renders two 2D shapes and continuously rotates them using transformation matrices. The rotation is updated over time to produce smooth real-time animation, with GLSL ES shaders driving the Android OpenGL ES rendering pipeline.",
		image: "/images/projects/opengl_android/05.jpg",
		technologies: ["OpenGL ES"],
		platforms: ["Android"],
		slug: "2d-rotation-opengl-es-android",
		datetime: "2026-10-07T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/hYBOX_PUOJY",
	},

	// 46
	{
		title: "Sun, Earth, Moon",
		description: "The project implements a hierarchical Sun, Earth, and Moon system using parent-child transformations. The Earth revolves around the Sun while the Moon revolves around the Earth, demonstrating transformation hierarchies and orbital motion through the OpenGL ES matrix pipeline.",
		image: "/images/projects/opengl_android/04.jpg",
		technologies: ["OpenGL ES"],
		platforms: ["Android"],
		slug: "sun-earth-moon-opengl-es-android",
		datetime: "2026-10-07T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/zgIoELvVLY8",
	},

	// 45
	{
		title: "Two Colored Shapes",
		description: "The project renders a colored triangle and rectangle, each using its own vertex color data. The OpenGL ES pipeline interpolates the colors across the primitives, while GLSL ES shaders process the geometry and color data within the Android rendering pipeline.",
		image: "/images/projects/opengl_android/03.jpg",
		technologies: ["OpenGL ES"],
		platforms: ["Android"],
		slug: "two-colored-shapes-opengl-es-android",
		datetime: "2026-10-07T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/bFwMV-T6YPU",
	},

	// 44
	{
		title: "Multicolored Rectangle",
		description: "Each vertex of the rectangle contains a different RGB color, with the OpenGL ES pipeline interpolating these values across the primitive to produce a smooth multi-colored surface. The project uses GLSL ES shaders to implement the Android rendering pipeline.",
		image: "/images/projects/opengl_android/02.jpg",
		technologies: ["OpenGL ES"],
		platforms: ["Android"],
		slug: "multicolored-rectangle-opengl-es-android",
		datetime: "2026-10-07T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/77m3DPeEing",
	},

	// 43
	{
		title: "Multi-Colored Triangle",
		description: "Each vertex of the triangle contains a different RGB color, with the OpenGL ES pipeline interpolating these values across the primitive to produce a smooth multi-colored surface. The project uses GLSL ES shaders to implement the Android rendering pipeline.",
		image: "/images/projects/opengl_android/01.jpg",
		technologies: ["OpenGL ES"],
		platforms: ["Android"],
		slug: "multi-colored-triangle-opengl-es-android",
		datetime: "2026-10-07T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/NpOhwRfV6iA",
	},

	// 42
	{
		title: "Interleaved Cube",
		description: "Each cube vertex contains position, color, normal, and texture-coordinate data arranged sequentially within the same vertex structure. OpenGL accesses each attribute using the appropriate stride and memory offset, allowing multiple vertex attributes to be supplied from a single vertex buffer.",
		image: "/images/projects/opengl_linux/21.jpg",
		technologies: ["OpenGL"],
		platforms: ["Linux"],
		slug: "interleaved-cube-opengl-linux",
		datetime: "2026-10-04T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/29ogX3n123o?si=k-mOq0jCbSf8CEQj",
		github: "https://github.com/MayurTadekar/Real-Time-Rendering/tree/main/01_OpenGL/03_PP/01_Linux/14_Interleaved",
	},

	// 41
	{
		title: "Geometry Shader",
		description: "A geometry shader-based OpenGL application that demonstrates dynamic geometry generation on the GPU by taking a single triangle as input and expanding it into three triangles. The project showcases the geometry shader stage, primitive generation, and programmable manipulation of incoming geometry within the graphics pipeline. Developed in C++ with OpenGL on Linux.",
		image: "/images/projects/opengl_linux/20.jpg",
		technologies: ["OpenGL"],
		platforms: ["Linux"],
		slug: "geometry-shader-opengl-linux",
		datetime: "2026-10-04T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/EPupiTVOd34?si=OSWE1E-3uoXvQlxw",
		github: "https://github.com/MayurTadekar/Real-Time-Rendering/tree/main/01_OpenGL/03_PP/01_Linux/13_Geometry_Shader",
	},

	// 40
	{
		title: "Tessellation Shader",
		description: "A tessellation shader-based OpenGL application that demonstrates GPU-driven subdivision of geometry by transforming a line segment into a smooth Bezier curve. The project uses tessellation control and tessellation evaluation shaders to control tessellation levels and evaluate curve positions on the GPU, demonstrating programmable tessellation and advanced shader stages. Developed in C++ with OpenGL on Linux.",
		image: "/images/projects/opengl_linux/19.jpg",
		technologies: ["OpenGL"],
		platforms: ["Linux"],
		slug: "tessellation-shader-opengl-linux",
		datetime: "2026-10-04T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/RDki7erOauA?si=B8f6C0k7cxkvhoLM",
		github: "https://github.com/MayurTadekar/Real-Time-Rendering/tree/main/01_OpenGL/03_PP/01_Linux/12_Tessellation_Shader",
	},

	// 39
	{
		title: "Sun, Earth, Moon",
		description: "A hierarchical transformation-based OpenGL application that renders the Sun, Earth, and Moon using matrix push/pop operations to establish their orbital relationships. The scene demonstrates model transformations, matrix hierarchy, rotation, translation, and independent object motion, with the Earth revolving around the Sun and the Moon revolving around the Earth. Developed in C++ with OpenGL on Linux.",
		image: "/images/projects/opengl_linux/18.jpg",
		technologies: ["OpenGL"],
		platforms: ["Linux"],
		slug: "sun-earth-moon-opengl-linux",
		datetime: "2026-10-04T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/n41KQz4XmeQ?si=jk9q_U_6-tgratYt",
		github: "https://github.com/MayurTadekar/Real-Time-Rendering/tree/main/01_OpenGL/03_PP/01_Linux/11_Sun_Earth_Moon",
	},

	// 38
	{
		title: "24 Material Spheres",
		description: "The project renders 24 spheres with different material properties under the same lighting conditions, demonstrating how ambient, diffuse, and specular material parameters affect surface appearance. The Phong lighting model and GLSL shaders are used to evaluate and display the different material responses.",
		image: "/images/projects/opengl_linux/17.jpg",
		technologies: ["OpenGL"],
		platforms: ["Linux"],
		slug: "24-material-spheres-opengl-linux",
		datetime: "2026-10-04T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/iYlgKzQnqAc?si=2n9DC6kWLD-Nk733",
		github: "https://github.com/MayurTadekar/Real-Time-Rendering/tree/main/01_OpenGL/03_PP/01_Linux/10_24_Materials",
	},

	// 37
	{
		title: "Three Lights on Sphere",
		description: "The project demonstrates three dynamic RGB light sources—red, green, and blue—revolving around a 3D sphere. Phong lighting combines the ambient, diffuse, and specular contributions from each light to produce continuously changing illumination across the sphere's surface.",
		image: "/images/projects/opengl_linux/16.jpg",
		technologies: ["OpenGL"],
		platforms: ["Linux"],
		slug: "three-lights-on-sphere-opengl-linux",
		datetime: "2026-10-04T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/A_mnkj3i8iE?si=3_7ltp9hS9LwQ5Em",
		github: "https://github.com/MayurTadekar/Real-Time-Rendering/tree/main/01_OpenGL/03_PP/01_Linux/09_Three_Lights",
	},

	// 36
	{
		title: "Per Vertex - Per Fragment Lighting",
		description: "The project compares per-vertex and per-fragment Phong lighting, implementing ambient, diffuse, and specular components through GLSL shaders. Per-vertex lighting calculates illumination at vertices and interpolates the results, while per-fragment lighting performs the calculations independently for each fragment.",
		image: "/images/projects/opengl_linux/15.jpg",
		technologies: ["OpenGL"],
		platforms: ["Linux"],
		slug: "per-vertex-per-fragment-lighting-opengl-linux",
		datetime: "2026-10-04T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/JIqmiqkg5ZQ?si=auBTSw9v62zqyoRk",
		github: "https://github.com/MayurTadekar/Real-Time-Rendering/tree/main/01_OpenGL/03_PP/01_Linux/08_Per_Vertex_Per_Fragment",
	},

	// 35
	{
		title: "Two Lights on Spinning Pyramid",
		description: "The project implements Phong lighting with two independent light sources on a continuously rotating 3D pyramid. Ambient, diffuse, and specular components are calculated per vertex using GLSL, with the resulting lighting values interpolated across the pyramid's surfaces.",
		image: "/images/projects/opengl_linux/14.jpg",
		technologies: ["OpenGL"],
		platforms: ["Linux"],
		slug: "two-lights-on-spinning-pyramid-opengl-linux",
		datetime: "2026-10-04T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/qmhO7fNKVJQ?si=7lYcXJNWJT3dYme-",
		github: "https://github.com/MayurTadekar/Real-Time-Rendering/tree/main/01_OpenGL/03_PP/01_Linux/07_Two_Lights",
	},

	// 34
	{
		title: "Per Fragment Lighting",
		description: "The project implements the Phong lighting model at the fragment level, calculating ambient, diffuse, and specular components for each rendered fragment using interpolated surface normals and light/view directions. The lighting calculations are performed in the GLSL fragment shader for more accurate surface illumination.",
		image: "/images/projects/opengl_linux/13.jpg",
		technologies: ["OpenGL"],
		platforms: ["Linux"],
		slug: "per-fragment-lighting-opengl-linux",
		datetime: "2026-10-04T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/xzo3Ro3ypeI?si=-8dcY8hA7l5NjeAQ",
		github: "https://github.com/MayurTadekar/Real-Time-Rendering/tree/main/01_OpenGL/03_PP/01_Linux/06_Per_Fragment_Light",
	},

	// 33
	{
		title: "Per Vertex Lighting",
		description: "The project implements the Phong lighting model at the vertex level, calculating ambient, diffuse, and specular components using surface normals and light/view directions. The resulting lighting values are interpolated across the surface by the OpenGL rasterization pipeline.",
		image: "/images/projects/opengl_linux/12.jpg",
		technologies: ["OpenGL"],
		platforms: ["Linux"],
		slug: "per-vertex-lighting-opengl-linux",
		datetime: "2026-10-04T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/iEpzop1FeNQ?si=LRNXpqlScRcjKfyO",
		github: "https://github.com/MayurTadekar/Real-Time-Rendering/tree/main/01_OpenGL/03_PP/01_Linux/05_Per_Vertex_Light",
	},

	// 32
	{
		title: "Diffuse Light on Sphere",
		description: "The project demonstrates diffuse lighting on a 3D sphere using surface normals and the direction of a light source. Per-vertex lighting calculations are performed in GLSL, with the resulting intensity interpolated across the sphere's curved surface.",
		image: "/images/projects/opengl_linux/11.jpg",
		technologies: ["OpenGL"],
		platforms: ["Linux"],
		slug: "diffuse-light-on-sphere-opengl-linux",
		datetime: "2026-10-04T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/HrKF56uZ1CM?si=SxWkxpdZbk3LhVuH",
		github: "https://github.com/MayurTadekar/Real-Time-Rendering/tree/main/01_OpenGL/03_PP/01_Linux/04_Diffuse_Light_Sphere",
	},

	// 31
	{
		title: "Diffuse Light on Cube",
		description: "The project demonstrates diffuse lighting on a rotating 3D cube using surface normals and the direction of a light source. Per-vertex lighting calculations are performed in GLSL, with the resulting intensity interpolated across the cube's surfaces.",
		image: "/images/projects/opengl_linux/10.jpg",
		technologies: ["OpenGL"],
		platforms: ["Linux"],
		slug: "diffuse-light-on-cube-opengl-linux",
		datetime: "2026-10-04T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/q71oD1kZ800?si=YhQmcEwidCSrx65C",
		github: "https://github.com/MayurTadekar/Real-Time-Rendering/tree/main/01_OpenGL/03_PP/01_Linux/03_Diffuse_Light_Cube",
	},

	// 30
	{
		title: "Diffuse Light on Pyramid",
		description: "The project demonstrates diffuse lighting on a rotating 3D pyramid using surface normals and the direction of a light source. Per-vertex lighting calculations are performed in GLSL, with the resulting intensity interpolated across the pyramid's surfaces.",
		image: "/images/projects/opengl_linux/09.jpg",
		technologies: ["OpenGL"],
		platforms: ["Linux"],
		slug: "diffuse-light-on-pyramid-opengl-linux",
		datetime: "2026-10-04T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/t-R_w4YKBdw?si=LL8SyD0UW-f9V0K3",
		github: "https://github.com/MayurTadekar/Real-Time-Rendering/tree/main/01_OpenGL/03_PP/01_Linux/02_Diffuse_Light_Pyramid",
	},

	// 29
	{
		title: "Procedural Texture Checkerboard",
		description: "The project generates a checkerboard texture procedurally using mathematical logic instead of loading an image from disk. The generated texture is mapped onto geometry using texture coordinates and sampled through the OpenGL texture pipeline and GLSL shaders.",
		image: "/images/projects/opengl_linux/08.jpg",
		technologies: ["OpenGL"],
		platforms: ["Linux"],
		slug: "procedural-texture-checkerboard-opengl-linux",
		datetime: "2026-10-04T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/hfvuq4cR9S8?si=ilOvYC8rt19i7gbL",
		github: "https://github.com/MayurTadekar/Real-Time-Rendering/tree/main/01_OpenGL/03_PP/01_Linux/08_Procedural_Texture",
	},

	// 28
	{
		title: "Textured 3D Shapes",
		description: "The project applies 2D image textures to 3D pyramid and cube geometry using texture coordinates. Perspective projection and transformation matrices position the objects in 3D space, while GLSL texture sampling renders the mapped textures across their surfaces.",
		image: "/images/projects/opengl_linux/07.jpg",
		technologies: ["OpenGL"],
		platforms: ["Linux"],
		slug: "textured-3d-shapes-opengl-linux",
		datetime: "2026-10-04T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/2JJwfEspZkM?si=HQsv_wzF4EmaKW31",
		github: "https://github.com/MayurTadekar/Real-Time-Rendering/tree/main/01_OpenGL/03_PP/01_Linux/07_Textured_3D_Shapes",
	},

	// 27
	{
		title: "Wicked Smiley",
		description: "The project demonstrates 2D texture mapping by applying a Wicked Smiley image to a rendered rectangle using texture coordinates. The texture is sampled in the GLSL fragment shader, introducing image-based rendering through the OpenGL texture pipeline.",
		image: "/images/projects/opengl_linux/06.jpg",
		technologies: ["OpenGL"],
		platforms: ["Linux"],
		slug: "wicked-smiley-opengl-linux",
		datetime: "2026-10-04T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/fcduCBVmVng?si=fT-L-LdrI9g9ptgu",
		github: "https://github.com/MayurTadekar/Real-Time-Rendering/tree/main/01_OpenGL/03_PP/01_Linux/06_Wicked_Smiley",
	},

	// 26
	{
		title: "3D Rotation",
		description: "The project renders two colored 3D shapes and continuously rotates them using 3D transformation matrices. Perspective projection provides the 3D viewing effect, while GLSL shaders drive the rendering pipeline and real-time animation.",
		image: "/images/projects/opengl_linux/05.jpg",
		technologies: ["OpenGL"],
		platforms: ["Linux"],
		slug: "3d-rotation-opengl-linux",
		datetime: "2026-10-04T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/rDOrxfNWlTM?si=Mr1_yu7P7og614hZ",
		github: "https://github.com/MayurTadekar/Real-Time-Rendering/tree/main/01_OpenGL/03_PP/01_Linux/05_3D_Rotation",
	},

	// 25
	{
		title: "2D Rotation",
		description: "The project renders two colored 2D shapes and continuously rotates them using transformation matrices. The rotation is updated over time to produce smooth animation, demonstrating real-time geometric transformations using GLSL shaders and the OpenGL rendering pipeline.",
		image: "/images/projects/opengl_linux/04.jpg",
		technologies: ["OpenGL"],
		platforms: ["Linux"],
		slug: "2d-rotation-opengl-linux",
		datetime: "2026-10-04T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/otI_JIofCZA?si=-pOtJUk9u1vTOq9m",
		github: "https://github.com/MayurTadekar/Real-Time-Rendering/tree/main/01_OpenGL/03_PP/01_Linux/04_2D_Rotation",
	},

	// 24
	{
		title: "Two Colored Shapes",
		description: "The scene contains a colored triangle and rectangle, each rendered with its own vertex color data. The OpenGL pipeline interpolates the colors across the primitives, while GLSL shaders and perspective projection are used for the rendering pipeline.",
		image: "/images/projects/opengl_linux/03.jpg",
		technologies: ["OpenGL"],
		platforms: ["Linux"],
		slug: "two-colored-shapes-opengl-linux",
		datetime: "2026-10-04T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/TqIKPkVFGsk?si=6V9tKPS_rp5FSwfn",
		github: "https://github.com/MayurTadekar/Real-Time-Rendering/tree/main/01_OpenGL/03_PP/01_Linux/03_Two_Colored_Shapes",
	},

	// 23
	{
		title: "Multicolored Rectangle",
		description: "Each vertex of the rectangle contains a different color, with the OpenGL pipeline interpolating these values across the primitive to produce a smooth multi-colored surface. The project uses GLSL shaders and perspective projection for the rendering pipeline.",
		image: "/images/projects/opengl_linux/02.jpg",
		technologies: ["OpenGL"],
		platforms: ["Linux"],
		slug: "multicolored-rectangle-opengl-linux",
		datetime: "2026-10-04T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/4qO9bAkZweA?si=e4KbmlCB7XnLuUQz",
		github: "https://github.com/MayurTadekar/Real-Time-Rendering/tree/main/01_OpenGL/03_PP/01_Linux/02_Multicolored_Rectangle",
	},

	// 22
	{
		title: "Multi-Colored Triangle",
		description: "Each vertex of the triangle contains a different color, with the OpenGL pipeline interpolating these values across the primitive to produce a smooth multi-colored surface. The project uses GLSL shaders and perspective projection for the rendering pipeline.",
		image: "/images/projects/opengl_linux/01.jpg",
		technologies: ["OpenGL"],
		platforms: ["Linux"],
		slug: "multi-colored-triangle-opengl-linux",
		datetime: "2026-10-04T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/oV1Px8dX1S8?si=F5Wtc7U7e1mEB62h",
		github: "https://github.com/MayurTadekar/Real-Time-Rendering/tree/main/01_OpenGL/03_PP/01_Linux/01_Multi_Colored_Triangle",
	},

	// 21
	{
		title: "Interleaved Cube",
		description: "Each cube vertex contains position, color, normal, and texture-coordinate data arranged sequentially within the same vertex structure. OpenGL accesses each attribute using the appropriate stride and memory offset, allowing multiple vertex attributes to be supplied from a single vertex buffer.",
		image: "/images/projects/opengl_windows/21.jpg",
		technologies: ["OpenGL"],
		platforms: ["Windows"],
		slug: "interleaved-cube-opengl-windows",
		datetime: "2026-10-04T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/IrFCQvc0l-k?si=hP6muOkWu4IzlpKe",
		github: "https://github.com/MayurTadekar/Real-Time-Rendering/tree/main/01_OpenGL/02_PP/01_Windows/14_Interleaved",
	},

	// 20
	{
		title: "Geometry Shader",
		description: "The implementation starts with a single triangle as the input primitive. The Geometry Shader receives the triangle and generates three output triangles, demonstrating how additional geometry can be created directly within the programmable graphics pipeline.",
		image: "/images/projects/opengl_windows/20.jpg",
		technologies: ["OpenGL"],
		platforms: ["Windows"],
		slug: "geometry-shader-opengl-windows",
		datetime: "2026-10-04T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/gIzjL8-XYh0?si=KaisSKp_F5by451o",
		github: "https://github.com/MayurTadekar/Real-Time-Rendering/tree/main/01_OpenGL/02_PP/01_Windows/13_GeometryShader",
	},

	// 19
	{
		title: "Tessellation Shader",
		description: "The project starts with a simple line and uses the Tessellation Control Shader (TCS) and Tessellation Evaluation Shader (TES) to subdivide and evaluate the geometry. The generated tessellated positions are evaluated along a Bezier curve, transforming the original line into a smooth curved shape.",
		image: "/images/projects/opengl_windows/19.jpg",
		technologies: ["OpenGL"],
		platforms: ["Windows"],
		slug: "tessellation-shader-opengl-windows",
		datetime: "2026-10-04T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/JsDtzMhNc7k?si=Ca48iYOi9c0mZn10",
		github: "https://github.com/MayurTadekar/Real-Time-Rendering/tree/main/01_OpenGL/02_PP/01_Windows/12_TessellationShader",
	},

	// 18
	{
		title: "24 Material Spheres",
		description: "Each sphere is assigned different ambient, diffuse, specular, and shininess properties, allowing the visual response of different materials to be compared within the same lighting environment.",
		image: "/images/projects/opengl_windows/18.jpg",
		technologies: ["OpenGL"],
		platforms: ["Windows"],
		slug: "24-material-spheres-opengl-windows",
		datetime: "2026-10-04T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/EGf8OndTmLQ?si=ELCo7b4YZnk9QbLj",
		github: "https://github.com/MayurTadekar/Real-Time-Rendering/tree/main/01_OpenGL/02_PP/01_Windows/09_Lights/07_24_Spheres_Materials",
	},

	// 17
	{
		title: "3 Lights on Sphere",
		description: "The scene contains red, green, and blue lights that revolve around the sphere. Their changing positions continuously modify the illumination across the surface, while their individual colors combine to produce varying RGB lighting effects.",
		image: "/images/projects/opengl_windows/17.jpg",
		technologies: ["OpenGL"],
		platforms: ["Windows"],
		slug: "3-lights-on-sphere-opengl-windows",
		datetime: "2026-10-04T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/1o30CpihQqg?si=dDlhpFTfee9tKyxH",
		github: "https://github.com/MayurTadekar/Real-Time-Rendering/tree/main/01_OpenGL/02_PP/01_Windows/09_Lights/06_ThreeMovingLightsOnStaticSphere",
	},

	// 16
	{
		title: "Sun, Earth, Moon",
		description: "The Earth revolves around the Sun, while the Moon revolves around the Earth. The transformation hierarchy is implemented using Push Matrix and Pop Matrix operations, allowing the Earth's transformations to act as the parent coordinate system for the Moon.",
		image: "/images/projects/opengl_windows/16.jpg",
		technologies: ["OpenGL"],
		platforms: ["Windows"],
		slug: "sun-earth-moon-opengl-windows",
		datetime: "2026-10-04T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/n_m-gqMF3pA?si=Di_0BHV61lvAUGYX",
		github: "https://github.com/MayurTadekar/Real-Time-Rendering/tree/main/01_OpenGL/02_PP/01_Windows/10_PushPopMatrix/01_SolarSystemWithMoon",
	},

	// 15
	{
		title: "Per Vertex-Per Fragment Lighting",
		description: "The Per-Vertex implementation performs ambient, diffuse, and specular calculations in the vertex shader, with the resulting values interpolated across the geometry. The Per-Fragment implementation performs the lighting calculations for each fragment, providing more detailed evaluation across the rendered surface.",
		image: "/images/projects/opengl_windows/15.jpg",
		technologies: ["OpenGL"],
		platforms: ["Windows"],
		slug: "per-vertex-per-fragment-lighting-opengl-windows",
		datetime: "2026-10-04T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/skUDi3rxOQg?si=MDuJCwYAGoI3u00w",
		github: "https://github.com/MayurTadekar/Real-Time-Rendering/tree/main/01_OpenGL/02_PP/01_Windows/09_Lights/05_PerVertePerFragmentToggle",
	},

	// 14
	{
		title: "Per Fragment Lighting",
		description: "The ambient, diffuse, and specular lighting components are calculated independently for each fragment within the fragment shader. This provides more detailed lighting across the sphere's curved surface compared to the previous per-vertex lighting implementation, where lighting values are calculated at vertex locations and interpolated across the geometry.",
		image: "/images/projects/opengl_windows/14.jpg",
		technologies: ["OpenGL"],
		platforms: ["Windows"],
		slug: "per-fragment-lighting-opengl-windows",
		datetime: "2026-10-04T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/sXBoo2N_0TA?si=GX2DLxhlHiP7gwwm",
		github: "https://github.com/MayurTadekar/Real-Time-Rendering/tree/main/01_OpenGL/02_PP/01_Windows/09_Lights/03_PerFragmentLighting/02_Albedo",
	},

	// 13
	{
		title: "Per Vertex Lighting",
		description: "The Per-Vertex implementation performs ambient, diffuse, and specular calculations in the vertex shader, with the resulting values interpolated across the geometry. The Per-Fragment implementation performs the lighting calculations for each fragment, providing more detailed evaluation across the rendered surface.",
		image: "/images/projects/opengl_windows/13.jpg",
		technologies: ["OpenGL"],
		platforms: ["Windows"],
		slug: "per-vertex-lighting-opengl-windows",
		datetime: "2026-10-04T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/lG6xBx6Lyqs?si=ySkjuiD-e4eB6G1f",
		github: "https://github.com/MayurTadekar/Real-Time-Rendering/tree/main/01_OpenGL/02_PP/01_Windows/09_Lights/02_PerVertexLighting/02_Albedo",
	},

	// 12
	{
		title: "Two Lights on Spinning Pyramid",
		description: "The lighting system combines ambient, diffuse, and specular components to calculate the final illumination of the pyramid. The two light sources contribute independently to the scene, producing varying illumination and specular highlights across the pyramid's surfaces as it rotates.",
		image: "/images/projects/opengl_windows/12.jpg",
		technologies: ["OpenGL"],
		platforms: ["Windows"],
		slug: "two-lights-spinning-pyramid-opengl-windows",
		datetime: "2026-10-04T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/7lnU11ai28A?si=M5PROZmrVWvm1Iwc",
		github: "https://github.com/MayurTadekar/Real-Time-Rendering/tree/main/01_OpenGL/02_PP/01_Windows/09_Lights/04_TwoLightsOnSpiningPyramid/02_PerFragment",
	},

	// 11
	{
		title: "Diffuse Light Sphere",
		description: "The sphere is illuminated using a directional light source, with the intensity across its curved surface determined by the relationship between the surface normals and the light direction. The continuous curvature of the sphere provides a clear visualization of smooth diffuse illumination across a 3D surface.",
		image: "/images/projects/opengl_windows/11.jpg",
		technologies: ["OpenGL"],
		platforms: ["Windows"],
		slug: "diffuse-light-sphere-opengl-windows",
		datetime: "2026-10-04T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/vUiKuHOHn5w?si=EqgKaeYls09iL-x0",
		github: "https://github.com/MayurTadekar/Real-Time-Rendering/tree/main/01_OpenGL/02_PP/01_Windows/09_Lights/01_DiffuseLight/03_Sphere",
	},

	// 10
	{
		title: "Diffuse Light Pyramid",
		description: "The pyramid is illuminated using a directional light source, with each face receiving different illumination based on the relationship between its surface normal and the light direction.",
		image: "/images/projects/opengl_windows/10.jpg",
		technologies: ["OpenGL"],
		platforms: ["Windows"],
		slug: "diffuse-light-pyramid-opengl-windows",
		datetime: "2026-10-04T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/AtfT_vL1xK0?si=o_lUhe45t3HvAS7T",
		github: "https://github.com/MayurTadekar/Real-Time-Rendering/tree/main/01_OpenGL/02_PP/01_Windows/09_Lights/01_DiffuseLight/02_Pyramid",
	},

	// 9
	{
		title: "Diffuse Light Cube",
		description: "The cube is illuminated by a directional light source, with the brightness of each surface determined by the relationship between its **surface normal and the light direction**. This produces different illumination levels across the cube's faces as their orientations change relative to the light.",
		image: "/images/projects/opengl_windows/09.jpg",
		technologies: ["OpenGL"],
		platforms: ["Windows"],
		slug: "diffuse-light-cube-opengl-windows",
		datetime: "2026-10-04T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/sFh43E2TxgA?si=LRPCZTdnAD3Hds_0",
		github: "https://github.com/MayurTadekar/Real-Time-Rendering/tree/main/01_OpenGL/02_PP/01_Windows/09_Lights/01_DiffuseLight/01_Cube",
	},

	// 8
	{
		title: "Textured 3D Shapes",
		description: "The project renders a 3D pyramid with a stone texture and a cube featuring a Kundali texture. Each object uses texture coordinates to map 2D image data onto its individual surfaces, demonstrating how texture mapping extends from simple planar geometry to three-dimensional objects.",
		image: "/images/projects/opengl_windows/08.jpg",
		technologies: ["OpenGL"],
		platforms: ["Windows"],
		slug: "textured-3d-shapes-opengl-windows",
		datetime: "2026-10-04T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/TCmusCQ9lpA?si=omWQfI5Hrpr1UJv-",
		github: "https://github.com/MayurTadekar/Real-Time-Rendering/tree/main/01_OpenGL/02_PP/01_Windows/07_Texture/02_TextureTo3DShapes/03_TwoShapes",
	},

	// 7
	{
		title: "Procedural Checkerboard",
		description: "Unlike image-based texture mapping, this project generates the checkerboard pattern programmatically using texture coordinates and shader-based mathematical logic. The resulting pattern is rendered directly onto a quad without relying on an external texture image.",
		image: "/images/projects/opengl_windows/07.jpg",
		technologies: ["OpenGL"],
		platforms: ["Windows"],
		slug: "procedural-checkerboard-opengl-windows",
		datetime: "2026-10-04T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/TCmusCQ9lpA?si=omWQfI5Hrpr1UJv-",
		github: "https://github.com/MayurTadekar/Real-Time-Rendering/tree/main/01_OpenGL/02_PP/01_Windows/07_Texture/04_Checkerboard",
	},

	// 6
	{
		title: "Wicked Smiley",
		description: "The project renders a quad with a smiley-face image mapped across its surface using texture coordinates. The texture is sampled by the fragment shader and applied to the rendered geometry, introducing image-based rendering beyond the earlier vertex-color-based examples.",
		image: "/images/projects/opengl_windows/06.jpg",
		technologies: ["OpenGL"],
		platforms: ["Windows"],
		slug: "wicked-smiley-opengl-windows",
		datetime: "2026-10-04T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/uQDBUy0LJos?si=C0dAaHL8SK0ci3VA",
		github: "https://github.com/MayurTadekar/Real-Time-Rendering/tree/main/01_OpenGL/02_PP/01_Windows/07_Texture/01_2DTexture_SmileyTexture",
	},

	// 5
	{
		title: "3D Rotation Shapes",
		description: "A real-time OpenGL implementation demonstrating 3D rotational transformations applied to multiple colored 3D objects. The scene contains a 3D pyramid and a cube-like geometric object, each rendered with multiple vertex/face colors. The objects continuously rotate in 3D space, allowing different faces to become visible as their orientations change relative to the camera.",
		image: "/images/projects/opengl_windows/05.jpg",
		technologies: ["OpenGL"],
		platforms: ["Windows"],
		slug: "three-dimensional-rotation-shapes-opengl-windows",
		datetime: "2026-10-04T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/L8-enMy4Xhk?si=sXUVYjdNA_ILoOkv",
		github: "https://github.com/MayurTadekar/Real-Time-Rendering/tree/main/01_OpenGL/02_PP/01_Windows/06_3DRotation/02_Colored/02_TwoShapes",
	},

	// 4
	{
		title: "2D Rotation Shapes",
		description: "A real-time OpenGL implementation demonstrating 2D rotational transformations and animation applied to multiple geometric primitives. The scene contains a multi-colored triangle and rectangle, both rendered using per-vertex RGB color attributes. The shapes are continuously rotated using transformation matrices while the GPU interpolates their vertex colors across the rasterized primitives.",
		image: "/images/projects/opengl_windows/04.jpg",
		technologies: ["OpenGL"],
		platforms: ["Windows"],
		slug: "2d-rotation-shapes-opengl-windows",
		datetime: "2026-10-04T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/a4ELovAevL4?si=rU05mKlIVR9cRpBh",
		github: "https://github.com/MayurTadekar/Real-Time-Rendering/tree/main/01_OpenGL/02_PP/01_Windows/05_2DRotation/02_Colored/02_TwoShapes",
	},

	// 3
	{
		title: "Two Colored Shapes",
		description: "The project renders a multi-colored triangle and rectangle, with each primitive using per-vertex RGB color attributes. The graphics pipeline interpolates these colors across the rasterized surfaces, producing smooth color transitions across both shapes.",
		image: "/images/projects/opengl_windows/03.jpg",
		technologies: ["OpenGL"],
		platforms: ["Windows"],
		slug: "two-colored-shapes-opengl-windows",
		datetime: "2026-10-04T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/guJ4IBN4EHE?si=d6X3gXagXkOXgBwU",
		github: "https://github.com/MayurTadekar/Real-Time-Rendering/tree/main/01_OpenGL/02_PP/01_Windows/04_Perspective/02_Colored/02_TwoShapes",
	},

	// 2
	{
		title: "Multi-Colored Rectangle",
		description: "A foundational OpenGL rendering implementation demonstrating a multi-colored rectangle using per-vertex color attributes. Each vertex contributes RGB color information, which is interpolated across the rasterized geometry by the graphics pipeline to produce a smooth multi-colored gradient across the rectangle.",
		image: "/images/projects/opengl_windows/02.jpg",
		technologies: ["OpenGL"],
		platforms: ["Windows"],
		slug: "multi-colored-rectangle-opengl-windows",
		datetime: "2026-10-04T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/01UwILbPD08?si=5jJNrLD2TU54KnKp",
		github: "https://github.com/MayurTadekar/Real-Time-Rendering/tree/main/01_OpenGL/02_PP/01_Windows/04_Perspective/02_Colored/01_SingleShape/02_Rectangle",
	},

	// 1
	{
		title: "Multi-Colored Triangle",
		description: "A foundational OpenGL rendering implementation demonstrating real-time rendering of a single triangle with per-vertex RGB color attributes. The GPU interpolates the vertex colors across the rasterized primitive to generate a smooth multi-colored gradient.",
		image: "/images/projects/opengl_windows/01.jpg",
		technologies: ["OpenGL"],
		platforms: ["Windows"],
		slug: "multi-colored-triangle-opengl-windows",
		datetime: "2026-10-04T00:00:00Z",
		section: "RTR",
		videoLink: "https://www.youtube.com/embed/qknQjHLwZlY?si=h0i_b6tPL3xR9p22",
		github: "https://github.com/MayurTadekar/Real-Time-Rendering/tree/main/01_OpenGL/02_PP/01_Windows/04_Perspective/02_Colored/01_SingleShape/01_Triangle",
	},
];
