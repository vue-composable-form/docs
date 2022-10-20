import { resolve } from 'path'
import type { DefaultTheme } from 'vitepress'
import { defineConfig } from 'vitepress'
import { generateFileSidebar } from './file-sidebar'

const r = (p: string) => resolve(__dirname, p)

generateFileSidebar(r('../useForm'))

const defaultSidebar: DefaultTheme.Sidebar = [
  {
    text: 'Introduction',
    items: [
      {
        text: 'Getting Started',
        link: '../getting-started',
      },
    ],
  },
  {
    text: 'useForm',
    items: [
      {
        text: 'useForm',
        link: '../useForm/useForm',
      },
      {
        text: 'register',
        link: '../useForm/register',
      },
      {
        text: 'unregister',
        link: '../useForm/unregister',
      },
    ],
  },
  {
    text: 'useFormState',
    items: [
      {
        text: 'useFormState',
        link: '../useFormState/useFormState',
      },
    ],
  },
  {
    text: 'useFiledArray',
    items: [
      {
        text: 'useFieldArray',
        link: '../useFiledArray/useFiledArray',
      },
    ],
  },
]


export default defineConfig({
  title: 'vue-use-form',
  description: 'composition api form validator for vue',
  // appearance: false,
  lastUpdated: true,
  themeConfig: {
    sidebar: {
      '/': defaultSidebar,
    },
    nav: [
      {
        text: 'Playground',
        link: 'https://vue-use-form-play.netlify.app/'
      },
      ...defaultSidebar,
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vue-use-form/vue-use-form' },
    ],
    footer: {
      copyright: 'Copyright © 2022-present webfansplz',
    },
    editLink: {
      pattern: 'https://github.com/vue-use-form/vue-use-form',
      text: 'Edit this page on Gitlab',
    },
    lastUpdatedText: 'Last Updated',
    localeLinks: {
      text: 'English',
      items: [
        { text: '简体中文', link: 'https://netlify.app' },
      ],
    },
  },
})
