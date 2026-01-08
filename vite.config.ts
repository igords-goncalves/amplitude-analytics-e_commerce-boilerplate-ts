import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'
import mdx from '@mdx-js/rollup';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');

    return {
        plugins: [
            {enforce: 'pre', ...mdx({})},
            react({include: /\.(tsx|ts|jsx|js|md|mdx)$/}), 
            tailwindcss(),
        ],
        define: {
            'process.env': env,
        },
    };
});
