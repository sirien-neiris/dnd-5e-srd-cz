const sidebarMenu = require('../menu');
const moment = require('moment');

const googleAnalytics = process.env.GOOGLE_ANALYTICS;


module.exports = {

    title: 'Český překlad DnD 5e SRD',
    description: 'Český překlad DnD 5e SRD',

    themeConfig: {
        theme: '@vuepress/theme-default',

        // horní navigace
        nav: [
            {
                text: 'FAQ',
                link: '/faq/'
            },
            {
                text: 'd20.cz',
                link: 'http://www.d20.cz/'
            },
        ],

        // boční menu
        sidebar: sidebarMenu,

        displayAllHeaders: false,
        sidebarDepth: 2,

        // odkaz na repo
        repo: 'd20cz/dnd-5e-srd-cz',
        repoLabel: 'GitHub',

        // odkazy na editaci
        docsRepo: 'd20cz/dnd-5e-srd-cz',
        docsDir: 'src',
        docsBranch: 'master',
        editLinks: true,

        // locale
        editLinkText: 'Editace stránky na GitHub',
        lastUpdated: 'Poslední změna',
    },

    configureWebpack: {
        serve: {
            host: '0.0.0.0',
            hot: {
                host: {
                    server: '0.0.0.0',
                    client: 'localhost'
                }
            }
        },
    },

    locales: {
        '/': {
            lang: 'cs',
        }
    },

    extendMarkdown: md => {
        md.use(require('markdown-it-deflist'));
        md.use(
            require('markdown-it-container'),
            ...require('./card/Card')
        );
        md.use(
            require('markdown-it-container'),
            ...require('./card/DnD')
        );
    },

    plugins: [
        ['@vuepress/last-updated', {
            transformer: (timestamp, lang) => {
                moment.locale(lang);
                return moment(timestamp).format('LLL');
            }
        }],
        ['@vuepress/search', {
            searchMaxSuggestions: 10
        }],
        ['@vuepress/medium-zoom'],
        ['@vuepress/google-analytics', {
            'ga': googleAnalytics
        }]
    ],

};

