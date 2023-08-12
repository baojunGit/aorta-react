# 技术栈

- 语言：Typescript

- 框架：React V17.0.2

  V18 更新后许多第三方库还未完善，使用会有问题

- UI 库：Ant Design

- CSS 预处理：SCSS

- 路由：React-router-dom V6

  最新版本为 v6，在 v5 的基础上，简化了嵌套路由的定义，强化了函数式和 hook 思想

- 全局状态管理：rematch

  使用 rematch 这个 redux 的封装库。rematch 对 TypeScript 有更好的支持，使用更少的模板代码，简化了 action 的创建、store 的配置等，降低了 redux 的使用难度。

- 网络请求：Axios

- chrome 测试工具

  1. React Developer Tools

     > 显示 React 的 dom 结构、查看 React 边界和传递属性等

  2. Redux DevTools

     > 通过 redux-devtools， 我们可以清晰的看到当前 store 仓库中的 state 是怎么样的，在可视化工具的左边，我们还可以看到触发的 action 的变化

     <font color=red>注意：</font>还需要安装`npm i redux-devtools-extension -- save`，使用 composeWithDevTools 方法才会生效

# 初始化项目

- 推荐使用 vite 生成:

  - 使用 npm：

    ```shell
    npm init vite@latest
    ```

  - 使用 yarn：

    ```shell
    yarn create vite
    ```

  - 使用 pnpm（推荐选用 pnpm）

    ```shell
    pnpm create vite
    ✔ Project name: … react18-admin
    ✔ Select a framework: › React
    ✔ Select a variant: › TypeScript
    ```

  <font color=red>下载包速度太慢</font>可以全局设置镜像源为淘宝镜像

  `npm config set registry https://registry.npm.taobao.org`

  重置为默认

  `npm config set registry https://registry.npmjs.org`

- 启动项目:

  ```shell
  cd react18-admin
  pnpm install
  pnpm run dev
  ```

# 项目配置

- editorconfig

  `是一种通用的配置文件，解决许多不同代码编辑器（如Visual Studio Code、Sublime Text、WebStorm）的兼容性问题，特别是开源项目无法保证所有打开你项目的人用的是相同编辑器`

  **.editorconfig**文件配置

  ```shell
  # https://editorconfig.org

  # 表示停止在父级目录中寻找 .editorconfig 文件
  root = true

  # 对所有文件生效配置
  [*]
  # 定义文件字符编码为 UTF-8
  charset = utf-8

  # 定义缩进风格为使用空格
  indent_style = space

  # 定义缩进大小为 2 个空格
  indent_size = 2

  # 定义换行符类型为 LF（Unix/Linux 风格）
  end_of_line = lf

  # 删除行尾的空白字符
  trim_trailing_whitespace = true

  # 在文件末尾插入一个空行
  insert_final_newline = true




  ```

- eslint/prettier

# 目录结构

```
aorta-react
├── node_modules（依赖包）
├── public (静态文件，不参与打包)
|   ├── index.html（public里所有文件都是为了它而服务）
├── src（源代码文件夹）
|   ├── api（封装后端接口请求）
│   ├── components (放置公共组件)
|   ├── config（系统配置：环境变量）
|   ├── hook（自定义hook）
|   ├── layout（存放布局组件）
|   ├── router（路由封装）
|   ├── types（公共类型定义）
|   ├── utils（工具方法）
|   ├── views（页面）
|   ├── index.tsx（入口文件）
│   ├── App.tsx（描述app）
│   └── store (redux配置目录)
│       ├── index.tsx (创建store)
│       ├── features (创建切片目录，文件格式xxxSlice.ts)
│   └── utils (存放自己封装的工具类函数，共享方法)
│       ├── request.ts (axios封装)
├── .gitignore（git忽略文件）
└── package.json（描述项目相关信息包括依赖）
├── README.md（项目说明）
├── tsconfig.json（typescript配置文件）  .
├── prettierrc.json（prettier配置文件）
├── .prettierignore（不需要格式化的文件）
```

# VScode 快捷键

### 安装扩展插件

- ES7+ React/Redux/React-Native snippets

### 快捷命令

- 快捷生成函数组件：rafce

# [前端工程化](https://juejin.cn/post/7111922283681153038)

> 使用 create-react-app 脚手架创建的项目，如果想要修改编译配置，可以通过 npm run eject 弹出配置后魔改。但是，eject 是不可逆操作，弹出配置后，你将无法跟随官方的脚步去升级项目的 react-script 版本。

#### 重写 CRA 配置

一般可以有以下几种方式

1. 通过 CRA 官方支持的 `--scripts-version` 参数，创建项目时使用自己重写过的 react-scripts 包

2. 使用 [react-app-rewired](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Ftimarney%2Freact-app-rewired) + [customize-cra](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Farackaf%2Fcustomize-cra) 组合覆盖配置 (选用该方案)

   - 安装依赖 `npm install react-app-rewired customize-cra --save-dev`

   - 修改 `package.json` 中的项目运行脚本

     ```
     "scripts": {
         "start": "react-app-rewired start",
         "build": "react-app-rewired build",
         "test": "react-app-rewired test",
         "eject": "react-scripts eject",
         "prepare": "husky install"
       },
     ```

   - 根目录新建配置文件 config-overrides.js，路径别名配置

     ```
     /* config-overrides.js */
     const path = require('path')
     const { override, addWebpackAlias, addPostcssPlugins, addDecoratorsLegacy, adjustStyleLoaders } = require('customize-cra');

     /* config-overrides.js */
     module.exports = override(
       // 设置别名路径
       addWebpackAlias({ //路径别名
         '@': path.resolve(__dirname, 'src'),
       }),
       addPostcssPlugins([
         require('tailwindcss'),
         require('autoprefixer')
       ]),
       // 配置装饰器
       addDecoratorsLegacy(),
       // 配置指定文件为sass全局文件，可以不用导入就可以使用
       adjustStyleLoaders(rule => {
         if (rule.test.toString().includes('scss')) {
           rule.use.push({
             loader: require.resolve('sass-resources-loader'),
             options: {
               resources: [
                 './src/style/global.scss',
               ]
             }
           });
         }
       })
     )
     ```

3. 使用 [craco](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fgsoft-inc%2Fcraco) 覆盖配置（AntDesign 官方推荐，当前 v6 版本使用得匹配 react-scripts4.0 版本）

   安装依赖 `npm install @craco/craco --save-dev`

   **craco 6.4.3**与几乎同时发布的**react-scripts 5.0.0**不兼容，会有如下报错，只能用在**react-scripts 4.0.0**

   ```
   npm ERR! While resolving: frontend@0.1.0
   npm ERR! Found: react-scripts@5.0.0
   npm ERR! node_modules/react-scripts
   npm ERR!   react-scripts@"^5.0.0" from the root project
   npm ERR!   peer react-scripts@"^5.0.0" from craco-esbuild@0.5.0
   npm ERR!   node_modules/craco-esbuild
   npm ERR!     dev craco-esbuild@"*" from the root project
   npm ERR!
   npm ERR! Could not resolve dependency:
   npm ERR! peer react-scripts@"^4.0.0" from @craco/craco@6.4.3
   npm ERR! node_modules/@craco/craco
   npm ERR!   dev @craco/craco@"6.4.3" from the root project
   npm ERR!   peer @craco/craco@"^6.0.0" from craco-esbuild@0.5.0
   npm ERR!   node_modules/craco-esbuild
   npm ERR!     dev craco-esbuild@"*" from the root project
   ```

#### TypeScript 配置

1. TypeScript 相关的包，在 create-react-app 生成的 ts 项目里已经默认安装了如下的包

   ```
   typescript
   @types/react
   @types/react-dom
   ```

2. 编辑 tsconfig.json 配置文件

   ```
   {
     "compilerOptions": {
       "target": "es5",
       "lib": [
         "dom",
         "dom.iterable",
         "esnext"
       ],
       "allowJs": true, // 允许编译javascript代码
       "skipLibCheck": true,
       "esModuleInterop": true,
       "allowSyntheticDefaultImports": true,
       "strict": false, // 取消严格模式
       "noImplicitAny": true, // 使用隐含any声明的表达式或者代码会提示错误
       "forceConsistentCasingInFileNames": true,
       "noFallthroughCasesInSwitch": true,
       "module": "esnext", // 模块引入规范
       "moduleResolution": "node",
       "resolveJsonModule": true,
       "isolatedModules": true,
       "noEmit": true,
       "jsx": "react-jsx", // 支持基于react创建的jsx文件
       "plugins": [
         {
           "name": "typescript-plugin-css-modules"
         }
       ],
       "baseUrl": ".",
       "paths": {
         "@/*": [
           "src/*"
         ]
       },
     },
     // 解决TS2304错误：找不到名称xxx
     "typeRoots": [
       "./node_modules/@types/",
       "./types"
     ],
     "include": [
       "src/**/*.ts",
       "src/**/*.d.ts",
       "src/**/*.tsx"
     ]
   }
   ```

#### 配置环境变量

> create-react-app 脚手架中内置了 dotenv，允许我们在 React 项目中配置环境变量，但环境变量的名字必须以 REACT*APP*开头

1. 在项目根目录下创建 `.env`(所有环境通用)、 `.env.development`和`.env.production`两个环境配置文件，定义环境变量
2. 在项目中可以通过 process.env.环境变量名获取变量的值

#### [自定义环境](https://balajisblog.com/environment-variables-in-react)

> create-react-app 默认支持的多环境 dotenv 文件，可是这个环境经过翻查源代码，确定了是根据环境变量`NODE_ENV`来声明，这就特么有点受限了， 虽说 NODE_ENV 你可以随意指定，然而很多第三方包在使用这个 NODE_ENV 的时候都约定成俗的去使用一些`development`和`production`的值，如果我们为了支持更多 dotenv 文件去指定其他 NODE_ENV 的值，可能会带来更多的其他问题，所以我们开拓需要其他的方案。

- 方案：在不更改 NODE_ENV 的情况下自定义配置多个环节，[vue 也是类似方案](https://juejin.cn/post/6887812836639113224)

  1. 安装[env-cmd](https://github.com/toddbluhm/env-cmd) `npm install --save env-cmd`

  2. 在项目根目录创建文件`.env.dev`、 `.env.test`、 `.env.st`、 `.env.prod`

  3. `package.json`为不同的环境添加自定义脚本

     ```json
      "scripts": {
         "serve:dev": "env-cmd -f .env.dev react-app-rewired start",
         "build:dev": "env-cmd -f .env.dev react-app-rewired build",
         "serve:prod": "env-cmd -f .env.prod react-app-rewired start",
         "build:prod": "env-cmd -f .env.prod react-app-rewired build",
         "test": "react-app-rewired test",
         "eject": "react-scripts eject"
       },
     ```

# 代码风格

### JS 编码规范

> [ESLint](https://eslint.org/)+[Prettier](https://prettier.io/)，Js 编码代码检测工具，检测并提示错误或警告信息，**ESLint 更关注代码语法质量，Prettier 更关注代码风格**

1. VScode 安装插件：

   `ESLint`和`Prettier - Code formatter`

2. 安装依赖

   - 安装 ESLint： **vite 创建的项目如果生成了.eslintrc.cjs，表示自带集成 eslint，无需再安装**

   - 安装 Prettier： `pnpm install prettier -D`

3. 在项目根目录创建`.prettierrc.cjs`配置文件，进行配置

4. 在项目根目录创建`.vscode`目录，在目录内创建`settings.json`进行配置，比如自动保存格式化

5. Prettier 和 ESLint 相集成

   我们要使用 Prettier 也要使用 ESLint,但是呢?这两个都有自己的规则,所有我们要各取所需【解决规则冲突】,安装 eslint-config-prettier eslint-plugin-prettier 依赖。

   - eslint-config-prettier 禁用与 Prettier 冲突的规则
   - eslint-plugin-prettier 使用 Prettier 的规则

   `npm install eslint-config-prettier eslint-plugin-prettier --save-dev`

6. 删除 package.json 中的 eslintConfig 属性,在根目录下新建`.eslintrc.js`(与 package.json 文件同级)并添加如下代码

   ```javascript
   // 代码质量规范，更改代码后要重新运行才能生效
   module.exports = {
   	env: {
   		// 运行环境：浏览器，es6+语法，node
   		browser: true,
   		es2021: true,
   		node: true
   	},
   	// extends 的顺序后面会覆盖前面，prettier的配置必须放在最后
   	extends: ['react-app', 'plugin:prettier/recommended'],
   	rules: {
   		// allow debugger during development
   		'no-debugger': process.env.REACT_APP_ENV === 'prod' ? 'error' : 'off',
   		'no-console': process.env.REACT_APP_ENV === 'prod' ? 'error' : 'off',
   		// 不符合prettier风格的代码警告
   		'prettier/prettier': [
   			'warn',
   			{
   				// singleQuote: true, 使用单引号
   			}
   		]
   		// "indent": ["error", 4],
   	}
   };
   ```

   报错<font color=red>Failed to load config "react-app" to extend from.</font>

   解决`npm install eslint-config-react-app --save-dev`

7. 新建`.prettierrc.js`并添加如下代码

   ```javascript
   // 代码风格规范
   module.exports = {
   	printWidth: 80,
   	/* tab缩进大小为2 */
   	tabWidth: 2,
   	/* 使用tab缩进，默认false */
   	useTabs: false,
   	/* 行尾风格配置 */
   	endOfLine: 'lf',
   	/* '>' 是否单独放一行    */
   	bracketSameLine: true,
   	/* JSX属性值使用单引号和模板字符串 */
   	jsxSingleQuote: true,
   	/* 使用单引号，prettier默认双引号，eslint不支持 */
   	singleQuote: true,
   	/* 结尾显示分号 */
   	semi: true,
   	/* 对象，数组括号与文字之间加空格 { foo: bar } */
   	bracketSpacing: true,
   	/* 箭头函数单一参数省略括号 */
   	arrowParens: 'always',
   	/* 有效的尾随逗号（对象、数组等） */
   	trailingComma: 'all',
   	/* 在jsx中把'>' 是否单独放一行    */
   	jsxBracketSameLine: true
   };
   ```

8. 新建`.eslintignore`和`.prettierignore`，都添加如下代码

   ```
   # 不用检测的文件
   build
   node_modules
   public
   dist
   src/assets
   README.md
   package.json
   package-lock.json
   ```

### 样式编码规范

> [Stylelint](https://stylelint.io/)负责样式文件代码质量检查

1. VScode 安装插件：`Stylelint`
2. 安装主依赖：`npm install stylelint --save-dev`

# CSS 方案

### 常见 class 名

- **包裹类：** container, wrapper, outer, inner, box, header, footer, main, content, aside, page, section, block
- **状态类：** primary, secondary, success, danger, warning, info, error, Link, light, dark, disabled, active, checked, loading
- **尺寸类：** large, middle, small, bigger, smaller
- **组件类：** card, list, picture, carousel, swiper, menu, navs, badge, hint, modal, dialog
- **位置类：** first, last, current, prev, next, forward, back
- **文本类：** title, desc, content, date, author, category，label，tag
- **人物类：** avatar, name, age, post, intro

### BEM 命名规范

> BEM(Block Element Modifier) 是一种命名 CSS class 的模式，使用这种模式可以让 CSS 代码更加利于维护。标准的 BEM 写法是 `.block-name__element-name--modifier-name`。

- Blcok

  > 页面上逻辑和功能独立的，可复用的组件，可以嵌套并相互交互，但在语义上它们保持平等，可以存在页面上不同的位置或不同项目中，保持样式不变。

  **任何 html 元素都可以成为一个 block，不依赖于页面上的其他 block 或者 element。**

  ```
  <header class="header"></header>
  ```

  ```
  .header {
    color: #333;
    background: #f5f5f5;
  }
  ```

- Element

  > 组成块的一部分，内部的任何元素都与块有关联，不能在块的外部使用。

  ```
  <article class="article">
    <h2 class="article__title"></h2>
    <p class="article__content"></p>
  </article>
  ```

  ```
  .article {
    padding: 12px;
  }

  .article__title {
    font-size: 1rem;
  }

  .article__content {
     font-size: .9rem;
  }
  ```

- Modifier

  > 用来表示块或者元素的状态，外观或者行为，不必须，可以选择使用。

  ```
  <button class="btn btn--disabled"></button>
  ```

  ```
  .btn {
    color:  #333;
    background-color: #fff;
  }

  .btn--disabled {
    color: #fff;
    background-color: #6c757d;
  }
  ```

### Css 预处理器

> 现有流行库有`Sass(Scss)`、`Less`、`Stylus`等，我们的项目选用 Sass。

- Sass（Scss）：Sass 比 Less 强大，且 CRA 脚手架中添加了 `sass-loader` 的支持，如果要启用 sass 的话，只需安装 `node-sass` 即可。

- 安装 node-sass `npm install node-sass --save-dev`

- 通过 sass-resources-loader 全局注册 Sass/Less 变量 `npm install sass-resources-loader@2.2.4 --save-dev`

- webpack 添加配置

  ```
  // config-overrides.js文件中配置
  // 配置指定文件为sass全局文件，可以不用导入就可以使用
    adjustStyleLoaders(rule => {
      if (rule.test.toString().includes('scss')) {
        rule.use.push({
          loader: require.resolve('sass-resources-loader'),
          options: {
            resources: [
              './src/style/global.scss',
            ]
          }
        });
      }
    })
  ```

### CSS-in-JS（不采用）

> CSS-in-JS 不是指某一个具体的库，是指组织 CSS 代码的一种方式，代表库有 styled-component 和 Emotion

1. 传统 CSS 的缺陷

- 缺乏模块组织

  传统的 JS 和 CSS 都没有模块的概念，后来在 JS 界陆续有了 CommonJS 和 ECMAScript Module，而 CSS-in-JS 可以用模块化的方式组织 CSS，依托于 JS 的模块化方案

- 缺乏作用域

  传统的 CSS 只有一个全局作用域，比如说一个 class 可以匹配全局的任意元素。随着项目成长，CSS 会变得越来越难以组织，最终导致失控。CSS-in-JS 可以通过生成独特的选择符，来实现作用域的效果

- 隐式依赖，让样式难以追踪

- 没有变量

  传统的 CSS 规则里没有变量，但是在 CSS-in-JS 中可以方便地控制变量

- CSS 选择器与 HTML 元素耦合

2. Emotion

> Emotion 是目前最受欢迎的 CSS-in-JS 库之一，它还对 React 作了很好的适应，可以方便地创建 styled component，也支持写行内样式。

3.关于 CSS Modules 和 CSS-in-JS 如何选择

<font color=red>CSS in JS 有自己的特点跟优缺点，值得注意的是他不是纯粹的 CSS，所以维护性较差，而且不能缓存且影响 JS 文件加载速度，对比 CSS 文件可以和 JS 文件并行加载，理论性能会差。开发的时候也的 lint 工具的支持不够完善，容易写出 Bug，需要有合适的工具去解决这些问题。同时 CSS in JS 也因为耦合度高适合作为小型的模块被复用。综上还是建议大型项目选择 CSS Modules 的方式去处理 CSS 命名冲突，小型、个人开发或特殊需求可以选择 CSS in JS。</font>

### CSS Modules（采用）

> 提供了局部作用域和模块功能，配合 `Sass / Less` 使用，成为前端样式的一种架构方案

- CSS Modules 通过工程化的方法，可以将类名编译为哈希字符串，从而使得每个类名都是独一无二的，不会与其他的选择器重名，由此可以产生局部作用域。

- `Webpack` 的 [CSS Loader](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fwebpack-contrib%2Fcss-loader%23css-modules) 插件提供了对 CSS Modules 的支持，可以很方便地打开 `CSS Modules` 功能。

- 在 `create-react-app` 中，默认支持 CSS Modules，通过给样式文件名增加 `.module` 以标识使用 CSS Modules。

- 使用

  ```
  // App.module.scss
  .appTitle {
      color: red;
  }
  ```

  ```
  // APP.tsx
  import React from 'react';
  import styles from './App.css';

  const App:React.FC = () => {
    return (
      <h1 className={styles['appTitle']}>
        Hello World
      </h1>
    );
  };
  ```

- 全局变量

  `CSS Modules` 允许使用 `:global(.className)`的语法，声明一个**全局**规则。凡是这样声明的 `class`，都不会被编译成哈希字符串。

  ```
  // App.scss
  .appTitle {
  	color: red;
  }

  :global(.globalTitle){
  	color: green;
  }
  ```

  ```
  // 在 App.jsx中，就可以以普通 CSS 的写法去引用全局 class 了
  // APP.tsx
  import React from 'react';
  import styles from './App.css';

  const App:React.FC = () => {
    return (
      <h1 className={styles['appTitle']}>
        Hello World
      </h1>
      <h1 className = "globalTitle">
         Hello World Again
      </h1>
    );
  };
  ```

- 组合 （Composition）

  ```
  // App.scss
  .appTitle {
      color: red;
  }

  .appBackground {
      background: blue;
  }

  .appStyle {
      composes: appTitle appBackground; // 不同类之间用空格隔开
      padding: 8px;
  }

  ```

- 实现 css 类型提示

  - 安装依赖`npm install typescript-plugin-css-modules --save-dev`

  - 配置 tsconfig.json

    ```
    // tsconfig.json
    "plugins": [
          {
            "name": "typescript-plugin-css-modules"
          }
     ],
    ```

  - 进行项目的 vscode 配置

    在项目根目录创建.vscode 目录，目录下新建 settings.json

    ```
    // settings.json
    {
    	"typescript.tsdk": "node_modules/typescript/lib",
    	"typescript.enablePromptUseWorkspaceTsdk": true
    }
    ```

    内容配置后，vscode 会弹出一个提示，选择 allow 配置

  - 进入 vscode 的设置页面，搜索 typescript.tsserver.pluginPaths，添加 typescript-plugin-css-modules 插件。

  - <font color=red>问题</font>：如果\*\*.module.scss 里引入了 scss 变量或者方法，类型提示会失效，一直是个空对象，具体问题描述[github 地址](https://github.com/mrmckeb/typescript-plugin-css-modules/issues/152)，暂时没有解决方法

# UI 库

> 采用阿里的[Ant Design](https://ant.design/components/overview-cn/)，react17 安装 4.20 以下的 latest 版本

- 安装：`npm install antd@4.19.2 --save`

  ```
  // 在全局react导入文件里引入antd样式
  @import '~antd/dist/antd.css';
  ```

- 按需引入依赖 `npm i -S babel-plugin-import`

- 如果需要装饰器则还需要安装这个包 `npm install @babel/plugin-proposal-decorators --save-dev`

  ```javascript
  // config-overrides.js文件中装饰器配置
  addDecoratorsLegacy();
  ```

# react-router

> react 的路由管理库，官网：https://reactrouter.com/

安装 react-router-dom（react-router 应用于浏览器端的分支）

`pnpm install react-router-dom --save`

### 基本使用

- 需要在最顶层添加 BrowserRouter 组件包裹整个视图容器
- Link 组件实现路由跳转
- Routes 组件包裹 Route 组件配规则
- Navigate 组件进行重定向

```typescript
// App.tsx测试react-router-dom基本功能

import React from 'react';
import {
	BrowserRouter,
	NavLink,
	Route,
	Routes,
	Navigate
} from 'react-router-dom';
import Discover from './views/Discover';
import Follow from './views/Follow';

const App: React.FC = () => {
	return (
		<BrowserRouter>
			{/* 一级导航链接 */}
			<ul className='app-nav'>
				<li>
					<NavLink to='/discover'>发现音乐</NavLink>
				</li>
				<li>
					<NavLink to='/follow'>关注</NavLink>
				</li>
			</ul>
			{/* 内容区域 */}
			<div className='page-container'>
				<Routes>
					{/* 重定向 */}
					<Route path='/' element={<Navigate to='/discover' />}></Route>
					<Route path='/discover' element={<Discover />}></Route>
					<Route path='/follow' element={<Follow />}></Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default App;
```

### useRoutes

> V6 新增 api，路由的另一种配置方式，它可以读取一个路由配置数组，生成相应的路由组件列表，实现路由统一管理。

- 新建路由配置文件

  ```
  // 在src下新建目录router，里面新建index.tsx文件
  import Discover from '../views/Discover';
  import Follow from '../views/Follow';
  /**
   * @description 默认的菜单项
   */
   const defaultRoutes = [
    {
      path: "discover",
      element: <Discover />,
    },
    {
      path: "follow",
      element: <Follow />,
    },
  ];

  export default defaultRoutes;
  ```

- 引入路由配置

  引用路由并渲染的核心是利用 react-router v6 的官方 api：`useRoutes`。

  ```
  import React from "react";
  import ReactDOM from "react-dom";
  // react组件全局样式引入
  import "@/style/index.scss";
  import App from "./App";
  import reportWebVitals from "./reportWebVitals";
  // useRoutes只能作用于router context中，所以useRoutes需要写在BrowserRouter里
  import { BrowserRouter } from "react-router-dom";

  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
  ```

  - 路由 browser / history 模式使用`BrowserRouter`，hash 模式使用`HashRouter`

  - 如果项目部署在服务器域名子目录下，就给`BrowserRouter`配置 basename 属性

- 项目入口组件`src/App.jsx`里引入 routes 配置

  ```
  import React from "react";
  import { useRoutes } from "react-router-dom";
  import defaultRoutes from "./router";

  const App: React.FC = () => {
    const element = useRoutes(defaultRoutes)
    return <>{element}</>
  };

  export default App;
  ```

- 访问 http://localhost:3000/discover 和 http://localhost:3000/follow 发现已生效

### 路由懒加载

> 使用 React 内置的 lazy+Suspense 方法实现路由懒加载

- 组件通过懒加载加载进来的，渲染页面的时候可能会有延迟，配合`Suspense`组件之后，可优化交互。在懒加载组件外面使用`Suspense`标签，并在`fallback`中声明路由加载完成前做的事，即可优化整个页面的交互

- `fallback` 属性接受任何在组件加载过程中你想展示的 React 元素。你可以将 `Suspense` 组件置于懒加载组件之上的任何位置。你甚至可以用一个 `Suspense` 组件包裹多个懒加载组件

  ```typescript
  // router目录下的index.tsx
  import { lazy } from 'react';
  const Discover = lazy(() => import('@/views/Discover'));
  const Follow = lazy(() => import('@/views/Follow'));
  const Login = lazy(() => import('@/views/global/login'));
  /**
   * @description 默认的菜单项
   */
  const defaultRoutes = [
  	{
  		path: 'discover',
  		element: <Discover />
  	},
  	{
  		path: 'follow',
  		element: <Follow />
  	},
  	{
  		path: 'login',
  		element: <Login />
  	}
  ];

  export default defaultRoutes;
  ```

  ```typescript
  // index.tsx入口文件，配置Suspense
  import React, { Suspense } from 'react';
  import ReactDOM from 'react-dom';
  // react组件全局样式引入
  import '@/style/index.scss';
  import App from './App';
  import reportWebVitals from './reportWebVitals';
  import { BrowserRouter } from 'react-router-dom';

  ReactDOM.render(
  	<React.StrictMode>
  		<BrowserRouter>
  			{/* loading配置 可以根据自己喜欢用GIF 或者loading插件 */}
  			<Suspense fallback={<span>loading...</span>}>
  				<App />
  			</Suspense>
  		</BrowserRouter>
  	</React.StrictMode>,
  	document.getElementById('root')
  );

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
  ```

# 网络请求

> 访问和操纵 HTTP 管道的方案

### 历史发展

原生的 XHR ➡️ jquery ajax ➡️ fetch/axios

### fetch（不采用）

> Fetch 是一种新的获取资源的接口方式，浏览器提供原生支持。

### axios

> axios 是对原生 XHR 的封装

- 优点：

  1. 简单易用，API 接近于 jQuery，比原生的 fetch 简单
  2. 浏览器兼容性好，能兼容 IE7，使用 fetch 就得自己处理兼容
  3. 通用性好，能在 node 和浏览器中使用，api 一致（Node 环境下默认是不支持 Fetch，须要使用`node-fetch`这个包）

- Fetch VS Axios：Fetch 可以实现所有 Axios 能够实现的功能，但是需要自行进行封装，如果不喜欢折腾直接在项目中使用 Axios 是一个非常明智的选择。

- 安装：`npm install axios --save `，axios 自带 TS，安装好可以直接使用

- 基本使用

  ```
  import axios from 'axios'

  // http://poetry.apiopen.top/sentences是一个open api，用来测试
  axios.get("http://poetry.apiopen.top/sentences").
    then(({ data }) => {
      console.log(data);
  });
  ```

- 搭配 async/await 使用

  ```
    const fetchData = async () => {
      let { data } = await axios.get("http://poetry.apiopen.top/sentences");
      console.log(data);
    };
    // 1.useEffect 的回调参数返回的是一个清除副作用的 clean-up 函数。
    // 因此无法返回 Promise，更无法使用 async/await

    // 2.传递一个空数组作为第二个参数，这个 Effect 将永远不会重复执行，
    // 因此可以达到componentDidMount的效果。
    React.useEffect(() => {
      fetchData()
    }, []);
  ```

- 封装 axios

  1. 在 utils 新建 message.ts，封装全局提示

     ```
     import { message } from "antd";

     const infoMessage = (msg: string, duration = 3) => {
       message.success(msg, duration);
     };

     const successMessage = (msg: string, duration = 3) => {
       message.success(msg, duration);
     };

     const errorMessage = (msg: string, duration = 3) => {
       message.error(msg, duration);
     };

     const warningMessage = (msg: string, duration = 3) => {
       message.warning(msg, duration);
     };

     export { infoMessage, successMessage, errorMessage, warningMessage };

     ```

  2. 安装 nprogress `npm install nprogress --save `，在 utils 新建 progress.ts

     ```
     /**
      * nprogress插件配置
      * @param
      * @returns
      */

     import NProgress from "nprogress";
     import "nprogress/nprogress.css";

     NProgress.configure({
       easing: "ease", // 动画方式
       speed: 500, // 递增进度条的速度
       showSpinner: false, // 是否显示加载ico
       trickleSpeed: 200, // 自动递增间隔
       minimum: 0.3, // 初始化时的最小百分比
     });

     export default NProgress;

     ```

  3. 安装 js-cookie `npm install js-cookie --save `

  4. 在 utils 新建 request.ts

     ```
     /**
      * axios请求配置文件
      * @param
      * @returns
      */

     import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
     import Cookies from "js-cookie";
     import { errorMessage } from "./message";
     import NProgress from "./progress";

     // const TOKEN_INVSSLID: string = 'Token认证失败，请重新登陆'
     // const NETWORE_ERROR: string = '网络请求异常，请稍后重试'

     /* 创建axios实例 */
     const service: AxiosInstance = axios.create({
       baseURL: process.env.VUE_APP_BASE_API, // api的base_url
       timeout: 5000, // 请求超过时间
       headers: {
         "Content-Type": "application/json;charset=UTF-8",
       },
     });

     /* axios请求拦截器 */
     service.interceptors.request.use(
       (config: AxiosRequestConfig) => {
         NProgress.start(); // 每次请求时，调用进度条
         config.headers["token"] = Cookies.get("token");
         return config;
       },
       (error: any) => {
         console.error("error", error);
         return Promise.reject(error);
       }
     );

     /* axios响应拦截器 */
     service.interceptors.response.use(
       (response: AxiosResponse) => {
         NProgress.done(); // 请求有响应的时候
         return response.data;
       },
       (error: any) => {
         errorMessage(error);
         return Promise.reject(error);
       }
     );

     export default service;

     ```

# githooks

类似于前端框架中的生命周期钩子，git 在某些特定事件发生前或后也会有某些执行特定功能的钩子，githooks 就是在 git 执行特定事件（如 commit、push、receive 等）时触发运行的脚本。

### husky

> husky 是一个能进行 git 相关钩子配置的工具。

- 安装 `npm i husky -save-dev`

- 在其它项目成员安装依赖的时候自动启用钩子，需要执行`npm set-script prepare "husky install"`

  ```
  // 执行后package.json会添加prepare脚本
  "scripts": {
      ...
      "prepare": "husky install" // 添加这行
    }

  ```

- 生成 husky 目录及相关文件 `npm run prepare`

### lint-staged

> lint-staged 是一个在 git 暂存区上运行 linters 的工具

- 安装 `npm i lint-staged -save-dev`

- package.json 添加 lint-staged 配置

  ```json
   // package.json

  "lint-staged": {
      "*.{js,jsx,css,md,ts,tsx}": "prettier --write"
    }
  ```

- husky 添加 pre-commit hook :

  `npx husky add .husky/pre-commit 'npx lint-staged'`

### commitlint

- 安装`npm install @commitlint/{config-conventional,cli} --save-dev`

- 生成配置文件 commitlint.config.js

  `echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js`，执行后会生成 commitlint.config.js 配置文件，进行自定义配置如下

  ```javascript
  // commitlint.config.js里自定义配置
  module.exports = {
  	extends: ['@commitlint/config-conventional'],
  	rules: {
  		'body-leading-blank': [2, 'always'], // body上面要有换行
  		'footer-leading-blank': [1, 'always'], // footer上面要有换行
  		'header-max-length': [2, 'always', 72], // header 最长72个字符
  		'scope-case': [2, 'always', 'lower-case'],
  		'subject-case': [
  			2,
  			'never',
  			['sentence-case', 'start-case', 'pascal-case', 'upper-case']
  		],
  		'subject-empty': [2, 'never'], //subject位不能为null
  		'type-empty': [2, 'never'], //type位不能为null
  		'type-enum': [
  			// type提交规则
  			2,
  			'always',
  			[
  				'feat', // 新增功能
  				'del', // 删除功能
  				'fix', // 修复bug
  				'perf', // 优化相关，比如提升性能、体验
  				'refactor', // 代码重构
  				'test', // 测试用例
  				'docs', // 文档更新
  				'revert', // 回滚版本
  				'style', // 代码格式修改（如修改空白字符，补全缺失的分号）
  				'chore' // 对架构流程或辅助工具和依赖库的修改
  			]
  			// git commit -m 'add: 增加 xxx 功能'
  		]
  	}
  };
  ```

- husky 添加 commit-msg `npx husky add .husky/commit-msg 'npx --no-install commitlint --edit $1'`，执行后会生成 commit-msg 配置文件，里面内容如下

  ```
  #!/bin/sh
  . "$(dirname "$0")/_/husky.sh"

  npx --no-install commitlint --edit
  ```

- 提交格式

  `git commit -m "<type>:  <subject>"` (注意冒号后面有空格)

  如

  ```
  git commit -m "add: 增加 xxx 功能"
  git commit -m "fix: 修复 xxx 功能"
  ```

# MOCK 方案

### Mock.js

- 优点
  - 与前端代码分离
  - 可生成随机数据
- 缺点
  - 数据都是动态生成的假数据，无法真实模拟增删改查的情况
  - 只支持 ajax，不支持 fetch

### 接口管理工具

> 代表：rap，swagger，moco，yapi

- 优点
  - 配置功能强大，接口管理与 Mock 一体，后端修改接口 Mock 也跟着更改
- 缺点
  - 配置复杂，依赖后端，肯恩会出现后端不愿意出手，或者等配置完了，接口也开发出来了
  - 一般会作为大团队的基础建设而存在，没有这个条件请慎重

### 本地 node 服务器

> 代表：json-server

- 优点
  - 配置简单，json-server 甚至可以 0 代码 30 秒启动一个 REST API Server
  - 自定义程度高，一切尽在掌控中
  - 增删改查真实模拟
- 缺点：与接口管理工具相比，无法随着后端 API 的修改而自动修改

### REST API 理解

> 一句话总结：URI 代表资源/对象，METHOD 代表行为

```
GET/tickets  //列表
POST/tickets/12  //详情
POST/tickets //增加
PUT/tickets/12 //全量替换
PATCH/tickets/12 //修改部分属性
DELETE/tickets/12 //删除
```

# 状态管理 Redux

# React Hook

> Hook 是一些可以让你在函数组件里“钩入” React state 及生命周期等特性的函数

优点

- 增加代码的可复用性，逻辑性，弥补无状态组件没有生命周期，没有数据管理状态 state 的缺陷
- react-hooks 思想更趋近于函数式编程。用函数声明方式代替 class 声明方式

使用规则

- 以 use 开头命名

- 只在最顶层使用 Hook,不要在循环，条件或嵌套函数中调用 Hook
- 只在 React 函数中调用 Hook，不要在普通的 JavaScript 函数中调用 Hook
  - 在 React 的函数组件中调用 Hook
  - 在自定义 Hook 中调用其他 Hook

### useState

> 使用 hook 在函数组件中实现状态管理

- 当我们使用 `useState` 定义 state 变量时候，它返回一个有两个值的数组。第一个值是当前的 state，第二个值是更新 state 的函数。

  `const [state, setState] = useState(initialState)`

  从一个案例说起

  ```
  import React,{useState} from "react";
  function Example() {
    const [count, setCount] = useState(0);
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    );
  }
  export default Example;
  ```

  **第一行:** 引入 React 中的 `useState` Hook。它让我们在函数组件中存储内部 state。

  **第三行:** 在 `Example` 组件内部，我们通过调用 `useState` Hook 声明了一个新的 state 变量。它返回一对值给到我们命名的变量上。我们把变量命名为 `count`，因为它存储的是点击次数。我们通过传 `0` 作为 `useState` 唯一的参数来将其初始化为 `0`。第二个返回的值本身就是一个函数。它让我们可以更新 `count` 的值，所以我们叫它 `setCount`。

  **第七行:** 当用户点击按钮后，我们传递一个新的值给 `setCount`。React 会重新渲染 `Example` 组件，并把最新的 `count` 传给它。

- 使用多个 State 变量

  ```
  // 声明多个 state 变量
    const [age, setAge] = useState(42);
    const [fruit, setFruit] = useState('banana');
    const [todos, setTodos] = useState([{ text: '学习 Hook' }]);
  ```

  你**不必**使用多个 state 变量。State 变量可以很好地存储对象和数组，因此，你仍然可以将相关数据分为一组。

- 更新 State

  ```
  import React,{useState} from "react";
  function Example() {
    const [count, setCount] = useState(0);
    const [person, setPerson] = useState({name:'jimmy',age:22});
    return (
      <div>
        <p>name {person.name} </p>
        // 如果新的 state 需要通过使用先前的 state 计算得出，那么可以将回调函数当做参数传递给 setState。
        // 该回调函数将接收先前的 state，并返回一个更新后的值。
        <button onClick={() => setCount(count=>count+1)}>Click me</button>
        <button onClick={() => setPerson({name:'chimmy'})}>Click me</button>
      </div>
    );
  }
  export default Example;
  ```

  setPerson 更新 person 时，不像 class 中的 `this.setState`，更新 state 变量总是*替换*它而不是合并它。上例中的 person 为{name:'chimmy'} 而不是{name:'chimmy',age:22}

### useEffect

> useEffect 被称为副作用钩子，它可以让你在函数组件中执行副作用操作。（数据获取，设置订阅以及手动更改 React 组件中的 DOM 都属于副作用）操作

- 基本用法：`useEffect(fn, array)`

- 第一个参数为一个函数表示副作用效应函数，默认情况下它在第一次渲染之后和每次刷新之后都会执行

- 第二个参数是一个数组

  - 当数组存在并有值时，如果数组中的任何值发生更改，都会触发回调

  - 当它不存在时，每次渲染都会触发回调

    回调函数会在每次渲染后调用，因此不仅可以访问 componentDidUpdate，还可以访问 componentDidMount，如果只想模拟 componentDidUpdate，我们可以这样来实现。

    ```
    // useRef 在组件中创建“实例变量”。它作为一个标志来指示组件是否处于挂载或更新阶段。
    // 当组件更新完成后在会执行 else 里面的内容，以此来单独模拟 componentDidUpdate。

    const mounted = useRef();
    useEffect(() => {
      if (!mounted.current) {
        mounted.current = true;
      } else {
       console.log('I am didUpdate')
      }
    });
    ```

  - 当它是一个空数组时，回调只会被触发一次，类似于 componentDidMount

### useContext

> Context 提供了一种在组件之间共享此类值的方式，而不必显式地通过组件树的逐层传递 props。

# 问题

### react 函数组件渲染执行两次

> React 在 Dev mode 下会刻意执行两次渲染，以防止组件内有什么 side effect 引起 bug，提前预防。

### Node 装包问题

> Cannot read properties of null (reading 'pickAlgorithm')
>
> 清理缓存后再尝试安装 `npm cache clear --force`

### Eslint 警告

- The href attribute is required for an anchor to be keyboard accessible.
  Provide a valid, navigable address as the href value.
  If you cannot provide an href, but still need the element to resemble a link, use a button and change it with appropriate styles.
  Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md jsx-a11y/anchor-is-valid

  > 在 package.json 中添加 rules 配置
  >
  > "eslintConfig": {
  > "extends": "react-app",
  > "rules":{
  > "jsx-a11y/anchor-is-valid":"off"
  > }
  > }

- Script URL is a form of eval. eslint(no-script-url)

  > 在 package.json 中添加 rules 配置
  >
  > "eslintConfig": {
  > "extends": [
  >
  > > "react-app",
  > > "react-app/jest"
  > > ],
  > > "rules":{
  > > "jsx-a11y/anchor-is-valid":"off",
  > > "no-script-url": "off"
  > > }
  > > },
