// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  site: 'https://ghostitwe.github.io',
  base: '/algorithms-and-programming-basics',
  integrations: [
    starlight({
      title: 'ОАИП',
      //social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
      sidebar: [
        {
          label: '1 Семестр',
          items: [
            { 
              label: 'Практические работы',
              autogenerate: { directory: 'semester-1/practices'}
            },
          ],
        },
      ],
    }),
  ],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});