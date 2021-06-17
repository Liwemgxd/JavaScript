## 使用html-webpack-plugin来理解plugins概念

### 安装webpack环境
可以拷贝webpack初体验中的package.json文件，然后npm install
也可以直接  npm install webpack-cli@3.3.12 webpack@4.44.1

### 安装 html-webpack-plugin 
npm install --save-dev html-webpack-plugin@4.3.0

### 配置 html-webpack-plugin插件
const HtmlWebpackPlugin  = require('html-webpack-plugin')

module.exports = {
    plugins:[
        new HtmlWebpackPlugin({
            template:'index.html'
        })
    ]
}; 