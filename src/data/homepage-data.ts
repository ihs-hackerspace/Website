import { RelativePath } from "./data-types";

interface HomepageImageSet {
	title: string;
	description: string;
	images: RelativePath[];
}

export const homepageImageCarousel = [
	{
		title: 'Machine Learning',
		description: 'Learn to make neural networks and apply them in fun and engaging ways!',
		images: [
			'/assets/home/IMG_0003.jpg',
			'/assets/home/IMG_0017.jpg',
			'/assets/home/IMG_0097.jpg',
		],
	},
	{
		title: 'Cyber Security',
		description: 'Learn how pentesters break into systems and participate in CTF competitions to test your knowledge and teamwork',
		images: [
			'/assets/home/IMG_0099.jpg',
			'/assets/home/IMG_0102.jpg',
			'/assets/home/IMG_4284.jpg',
		],
	},
	{
		title: 'Arduino',
		description: 'Discover how basic circuits are made and learn to program Wifi-controlled outlets, electronic locks, and just about anything you can imagine!',
		images: [
			'/assets/home/IMG_0003.jpg',
			'/assets/home/IMG_0017.jpg',
			'/assets/home/IMG_0097.jpg',
		],
	},
	{
		title: 'Open Environment',
		description: 'Come explore whatever you want! We\'ll give you the tools to do so!',
		images: [
			'/assets/home/IMG_0099.jpg',
			'/assets/home/IMG_0102.jpg',
			'/assets/home/IMG_4284.jpg',
		],
	},
	{
		title: 'Teach Others',
		description: 'Come teach about what you have learned in your own exploration and share it with everyone!',
		images: [
			'/assets/home/IMG_0003.jpg',
			'/assets/home/IMG_0017.jpg',
			'/assets/home/IMG_0097.jpg',
		],
	},
] as HomepageImageSet[];