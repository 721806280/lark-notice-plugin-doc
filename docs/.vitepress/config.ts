import {defineConfig, type PageData, type TransformPageContext} from 'vitepress'
import {VERSION} from "./constants";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "飞书 Jenkins 插件",
    description: '用于将构建结果推送到飞书平台',
    base: "/feishu-notification-plugin-doc/",
    head: [['link', {rel: 'icon', type: 'image/x-icon', href: '/feishu-notification-plugin-doc/favicon.ico'}]],
    transformPageData: (pageData: PageData, ctx: TransformPageContext) => {
        pageData.frontmatter.version = VERSION
    },
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: '/logo.png',
        search: {
            provider: 'local',
        },
        editLink: {
            pattern: 'https://github.com/721806280/feishu-notification-plugin-doc/edit/2.0.0/docs/:path',
            text: '在 GitHub 上编辑此页面'
        },
        lastUpdated: {
            text: '最后更新于',
        },
        outline: {
            label: '页面导航'
        },
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },
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
        ],
        footer: {
            message: '<a href="https://github.com/721806280/feishu-notification-plugin/blob/main/LICENSE">MIT License</a>',
            copyright: 'Copyright © 2024 <a href="https://github.com/721806280/feishu-notification-plugin">Hacker</a>'
        }
    }
})