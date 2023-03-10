import { defineConfig } from 'vite';
//@ts-ignore
import mkcert from 'vite-plugin-mkcert';

import react from '@vitejs/plugin-react';

let plugins = [react()] as any[]
if(process.env.ENV === "prod") plugins.push(mkcert())

// https://vitejs.dev/config/
export default defineConfig({
	plugins,
	server: { https: true },
});
