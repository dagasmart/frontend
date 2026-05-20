import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        svelte(),
        viteStaticCopy({
            targets: [
                {
                    src: 'scripts', // 你的自定义目录
                    dest: ''        // 输出位置
                },
                {
                    src: 'images', // 你的自定义目录
                    dest: ''       // 输出位置
                }
            ],
        })
    ],
    build: {
        outDir: 'dist/web-assets', // 确保输出目录正确设置，Vite 会自动处理 index.html 到 public 目录下。
        assetsDir: 'assets' // 静态资源目录名，可根据需要调整。默认是 assets。
    }
})
