// https://vitejs.dev/config/
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import rollupPluginHtmlTemplate from './build-utils/rollup-plugin-html-template.cjs'
import dayjs from 'dayjs';

// 变量存放目录
const envDir = 'env'

// 路径转换
function resolve (relativePath: string) {
  return path.resolve(__dirname, relativePath)
}


export default defineConfig(function ({ mode }) {
  const env = loadEnv(mode, resolve(envDir))
  console.log("环境变量", resolve(envDir),env)
  
  return {
    server: {
      port: 7100,
      strictPort: true,
      open: false
    },
    envDir, 
    base: env.VITE_ROUTER_BASE,
    
    build: {
      target: 'es2015',
      assetsDir: 'build',
      rollupOptions: {
        manualChunks: {
          'vue-ad': ['axios', 'dayjs'],          
          'vue-vvp': ['vue', 'vue-router'],
          'echarts': ['echarts'],
          'swiper': ['swiper'],
        },
      }
    },
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    plugins: [
      rollupPluginHtmlTemplate({
        author: 'bestime',
        buildTimestamp: +new Date(),
        buildDate: dayjs().format('YYYY-MM-DD HH:mm:ss')
      }),
      vue()
    ],
  }
})
