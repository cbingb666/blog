import { defineUserConfig } from '@vuepress/cli'
import type { DefaultThemeOptions } from '@vuepress/theme-default'
import { plugins } from './config/config.plugins'
import { themeConfig } from './config/config.themeConfig'
import path from 'path'

export default defineUserConfig<DefaultThemeOptions>({
  base: '/blog/',
  lang: 'en-US',
  title: 'CBingB666 Blog',
  description: '欢迎来到我的博客',
  themeConfig: themeConfig,
  plugins: plugins,
  alias: {
    '@images': path.resolve(__dirname, './public/images'),
  },
})