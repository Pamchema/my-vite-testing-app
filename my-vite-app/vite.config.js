import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
// export default {

// }
export default defineConfig({
  plugins: [react()],
  base: "/my-vite-testing-app"
});
