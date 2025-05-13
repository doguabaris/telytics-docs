module.exports = {
	sidebar: [
		'index',
		'getting-started',
		{
			type: 'category',
			label: 'Packages',
			collapsed: false,
			items: [
				{
					type: 'category',
					label: '@telytics/client',
					items: [
						'packages/client/overview',
						'packages/client/installation',
						'packages/client/quickstart',
						'packages/client/api-reference',
						'packages/client/examples',
					],
				},
				{
					type: 'category',
					label: '@telytics/collector',
					items: [
						'packages/collector/overview',
						'packages/collector/installation',
						'packages/collector/api-endpoints',
						'packages/collector/log-storage',
						'packages/collector/examples',
					],
				},
				{
					type: 'category',
					label: '@telytics/dashboard',
					items: [
						'packages/dashboard/overview',
						'packages/dashboard/installation',
						'packages/dashboard/file-based-reading',
						'packages/dashboard/log-explorer',
					],
				},
			],
		},
		'contributing',
	],
};
