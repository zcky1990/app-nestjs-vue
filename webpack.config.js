const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const Dotenv = require('dotenv-webpack');

const ENV = process.env.NODE_ENV || 'development';

// Set the output directory based on the environment
const outputDirectory =
  ENV === 'production' ? 'public/javascript' : 'public/javascript';
// Set the filename directory based on the environment to add fingerprint or nor
const fileName = ENV === 'production' ? '[name].[contenthash].js' : '[name].js';

module.exports = {
  entry: {
    index: './src/frontend/index.ts', // Entry point for your Vue.js application,
    about: './src/frontend/about.ts', // Entry point for your Vue.js application
  },
  output: {
    path: path.resolve(__dirname, outputDirectory), // Output directory for bundled JS files
    filename: fileName, // Output filename pattern with content hash for caching
    publicPath: '/javascript/', // Public path used by webpack-dev-server or when referencing assets in HTML
  },
  module: {
    rules: [
      {
        test: /\.vue$/, // Process .vue files with vue-loader
        use: 'vue-loader',
        include: path.resolve(__dirname, 'src', 'frontend'), // Only process Vue files in 'src/frontend'
      },
      {
        test: /\.css$/, // Process .css files
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader', // PostCSS loader for processing CSS with plugins
            options: {
              postcssOptions: {
                plugins: [
                  require('tailwindcss'), // Include Tailwind CSS
                  require('autoprefixer'), // Autoprefixer for browser compatibility
                ],
              },
            },
          },
        ],
        include: path.resolve(__dirname, 'src', 'frontend'), // Only process CSS files in 'src/frontend'
      },
      {
        test: /\.(ts|tsx)$/, // Process TypeScript files
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/], // Append .ts suffix to TypeScript files imported inside .vue files
        },
        include: path.resolve(__dirname, 'src', 'frontend'), // Only process TypeScript files in 'src/frontend'
      },
      {
        test: /\.(png|jpg|gif|svg)$/, // Process image files
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new Dotenv(),
    new VueLoaderPlugin(), // Vue Loader plugin for Vue.js components
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'views/base.hbs'), // HTML template for HtmlWebpackPlugin
      filename: path.resolve(__dirname, 'views/pages/index.hbs'), // Output HTML filename
      chunks: ['index'], // Chunks to include (corresponds to entry points)
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'views/base.hbs'), // HTML template for HtmlWebpackPlugin
      filename: path.resolve(__dirname, 'views/pages/about.hbs'), // Output HTML filename
      chunks: ['about'], // Chunks to include (corresponds to entry points)
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.vue', '.js'], // File extensions to resolve
    alias: {
      '@': path.resolve(__dirname, 'src'), // Alias to resolve '@' to 'src' directory
    },
  },
  watch: true, // Watch for changes and rebuild automatically
  watchOptions: {
    ignored: /node_modules/, // Ignore changes in node_modules directory
  },
};
