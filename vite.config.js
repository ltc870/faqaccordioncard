import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";

export default defineConfig({
    base: "/faqaccordioncard/",
    css: {
        postcss: {
            plugins: [autoprefixer],
        },
    },
});
