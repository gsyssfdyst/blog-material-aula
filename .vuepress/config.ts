import { defineUserConfig } from "vuepress";
import { pwaPlugin } from "vuepress-plugin-pwa2";
import umlPlugin from 'markdown-it-plantuml';

import theme from "./theme.js";

export default defineUserConfig({

  base : "blog-material-aula",
    
  head: [
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],
  lang: "pt-BR",
  title: "Blog Aulas",
  description: "Material de aulas",

  plugins: [
    pwaPlugin({
      // your options
    }),
  ],

  extendsMarkdown: (md) => {    
    md.use(umlPlugin, {openMarker: '```plantuml', closeMarker: '```'})
  },


  theme,

  shouldPrefetch: false,

});
