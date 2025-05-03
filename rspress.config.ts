import * as path from 'node:path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Polars中文指南',
  icon: './docs/public/polars.svg',
  logo: {
    light: '/polars.svg',
    dark: '/polars.svg',
  },
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/web-infra-dev/rspress',
      }
    ],
    outlineTitle: '目录',
    prevPageText: '上一页',
    nextPageText: '下一页',
    enableContentAnimation: true,
    enableAppearanceAnimation: true,
  },
});
