/**
 * @Author  lotuso
 * @Date    2020/9/4 13:57
 * @Version 1.0
 */
'use strict'
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']

module.exports = {
    //包含运行时编译器,启用会增加10k左右
    runtimeCompiler: true,
    //生产环境是否构建map
    productionSourceMap: false,
    pages: {
        index: {
            entry: "src/main.js",
            title: "首页"
        }
    },
    pwa: {
        iconPaths: {
            favicon16: 'favicon.ico',
            favicon32: 'favicon.ico',
            appleTouchIcon: 'favicon.ico',
            maskIcon: 'favicon.ico',
            msTileImage: 'favicon.ico',
        }
    },
    devServer: {
        open: true,
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: {
            // 配置调试期跨域
            '': {
                target: 'http://localhost:8888',
                wa: true,
                changOrigin: true,
                pathRewrite: {
                    '': ''
                }
            }
        }
    },
    //gzip压缩
    configureWebpack: {
        plugins: [
            new CompressionWebpackPlugin({
                filename: '[path].gz[query]',
                algorithm: 'gzip',
                test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
                threshold: 10240,
                minRatio: 0.8
            })
        ]
    }
}
