/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	compiler: {
		styledComponents: true,
	},
};

module.exports = {
	images: {
		domains: ["static-cdn.jtvnw.net"],
	},
};
