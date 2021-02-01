// var path = require("path");
module.exports = {
    //webpack配置
    configureWebpack: {
      //警告 webpack 的性能提示
      performance: {
        hints: 'warning',
        //入口起点的最大体积
        maxEntrypointSize: 50000000,
        //生成文件的最大体积
        maxAssetSize: 30000000,
        //只给出 js 文件的性能提示
        assetFilter: function(assetFilename) {
          return assetFilename.endsWith('.js')
        }
      }
    },
  
    outputDir: 'target',
    // '将dist修改为target', 生产环境构建文件的目录
    /* 取消代码运行的时候eslint阻止项目运行 */
    lintOnSave: false,
    pages: {
      left: {
        // page 的入口
        entry: 'src/pages/left/main.js',
        // 模板来源
        template: 'src/pages/left/left.html',
        // 在 dist/index.html 的输出
        filename: 'left.html',
        // 当使用 title 选项时，
        // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
        title: '左侧界面'
      },
      right: {
        // page 的入口
        entry: 'src/pages/right/main.js',
        // 模板来源
        template: 'src/pages/right/right.html',
        // 在 dist/index.html 的输出
        filename: 'right.html',
        // 当使用 title 选项时，
        // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
        title: '右侧界面'
      }
    },
    publicPath: process.env.NODE_ENV == 'development' ? '/' : './',
  }
  