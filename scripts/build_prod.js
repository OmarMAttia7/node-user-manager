import esbuild from "esbuild";

esbuild.buildSync({
  entryPoints: ['dist/index.js'],
  bundle: true,
  outfile: "prod/index.js",
  minify: true,
  platform: "node",
  format: "esm"
})