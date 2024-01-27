const path = require("path");
const webpack = require('webpack'); // Certifique-se de importar o módulo webpack


module.exports = {
  outputDir: path.resolve(__dirname, "../public"),
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({ // Use 'new' para criar uma nova instância
        __VUE_OPTIONS_API__: JSON.stringify(true),
        __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(true)
      }),
    ],
  },
}