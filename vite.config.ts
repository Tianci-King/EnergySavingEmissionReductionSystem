import vue from '@vitejs/plugin-vue'
import { defineConfig, loadEnv } from "vite"
import path from "path";

function resolve(dir) {
  return path.join(__dirname, dir);
}

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      }
    },

    plugins: [vue()],
    server: {
      proxy: {
        "/api": {
          target: "",
          changeOrigin: true, //是否跨域
          //rewrite: (path) => path.replace(/^\/api/, ""), //如果 Apifox 上 接口 并没有 /api 前缀，所以这里需要去掉
          // ws: true, //是否代理 websockets
          // secure: true, //是否https接口
        }
      }
    }
  }
})
