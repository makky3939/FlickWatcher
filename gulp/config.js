var dest = './build';
var src = './src';

module.exports = {
  dest: dest,

  js: {
    src: src + '/js/**',
    dest: dest + '/js',
    uglify: false
  },

  webpack: {
    entry: src + '/js/app.jsx',
    output: {
      filename: 'bundle.js'
    },
    module: {
      loaders: [
        { test: /\.jsx$/, loader: 'jsx-loader' }
      ]
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    }
  },

  copy: {
    src: [
      src + '/www/index.html'
    ],
    dest: dest
  }
}