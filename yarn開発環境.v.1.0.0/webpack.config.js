const PATH = require('path');
const JS_PATH = PATH.join(__dirname, './src/js');
const JS_DIST_PATH = PATH.join(__dirname, './');


const MODE = "development";//モードの選択；'production' or 'development'

module.exports = [
  {
    mode: MODE,
    entry: {
      'dist/common/js/bundle': JS_PATH + '/Main.js'
    },
    output: {
      path: JS_DIST_PATH,
      filename: '[name].js'
    },
    resolve: {
      extensions: ['.js'],
      modules: [JS_PATH, 'node_modules']
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  [
                    '@babel/env',
                    {
                      modules: false
                    }
                  ]
                ]
              }
            }
          ],
          exclude: /node_modules/
        }
      ]
    }
  },
];