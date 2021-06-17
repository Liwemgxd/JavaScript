## loader的使用
### 1 配置webpack和babal的环境

拷贝过来webpack初体验项目的package.json，然后 
npm install (其实是在安装webpack)
npm install --save-dev babel-loader @babel/core @babel/preset-env

### 2 配置babel-loader
参考文档：https://www.webpackjs.com/loaders/babel-loader/

### 3引入core-js

npm install --save-dev core-js
js文件中： import "core-js/stable";
### 4 打包测试

npm run webpack