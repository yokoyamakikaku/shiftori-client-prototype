import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  console.log('mode:', mode);
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    base: env.BASE_URL || '/', // 環境変数を使用
  };
});
