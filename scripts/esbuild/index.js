import esbuild from "esbuild";
esbuild.buildSync({
  entryPoints: ["build/index.js"],
  bundle: true,
  outfile: "dist/index.js",
  minify: true,
  platform: "node",
  external: ["argon2"],
  format: "esm",
});
