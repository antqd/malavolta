import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
      { protocol: "http", hostname: "**" },
    ],
  },

  // ❗️Non impostare distDir o outputFileTracingRoot su Vercel.
  // distDir: ".next",
  // outputFileTracingRoot: undefined,
  // output: undefined,

  // (Opzionale) evita che ESLint blocchi la build per warning residui.
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Usa il tuo loader solo sui sorgenti (evita node_modules).
  turbopack: {
    rules: {
      "src/**/*.{jsx,tsx}": {
        loaders: [path.resolve("./src/visual-edits/component-tagger-loader.js")],
      },
    },
  },
};

export default nextConfig;
