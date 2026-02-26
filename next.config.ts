import type { NextConfig } from "next";
import { codeInspectorPlugin } from "code-inspector-plugin";

const nextConfig: NextConfig = {
  // code-inspector in dev (Turbopack)
  turbopack: {
    rules: codeInspectorPlugin({ bundler: "turbopack" }),
  },
  // code-inspector in production build (webpack)
  webpack(config) {
    config.plugins.push(codeInspectorPlugin({ bundler: "webpack" }));
    return config;
  },
};

export default nextConfig;
