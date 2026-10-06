
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
	"CUDA",
	"OpenCL",
	"WebGL",
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
