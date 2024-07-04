const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // publicPath: "/mengenlehreuhr/", // Ruta para que se vean todos los ficheros desde el index.html
  outputDir: "dist" // Nombre de la carpeta generada en la compliación para producción.
})