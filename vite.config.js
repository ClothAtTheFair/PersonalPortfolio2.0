// @ts-nocheck
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
        rollupOptions: {
            onwarn: (warning, handler) => {
                const { code, frame } = warning;
                if (code === "anchor-is-valid" || code === "a11y-autofocus") {
                    return;
                }
                if (code === "css-unused-selector" && frame && frame.includes("shape")) {
                    return;
                }
                handler(warning);
            }
        }
    },
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
