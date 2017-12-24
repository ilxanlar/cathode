var path = require('path');

const config = {
  entry: './demo/src/index',

  output: {
    path: path.resolve(__dirname, 'demo'),
    filename: 'demo.js'
  },

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
    contentBase: path.join(__dirname, 'demo'),
    compress: true,
    port: 3000
  }
};

module.exports = config;
