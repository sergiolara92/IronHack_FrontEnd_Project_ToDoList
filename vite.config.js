// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   build: { outDir: 'docs'},
//   base: process.env.NODE_ENV === 'production' ? '/TaskAppProject/' : '/'
//   //es importante que TaskAppProject tenga las mismas mayusculas que el repo de git, si no fallara
// })


import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    base: process.env.NODE_ENV === 'production' ? '/IronHack_FrontEnd_Project_ToDoList/' : '/',
    build: {
        outDir: 'docs',
        rollupOptions: {
            output: {
                entryFileNames: `assets/file_[name].[hash].js`,
                chunkFileNames: `assets/file_[name].[hash].js`,
                assetFileNames: `assets/file_[name].[hash].[ext]`,
            },
        }
    },
    server: {
        base: process.env.NODE_ENV === 'production' ? '/IronHack_FrontEnd_Project_ToDoList/' : '/',
    }
})