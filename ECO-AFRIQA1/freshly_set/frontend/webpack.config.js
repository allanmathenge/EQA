const path = require('path');

module.exports = {
  entry: {
    main: './frontend/src/index.js',
    about: './frontend/src/about.js',
    contact: './frontend/src/contact.js'
  },
  output: {
    path: path.resolve(__dirname, 'static/frontend'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
