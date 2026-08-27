import { defineConfig } from 'vitepress'

// Published to GitHub Pages at
// https://systemik-solutions.github.io/glycerine-aksara-user-guide/
// Change `base` to '/' if the site later moves to its own domain.
const base = '/glycerine-aksara-user-guide/'

export default defineConfig({
  base,
  lang: 'en-AU',
  title: 'Glycerine Aksara',
  description:
    'User guides for the Glycerine Aksara Viewer and Editor — tools for reading and creating editions of Gāndhārī manuscripts.',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: `${base}favicon.svg`, type: 'image/svg+xml' }],
  ],
  themeConfig: {
    logo: '/images/logo.svg',
    siteTitle: 'Glycerine Aksara',

    nav: [
      { text: 'Viewer Guide', link: '/viewer/', activeMatch: '^/viewer/' },
      { text: 'Editor Guide', link: '/editor/', activeMatch: '^/editor/' },
      { text: 'Concepts', link: '/concepts/', activeMatch: '^/concepts/' },
      { text: 'Reference', link: '/reference/glossary', activeMatch: '^/reference/' },
    ],

    sidebar: {
      '/viewer/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'About the Viewer', link: '/viewer/' },
            { text: 'Opening an Edition', link: '/viewer/opening-an-edition' },
            { text: 'The Viewer at a Glance', link: '/viewer/interface' },
          ],
        },
        {
          text: 'Reading a Manuscript',
          items: [
            { text: 'Navigating the Image', link: '/viewer/navigating-images' },
            { text: 'Reading the Transliteration', link: '/viewer/transliteration' },
            { text: 'Translation and Chāyā', link: '/viewer/translation-and-chaya' },
            { text: 'Inspecting an Aksara', link: '/viewer/inspecting-aksaras' },
            { text: 'Word and Lemma Details', link: '/viewer/word-details' },
          ],
        },
        {
          text: 'Research Tools',
          items: [
            { text: 'Glossary View', link: '/viewer/glossary-view' },
            { text: 'Paleography View', link: '/viewer/paleography-view' },
            { text: 'The Edition Report', link: '/viewer/edition-report' },
            { text: 'Sharing and Citing', link: '/viewer/sharing-and-citing' },
          ],
        },
      ],

      '/editor/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'About the Editor', link: '/editor/' },
            { text: 'Accounts and Signing In', link: '/editor/accounts' },
            { text: 'The Workspace at a Glance', link: '/editor/workspace' },
          ],
        },
        {
          text: 'Organising Material',
          items: [
            { text: 'Collections', link: '/editor/collections' },
            { text: 'Texts', link: '/editor/texts' },
            { text: 'Editions', link: '/editor/editions' },
            { text: 'Uploading Images', link: '/editor/images' },
          ],
        },
        {
          text: 'Transcribing',
          items: [
            { text: 'Transcription Workflow', link: '/editor/transcription-workflow' },
            { text: 'Creating Tokens', link: '/editor/tokens' },
            { text: 'Lines and Line Breaks', link: '/editor/lines' },
            { text: 'Aksaras and Graphemes', link: '/editor/aksaras' },
            { text: 'Sequences', link: '/editor/sequences' },
          ],
        },
        {
          text: 'Lexical Work',
          items: [
            { text: 'Lemmas', link: '/editor/lemmas' },
            { text: 'Canonical Lemmas', link: '/editor/canonical-lemmas' },
            { text: 'The Lemma Queue', link: '/editor/lemma-queue' },
            { text: 'Inflections and Cognates', link: '/editor/inflections' },
          ],
        },
        {
          text: 'Publishing',
          items: [
            { text: 'Review and Publication', link: '/editor/publishing' },
            { text: 'How Editions Appear in the Viewer', link: '/editor/viewer-preview' },
          ],
        },
      ],

      '/concepts/': [
        {
          text: 'Core Concepts',
          items: [
            { text: 'Overview', link: '/concepts/' },
            { text: 'The Data Model', link: '/concepts/data-model' },
            { text: 'Editions', link: '/concepts/editions' },
            { text: 'Aksaras and Transliteration', link: '/concepts/aksaras' },
            { text: 'Annotations', link: '/concepts/annotations' },
            { text: 'IIIF and Deep-Zoom Images', link: '/concepts/iiif' },
          ],
        },
      ],

      '/reference/': [
        {
          text: 'Reference',
          items: [
            { text: 'Glossary', link: '/reference/glossary' },
            { text: 'Keyboard Shortcuts', link: '/reference/keyboard-shortcuts' },
            { text: 'Troubleshooting', link: '/reference/troubleshooting' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Systemik-Solutions' },
    ],

    search: {
      provider: 'local',
    },

    outline: { level: [2, 3] },

    editLink: {
      pattern:
        'https://github.com/Systemik-Solutions/glycerine-aksara-user-guide/edit/main/docs/:path',
      text: 'Suggest an edit to this page',
    },

    footer: {
      message: 'Glycerine Aksara — Systemik Solutions',
      copyright: `© ${new Date().getFullYear()} Systemik Solutions`,
    },
  },
})
