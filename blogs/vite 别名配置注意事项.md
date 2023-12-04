---
id: 1
author: 切图仔
title: vite 别名配置注意事项
desc: vite 别名配置注意事项, alias
tags: alias,vite,vue, vue配置, vue.config.js
date: 2023-12-01
---

#### vite 别名配置注意事项

##### 需要注意两点

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://xuanyuan.jinuo.fun:8080/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})
```
                   