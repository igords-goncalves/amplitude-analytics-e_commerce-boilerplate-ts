import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'
import stylelint from 'vite-plugin-stylelint';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');

    return {
        plugins: [
            react(), 
            tailwindcss(),
        ],
        define: {
            'process.env': env,
        },
    };
});
