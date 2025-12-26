import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { imagetools } from "vite-imagetools";
import vitePrerender from "vite-plugin-prerender";

// All static routes for prerendering
const staticRoutes = [
  "/",
  "/bangalore",
  "/portfolio",
  "/services",
  "/services/2bhk-interiors",
  "/services/3bhk-interiors",
  "/services/villa-interiors",
  "/services/full-home-design",
  "/services/modular-kitchen",
  "/services/bedroom-design",
  "/services/living-room",
  "/services/wardrobe-design",
  "/services/home-office",
  "/services/kids-room",
  "/services/dining-room",
  "/services/bathroom-design",
  "/services/pooja-room",
  "/services/foyer-entrance",
  "/services/tv-unit",
  "/services/false-ceiling",
  "/services/crockery-unit",
  "/services/study-room",
  "/services/guest-room",
  "/services/balcony-design",
  "/price-calculator",
  "/contact",
  "/thank-you",
  "/terms",
  "/privacy",
  "/articles",
];

const Renderer = vitePrerender.PuppeteerRenderer;

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    server: {
      host: "::",
      port: 8080,
      hmr: {
        overlay: false,
      },
    },
    plugins: [
      react(),
      imagetools({
        defaultDirectives: (url) => {
          // Apply WebP conversion to all jpg/jpeg/png images with ?webp query
          if (url.searchParams.has('webp')) {
            return new URLSearchParams({
              format: 'webp',
              quality: '80',
            });
          }
          return new URLSearchParams();
        },
      }),
      mode === "development" && componentTagger(),
      mode === "production" && vitePrerender({
        staticDir: path.join(__dirname, 'dist'),
        routes: staticRoutes,
        renderer: new Renderer({
          maxConcurrentRoutes: 4,
          renderAfterTime: 500,
        }),
        postProcess(renderedRoute) {
          // Inject prerendered marker
          renderedRoute.html = renderedRoute.html.replace(
            'id="root"',
            'id="root" data-server-rendered="true"'
          );
          return renderedRoute;
        },
      }),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            if (assetInfo.name && /\.(png|jpe?g|gif|svg|webp)$/i.test(assetInfo.name)) {
              return "assets/images/[name]-[hash][extname]";
            }
            return "assets/[name]-[hash][extname]";
          },
        },
      },
    },
  };
});
