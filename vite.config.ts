import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  console.log('mode:', mode);
  const env = loadEnv(mode, process.cwd(), '');
  const base = env.BASE_URL || '/';
  return {
    plugins: [react()],
    base
  };
});
