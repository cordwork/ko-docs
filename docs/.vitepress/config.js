export default {
	title: 'CordWork',
	description: '아름다운 디스코드 봇 프레임워크',
	base: '/ko-docs/',
	themeConfig: {
		logo: '/logo.png',
		nav: [
			{ text: '사용법', link: '/guide/' },
		],
		socialLinks: [
			{ icon: 'github', link: 'https://github.com/cordwork/core' },
		],
		sidebar: [
			{
				text: '소개',
				items: [
					{ text: 'CordWork가 뭔가요?', link: '/guide/' },
					{ text: '시작하기', link: '/guide/getting-started' },
				],
			}
		]
	},
}