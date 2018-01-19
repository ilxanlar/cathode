var path = require('path');

module.exports = {
  entry: './src/App',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: { presets: ['es2015', 'react', 'stage-0'] },
          }
        ]
      }
    ]
  },

  devServer: {
    compress: true,
    contentBase: [
      path.join(__dirname, 'public'),
      path.join(__dirname, 'dist')
    ],
    historyApiFallback: true,
    port: 3000
  },

  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src')
    ]
  }
};
