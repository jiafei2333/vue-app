# demo02-kx_app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



# 步骤

## 配置

1. 创建项目

```bash
npm install -g @vue/cli
vue create demo02-kx_app
cd demo02-kx_app
```
2. UI

`npm i vant -S`

3. babel

` npm i babel-plugin-import -D`  自动按需引入组件
`  npm install -D @babel/core @babel/plugin-transform-runtime @babel/preset-env babel-loader `

4. webpack

安装 ` npm install --save-dev webpack webpack-cli webpack-dev-server webpack-merge `

新建 `build/webpack.base.conf.js`、`build/webpack.dev.conf.js`、`build/webpack.prod.conf.js`

`package.json`，修改:
```bash
"dev": "webpack-dev-server --env.development --config ./build/webpack.dev.conf",
"build": "webpack --config ./build/webpack.prod.conf",
```

webpack打包配置：

loader】

`npm install -D vue-loader vue-template-compiler` 解析.vue后缀文件
`npm install -D vue-style-loader css-loader postcss-loader less less-loader style-resources-loader` 解析样式文件
`npm install file-loader --save-dev`

plugin】

`npm install -D mini-css-extract-plugin html-webpack-plugin clean-webpack-plugin `


5. eslint

` npm install -D eslint babel-eslint eslint-config-airbnb eslint-config-airbnb-base eslint-plugin-import eslint-plugin-promise ` 待完善

新建 .eslintrc.js

## 布局

1. 页面布局

`<router-view />`


# 相关文章

1. [vue-loader](https://vue-loader.vuejs.org/zh/guide/)
2. [eslint](https://juejin.im/post/6844903859488292871)

