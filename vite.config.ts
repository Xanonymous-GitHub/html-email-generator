import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig({
	plugins: [react(), createHtmlPlugin()],
	build: {
		ssr: true,
		outDir: "dist",
		target: "esnext",
		minify: true,
		rollupOptions: {
			input: "src/generator.tsx",
			output: {
				format: "esm",
				entryFileNames: "generator.js",
				chunkFileNames: "[name]-[hash].js",
			},
		},
	},
	esbuild: {
		legalComments: "none",
	},
	ssr: {
		noExternal: true,
	},
});
