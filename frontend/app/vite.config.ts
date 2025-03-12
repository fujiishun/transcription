import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  esbuild: {
    jsxInject: `import React from 'react'`,
    jsxFactory: "React.createElement",
    jsxFragment: "React.Fragment",
    jsxImportSource: "react",
  },
  server: {
    watch: {
      usePolling: true, // ファイル変更をポーリングで監視
    },
    hmr: {
      overlay: true, // エラーが発生したときにブラウザに通知
    },
    host: true, // `localhost` だけでなく、LAN 経由でもアクセス可能にする
    strictPort: true, // ポートを固定して起動
  },
});
