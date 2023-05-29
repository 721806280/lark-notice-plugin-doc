import {defaultTheme, defineUserConfig} from "vuepress";
import {rightAnchorPlugin} from "./plugin/right-anchor/node";

// https://v2.vuepress.vuejs.org/zh/
export default defineUserConfig({
    base: "/feishu-notification-plugin-doc/",
    port: 8090,
    lang: "zh-CN",
    title: "飞书 Jenkins 插件",
    head: [["link", {rel: "icon", href: "/logo.png"}]],
    dest: "docs/.vuepress/doc",
    pagePatterns: ['**/[^.~]*.md', '!.vuepress', '!node_modules'],
    plugins: [
        rightAnchorPlugin({
            name: 'rightAnchor',
            showDepth: 2,
            expand: {
                trigger: 'click',
                clickModeDefaultOpen: true
            },
        })
    ],
    theme : defaultTheme({
        navbar: [
            {text: "指南", link: "/guide/"},
            {text: "其他", link: "/other/"},
            {text: "Gitee", link: "https://gitee.com/xm721806280/feishu-notification-plugin", target: "_blank"},
        ],
        repo: "https://github.com/721806280/feishu-notification-plugin",
        logo: "/logo.png",

        docsRepo: "https://github.com/721806280/feishu-notification-plugin-doc",
        docsBranch: "main",
        editLinkText: "在 GitHub 上编辑此页",
        editLinkPattern: ":repo/edit/:branch/docs/:path",
        lastUpdatedText: "上次更新",
        contributors: false,

        sidebar: {
            "/guide/": [
                {
                    text: "使用介绍",
                    children: [
                        "/guide/",
                        "/guide/quick-start.md",
                        "/guide/FAQ.md",
                        "/guide/CHANGELOG.md",
                    ],
                },
                {
                    text: "使用文档",
                    children: [
                        "/guide/front/freestyle.md",
                        "/guide/front/pipeline.md",
                        "/guide/front/variables.md"
                    ],
                }
            ],
            "/other/": [
                {
                    text: "Java",
                    children: [
                        "/other/git-emoji.md",
                        "/other/maven-resource-filter.md",
                        "/other/swagger2ToOpenApi3.md"
                    ]
                },
                {
                    text: "Unit Test",
                    children: [
                        "/other/squaretest-java-unit-test.md",
                    ]
                }
            ],
        },
        sidebarDepth: 1,
    }),
});
