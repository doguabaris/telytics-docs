const config = {
	title: 'Telytics Docs',
	tagline: 'An open-source lightweight, privacy-respecting telemetry system designed for decentralized applications (dApps).',
	url: 'https://doguabaris.github.io',
	baseUrl: '/telytics-docs/',
	onBrokenLinks: 'warn',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.svg',
	organizationName: 'doguabaris',
	projectName: 'telytics-docs',
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},
	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					path: 'docs',
					routeBasePath: '/',
					sidebarPath: require.resolve('./sidebars.js'),
					editUrl: 'https://github.com/doguabaris/telytics-docs/edit/main/',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
	],

	themeConfig: {
		navbar: {
			title: 'Telytics Docs',
			logo: {
				alt: 'Telytics Logo',
				src: 'img/telytics-logo-light.svg',
				srcDark: 'img/telytics-logo-dark.svg',
			},
			items: [
				{
					href: 'https://github.com/doguabaris/telytics',
					label: 'GitHub',
					position: 'right',
				},
			],
		},
		footer: {
			copyright: `© ${new Date().getFullYear()} Doğu Abaris — Telytics is open-source software licensed under the MIT License.`,
		},
	},
};

module.exports = config;
