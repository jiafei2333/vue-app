module.exports = {
  // root: true,
  // parserOptions: { // 当我们将默认的解析器从Espree改为babel-eslint的时候，我们需要指定parseOptions，这个是必须的
  //   parser: 'babel-eslint'
  // },
  // env: { // 预定义环境需要用到的全局变量
  //   browser: true, // 会添加所有的浏览器变量 如 Windows
  // },
  // extends: [
  //   'plugin:vue/essential',
  //   'airbnb-base'
  // ],
  // // required to lint *.vue files
  // plugins: [
  //   'vue'
  // ],
  // // check if imports actually resolve
  // settings: { // 该字段定义的数据可以在所有的插件中共享。这样每条规则执行的时候都可以访问这里面定义的数据
  //   'import/resolver': {
  //     webpack: {
  //       config: 'build/webpack.base.conf.js'
  //     }
  //   }
  // },
  // rules: { // 自定义规则，可以覆盖掉extends的配置。
  //   // don't require .vue extension when importing
  //   'import/extensions': ['error', 'always', {
  //     js: 'never',
  //     vue: 'never'
  //   }],
  //   'vue/no-parsing-error': [2, {
  //     'x-invalid-end-tag': false,
  //     'invalid-first-character-of-tag-name': false
  //   }],
  //   // disallow reassignment of function parameters
  //   // disallow parameter object manipulation except for specific exclusions
  //   'no-param-reassign': ['error', {
  //     props: true,
  //     ignorePropertyModificationsFor: [
  //       'state', // for vuex state
  //       'acc', // for reduce accumulators
  //       'e' // for e.returnvalue
  //     ]
  //   }],
  //   // allow optionalDependencies
  //   'import/no-extraneous-dependencies': ['error', {
  //     optionalDependencies: ['test/unit/index.js']
  //   }],
  //   // allow debugger during development
  //   'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  //   'linebreak-style': 'off',
  //   'no-param-reassign': 'off',
  //   'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  // }
};