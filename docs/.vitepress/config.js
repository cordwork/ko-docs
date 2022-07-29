const ogDescription = '아름다운 디스코드 봇 프레임워크'
const ogImage = 'https://ko.cordwork.dev/og-image.png'
const ogTitle = 'CordWork'
const ogUrl = 'https://ko.cordwork.dev/ko-docs/'

export default {
	title: 'CordWork',
	description: '아름다운 디스코드 봇 프레임워크',
	// base: '/ko-docs/',
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
			},
			{
				text: '봇 만들어 보기',
				items: [
					{ text: '명령어 핸들링', link: '/guide/command-handling' },
					{ text: '이벤트 핸들링', link: '/guide/event-handling' },
					{ text: '상호작용', link: '/guide/interaction' },
				],
			},
			{
				text: '기본 사항',
				items: [
					{ text: '의존성 주입', link: '/guide/dependency-injection' },
				],
			},
		],
	},

	head: [
		['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
		['meta', { property: 'og:type', content: 'website' }],
		['meta', { property: 'og:title', content: ogTitle }],
		['meta', { property: 'og:image', content: ogImage }],
		['meta', { property: 'og:url', content: ogUrl }],
		['meta', { property: 'twitter:description', content: ogDescription }],
		['meta', { property: 'twitter:title', content: ogTitle }],
		['meta', { property: 'twitter:card', content: 'summary_large_image' }],
		['meta', { property: 'twitter:image', content: ogImage }],
		['meta', { property: 'twitter:url', content: ogUrl }]
	],
}
