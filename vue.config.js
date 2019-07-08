const path = require('path');

module.exports = {
  lintOnSave:undefined,
  baseUrl:process.env.NODE_ENV === 'production' ? '/' + process.env.VUE_APP_PROJECT_NAME + '/' :'/',
  outputDir: process.env.NODE_ENV === 'production' ? path.resolve(__dirname, './dist'+ process.env.VUE_APP_PROJECT_NAME+'') : undefined,
  assetsDir: 'static',
  runtimeCompiler: undefined,// 运行时版本是否需要编译
  productionSourceMap:false,// 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
  // baseUrl: './', //vueConf.baseUrl, // 根域上下文目录
  // outputDir: 'dist', // 构建输出目录
  // assetsDir: 'assets', // 静态资源目录 (js, css, img, fonts)
  // lintOnSave: true, // 是否开启eslint保存检测，有效值：ture | false | 'error'
  // runtimeCompiler: true, 
  // transpileDependencies: [], // 默认babel-loader忽略mode_modules，这里可增加例外的依赖包名
  // productionSourceMap: false, 
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 37.5, //换算基数， 默认100  ，这样的话把根标签的字体规定为1rem为50px,这样就可以从设计稿上量出多少个px直接在代码中写多上px了。
            // unitPrecision: 5, //允许REM单位增长到的十进制数字。
            //propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
            // propBlackList: [], //黑名单
            // exclude: /(node_module)/,  //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)/ 。如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
            // selectorBlackList: [], //要忽略并保留为px的选择器
            // ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
            // replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
            // mediaQuery: false,  //（布尔值）允许在媒体查询中转换px。
            minPixelValue: 2, //设置要替换的最小像素值(3px会被转rem)。 默认 0
            propList: ['*']
          }),
        ]
      }
    }
  },
  devServer: {
    port: 9301,
    overlay: {
      warnings: true,
      errors: true
    }
  }
}