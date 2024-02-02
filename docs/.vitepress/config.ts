import {defineConfig, type PageData, type TransformPageContext} from 'vitepress'
import {VERSION} from "./constants";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "飞书 Jenkins 插件",
    description: '帮助开发者快速高效的完成功能开发',
    transformPageData: (pageData: PageData, ctx: TransformPageContext) => {
        pageData.frontmatter.version = VERSION
    },
    themeConfig: {
        logo: './logo.png',
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: '插件指南', link: '/guide/'},
            {text: '技术分享', link: '/java/'},
            {
                text: '更多',
                items: [
                    {text: 'Git Commit Emoji', link: "/other/git-emoji"},
                    {text: 'Swagger 升级 OpenApi', link: "/other/swagger2ToOpenApi3"},
                    {text: 'Maven 资源文件占位符使用', link: "/other/maven-resource-filter"}
                ]
            }
        ],
        sidebar: {
            "/guide/": [
                {
                    text: "使用介绍",
                    items: [
                        {text: '插件简介', link: '/guide/'},
                        {text: '快速开始', link: '/guide/QUICK-START'},
                        {text: '常见问题', link: '/guide/FAQ'},
                        {text: '改动日志', link: '/guide/CHANGELOG'},
                    ],
                },
                {
                    text: "使用文档",
                    items: [
                        {text: 'Freestyle', link: "/guide/feature/freestyle"},
                        {text: 'Pipeline', link: "/guide/feature/pipeline"},
                        {text: '环境变量', link: "/guide/feature/variables"},
                    ],
                }
            ],
            "/java/": [
                {
                    text: 'Java',
                    items: [
                        {text: 'Stream 使用指南', link: '/java/stream'},
                        {text: 'Lambda 使用指南', link: '/java/lambda'},
                    ]
                },
                {
                    text: 'Unit Test',
                    items: [
                        {text: 'SquareTest 单元测试', link: '/java/squaretest'},
                    ]
                },
                {
                    text: 'Template Engine',
                    items: [
                        {text: 'Thymeleaf 模板引擎', link: '/java/thymeleaf'},
                    ]
                },
            ],
            "/other/": [],
        },

        socialLinks: [
            {icon: 'github', link: 'https://github.com/721806280/feishu-notification-plugin'}
        ]
    }
})
