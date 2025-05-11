import * as path from 'node:path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Polars中文指南',
  description:"polars-python中文指南",
  icon: './docs/public/polars.svg',
  logoText:"Polars中文指南",
  logo: {
    light: '/polars.svg',
    dark: '/polars.svg',
  },
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/kamiertop/polars-doc',
      }
    ],
    outlineTitle: '目录',
    prevPageText: '上一页',
    nextPageText: '下一页',
    enableContentAnimation: true,
    enableAppearanceAnimation: true,
    outline: true,
    lastUpdated: true,
    lastUpdatedText: "上次更新时间",
    // editLink: {
    //   text:"📝在 GitHub 上编辑此页",
    //   docRepoBaseUrl: "https://github.com/kamiertop/polars-doc",
    // },
  },
  search: {
    codeBlocks: true,
  }
});
