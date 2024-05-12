// refer: https://github.com/standard/eslint-config-standard/blob/master/.eslintrc.json
export default {
  parserOptions: {
    ecmaVersion: 2022,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  env: {
    browser: true, // 浏览器环境
    es2021: true, // 2021年的新特性
    node: true, // node环境
  },
  plugins: ['import', 'n', 'promise'],
  globals: {
    document: 'readonly', // 全局document只读
    navigator: 'readonly', // 全局navigator只读
    window: 'readonly', // 全局window只读
  },
  rules: {
    // ---------------------------------------------------
    // ------------------基础规则相关---------------------
    // ---------------------------------------------------
    'no-var': 'warn', // 禁止使用var
    'object-shorthand': ['warn', 'properties'], // 对象字面量中方法和属性使用简写语法
    'max-len': [
      'error',
      {
        // 限制一行的最大长度
        code: 120, // 代码的最大长度
        tabWidth: 2, // tab的宽度
        comments: 65, // 注释的最大长度
        ignoreTrailingComments: true, // 忽略行尾注释
        ignoreUrls: true, // 忽略url
        ignoreStrings: true, // 忽略字符串
        ignoreTemplateLiterals: true, // 忽略模板字符串
        ignoreRegExpLiterals: true, // 忽略正则表达式
        ignorePattern: '^import\\s.+\\sfrom\\s.+;$', // 忽略import语句
      },
    ],
    'max-lines': [
      'error',
      {
        // 限制文件的最大行数
        max: 1000, // 最大行数
        skipBlankLines: true, // 忽略空行
        skipComments: true, // 忽略注释
      },
    ],
    'accessor-pairs': [
      'error',
      { setWithoutGet: true, enforceForClassMembers: true },
    ], // 强制getter和setter成对出现
    'array-bracket-spacing': ['error', 'never'], // 禁止在数组括号内使用空格
    'array-callback-return': [
      'error',
      {
        // 强制数组方法的回调函数中有return语句
        allowImplicit: false, // 允许隐式return
        checkForEach: false, // 检查forEach
      },
    ],
    'arrow-spacing': ['error', { before: true, after: true }], // 强制箭头函数的箭头前后使用一致的空格
    'block-spacing': ['error', 'always'], // 禁止或强制在代码块中开括号前和闭括号后有空格
    'brace-style': ['error', '1tbs', { allowSingleLine: true }], // 强制在代码块中使用一致的大括号风格
    camelcase: [
      'error',
      {
        // 强制使用骆驼拼写法命名约定
        allow: ['^UNSAFE_'],
        properties: 'never',
        ignoreGlobals: true,
      },
    ],
    'comma-dangle': [
      'error',
      {
        // 要求或禁止末尾逗号
        arrays: 'always', // 数组
        objects: 'always', // 对象
        imports: 'always', // import
        exports: 'always', // export
        functions: 'always', // 函数
      },
    ],
    'comma-spacing': ['error', { before: false, after: true }], // 强制在逗号前后使用一致的空格
    'comma-style': ['error', 'last'], // 强制使用一致的逗号风格
    'computed-property-spacing': [
      'error',
      'never',
      { enforceForClassMembers: true },
    ], // 禁止或强制在计算属性中使用空格
    'constructor-super': 'error', // 要求在构造函数中有super()的调用
    curly: ['error', 'multi-line'], // 强制所有控制语句使用一致的括号风格
    'default-case-last': 'error', // 要求switch语句中有default分支
    'dot-location': ['error', 'property'], // 强制在点号之前和之后一致的换行
    'dot-notation': ['error', { allowKeywords: true }], // 强制尽可能地使用点号
    'eol-last': 'error', // 要求或禁止文件末尾存在空行
    eqeqeq: ['error', 'always', { null: 'ignore' }], // 要求使用 === 和 !==
    'func-call-spacing': ['error', 'never'], // 禁止或强制在函数标识符和其调用之间有空格
    'generator-star-spacing': ['error', { before: true, after: true }], // 强制 generator 函数中 * 号周围使用一致的空格
    indent: [
      'error',
      2,
      {
        // 强制使用一致的缩进
        SwitchCase: 1, // switch语句中case的缩进
        VariableDeclarator: 1, // 变量声明的缩进
        outerIIFEBody: 1, // 立即执行函数的缩进
        MemberExpression: 1, // 对象属性的缩进
        FunctionDeclaration: { parameters: 1, body: 1 }, // 函数参数和函数体的缩进
        FunctionExpression: { parameters: 1, body: 1 }, // 函数参数和函数体的缩进
        CallExpression: { arguments: 1 }, // 函数参数的缩进
        ArrayExpression: 1, // 数组元素的缩进
        ObjectExpression: 1, // 对象属性的缩进
        ImportDeclaration: 1, // import语句的缩进
        flatTernaryExpressions: false, // 三元表达式的缩进
        ignoreComments: false, // 忽略注释
        ignoredNodes: [
          'TemplateLiteral *',
          'JSXElement',
          'JSXElement > *',
          'JSXAttribute',
          'JSXIdentifier',
          'JSXNamespacedName',
          'JSXMemberExpression',
          'JSXSpreadAttribute',
          'JSXExpressionContainer',
          'JSXOpeningElement',
          'JSXClosingElement',
          'JSXFragment',
          'JSXOpeningFragment',
          'JSXClosingFragment',
          'JSXText',
          'JSXEmptyExpression',
          'JSXSpreadChild',
        ], // 忽略的节点
        offsetTernaryExpressions: true,
      },
    ],
    'key-spacing': ['error', { beforeColon: false, afterColon: true }], // 强制在对象字面量的属性中键和值之间使用一致的间距
    'keyword-spacing': ['error', { before: true, after: true }], // 强制在关键字前后使用一致的空格
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true },
    ], // 要求或禁止类成员之间出现空行
    'multiline-ternary': ['error', 'always-multiline'], // 要求或禁止在三元操作数中间换行
    'new-cap': ['error', { newIsCap: true, capIsNew: false, properties: true }], // 要求构造函数首字母大写
    'new-parens': 'error', // 要求调用无参构造函数时有圆括号
    'no-array-constructor': 'error', // 禁用 Array 构造函数
    'no-async-promise-executor': 'error', // 禁止使用异步函数作为 Promise executor
    'no-caller': 'error', // 禁用 arguments.caller 或 arguments.callee
    'no-case-declarations': 'error', // 禁止在 case 或 default 子句中出现词法声明
    'no-class-assign': 'error', // 禁止修改类声明的变量
    'no-compare-neg-zero': 'error', // 禁止与 -0 进行比较
    'no-cond-assign': 'error', // 禁止条件表达式中出现赋值操作符
    'no-const-assign': 'error', // 禁止修改 const 声明的变量
    'no-constant-condition': ['error', { checkLoops: false }], // 禁止在条件中使用常量表达式
    'no-control-regex': 'error', // 禁止在正则表达式中使用控制字符
    'no-debugger': 'error', // 禁用 debugger
    'no-delete-var': 'error', // 禁止删除变量
    'no-dupe-args': 'error', // 禁止 function 定义中出现重名参数
    'no-dupe-class-members': 'error', // 禁止类成员中出现重复的名称
    'no-dupe-keys': 'error', // 禁止对象字面量中出现重复的 key
    'no-duplicate-case': 'error', // 禁止出现重复的 case 标签
    'no-useless-backreference': 'error', // 禁止在正则表达式中使用无用的反向引用
    'no-empty': ['error', { allowEmptyCatch: true }], // 禁止出现空语句块
    'no-empty-character-class': 'error', // 禁止在正则表达式中使用空字符集
    'no-empty-pattern': 'error', // 禁止使用空解构模式
    'no-eval': 'error', // 禁用 eval()
    'no-ex-assign': 'error', // 禁止对 catch 子句的参数重新赋值
    'no-extend-native': 'error', // 禁止扩展原生类型
    'no-extra-bind': 'error', // 禁止不必要的 .bind() 调用
    'no-extra-boolean-cast': 'error', // 禁止不必要的布尔转换
    'no-extra-parens': ['error', 'functions'], // 禁止不必要的括号
    'no-fallthrough': 'error', // 禁止 case 语句落空
    'no-floating-decimal': 'error', // 禁止数字字面量中使用前导和末尾小数点
    'no-func-assign': 'error', // 禁止对 function 声明重新赋值
    'no-global-assign': 'error', // 禁止对原生对象或只读的全局对象进行赋值
    'no-implied-eval': 'error', // 禁止使用类似 eval() 的方法
    'no-import-assign': 'error', // 禁止对导入的 binding 进行赋值
    'no-invalid-regexp': 'error', // 禁止 RegExp 构造函数中存在无效的正则表达式字符串
    'no-irregular-whitespace': 'error', // 禁止不规则的空白
    'no-iterator': 'error', // 禁用 __iterator__ 属性
    'no-labels': ['error', { allowLoop: false, allowSwitch: false }], // 禁用标签语句
    'no-lone-blocks': 'error', // 禁用不必要的嵌套块
    'no-loss-of-precision': 'error', // 禁止数字字面量中使用前导和末尾小数点
    'no-misleading-character-class': 'error', // 禁止在字符类语法中出现由多个代码点组成的字符
    'no-prototype-builtins': 'error', // 禁止直接调用 Object.prototypes 的内置属性
    'no-useless-catch': 'error', // 禁止不必要的 catch 子句
    'no-mixed-operators': [
      'error',
      {
        // 禁止混合使用不同的操作符
        groups: [
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof'],
        ],
        allowSamePrecedence: true,
      },
    ],
    'no-mixed-spaces-and-tabs': 'error', // 禁止空格和 tab 的混合缩进
    'no-multi-spaces': 'error', // 禁止使用多个空格
    'no-multi-str': 'error', // 禁止使用多行字符串
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }], // 禁止出现多行空行
    'no-new': 'error', // 禁止使用 new 以避免产生副作用
    'no-new-func': 'error', // 禁止对 Function 对象使用 new 操作符
    'no-new-object': 'error', // 禁止使用 Object 的构造函数
    'no-new-symbol': 'error', // 禁止 Symbolnew 操作符和 new 一起使用
    'no-new-wrappers': 'error', // 禁止对 String，Number 和 Boolean 使用 new 操作符
    'no-obj-calls': 'error', // 禁止把全局对象作为函数调用
    'no-octal': 'error', // 禁用八进制字面量
    'no-octal-escape': 'error', // 禁止在字符串中使用八进制转义序列
    'no-proto': 'error', // 禁用 __proto__ 属性
    'no-redeclare': ['error', { builtinGlobals: false }], // 禁止多次声明同一变量
    'no-regex-spaces': 'error', // 禁止正则表达式字面量中出现多个空格
    'no-return-assign': ['error', 'except-parens'], // 禁止在 return 语句中使用赋值语句
    'no-self-assign': ['error', { props: true }], // 禁止自我赋值
    'no-self-compare': 'error', // 禁止自身比较
    'no-sequences': 'error', // 禁用逗号操作符
    'no-shadow-restricted-names': 'error', // 禁止将标识符定义为受限的名字
    'no-sparse-arrays': 'error', // 禁用稀疏数组
    'no-tabs': 'error', // 禁用 tab
    'no-template-curly-in-string': 'error', // 禁止在常规字符串中出现模板字面量占位符语法
    'no-this-before-super': 'error', // 禁止在构造函数中，在调用 super() 之前使用 this 或 super
    'no-throw-literal': 'error', // 禁止抛出异常字面量
    'no-trailing-spaces': 'error', // 禁用行尾空格
    'no-undef': 'error', // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
    'no-undef-init': 'error', // 禁止将变量初始化为 undefined
    'no-unexpected-multiline': 'error', // 禁止出现令人困惑的多行表达式
    'no-unmodified-loop-condition': 'error', // 禁用一成不变的循环条件
    'no-unneeded-ternary': ['error', { defaultAssignment: false }], // 禁止可以在有更简单的可替代的表达式时使用三元操作符
    'no-unreachable': 'error', // 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
    'no-unreachable-loop': 'error', // 禁止在循环中出现不可能执行的代码
    'no-unsafe-finally': 'error', // 禁止在 finally 语句块中出现控制流语句
    'no-unsafe-negation': 'error', // 禁止对关系运算符的左操作数使用否定操作符
    'no-unused-expressions': [
      'error',
      {
        // 禁止出现未使用过的表达式
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    'no-unused-vars': [
      'error',
      {
        // 禁止出现未使用过的变量
        args: 'none',
        caughtErrors: 'none',
        ignoreRestSiblings: true,
        vars: 'all',
      },
    ],
    'no-use-before-define': [
      'error',
      { functions: false, classes: false, variables: false },
    ], // 禁止在变量定义之前使用它们
    'no-useless-call': 'error', // 禁止不必要的 .call() 和 .apply()
    'no-useless-computed-key': 'error', // 禁止在对象中使用不必要的计算属性
    'no-useless-constructor': 'error', // 禁用不必要的构造函数
    'no-useless-escape': 'error', // 禁用不必要的转义字符
    'no-useless-rename': 'error', // 禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字
    'no-useless-return': 'error', // 禁止多余的 return 语句
    'no-void': 'error', // 禁用 void 操作符
    'no-whitespace-before-property': 'error', // 禁止属性前有空白
    'no-with': 'error', // 禁用 with 语句
    'object-curly-newline': ['error', { multiline: true, consistent: true }], // 强制在大括号中使用一致的换行符
    'object-curly-spacing': ['error', 'always'], // 强制在大括号中使用一致的空格
    'object-property-newline': [
      'error',
      { allowMultiplePropertiesPerLine: true },
    ], // 强制将对象的属性放在不同的行上
    'one-var': ['error', { initialized: 'never' }], // 强制函数中的变量要么一起声明要么分开声明
    'operator-linebreak': [
      'error',
      'after',
      { overrides: { '?': 'before', ':': 'before', '|>': 'before' } },
    ], // 强制操作符使用一致的换行符
    'padded-blocks': [
      'error',
      { blocks: 'never', switches: 'never', classes: 'never' },
    ], // 要求或禁止块内填充
    'prefer-const': ['error', { destructuring: 'all' }], // 要求使用 const 声明那些声明后不再被修改的变量
    'prefer-promise-reject-errors': 'error', // 要求使用 Error 对象作为 Promise 拒绝的原因
    'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }], // 要求使用剩余参数而不是 arguments
    'quote-props': ['error', 'as-needed'], // 要求对象字面量属性名称用引号括起来
    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: false },
    ], // 强制使用一致的反勾号、双引号或单引号
    'rest-spread-spacing': ['error', 'never'], // 强制剩余和扩展运算符及其表达式之间有空格
    semi: ['error', 'never'], // 要求或禁止使用分号代替 ASI
    'semi-spacing': ['error', { before: false, after: true }], // 强制分号之前和之后使用一致的空格
    'space-before-blocks': ['error', 'always'], // 强制在块之前使用一致的空格
    'space-before-function-paren': [
      // 强制在 function的左括号之前使用一致的空格
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'space-in-parens': ['error', 'never'], // 强制在圆括号内使用一致的空格
    'space-infix-ops': 'error', // 要求操作符周围有空格
    'space-unary-ops': ['error', { words: true, nonwords: false }], // 强制在一元操作符前后使用一致的空格
    'spaced-comment': [
      'error',
      'always',
      {
        // 强制在注释中 // 或 /* 使用一致的空格
        line: { markers: ['*package', '!', '/', ',', '='] },
        block: {
          balanced: true,
          markers: ['*package', '!', ',', ':', '::', 'flow-include'],
          exceptions: ['*'],
        },
      },
    ],
    'symbol-description': 'error', // 要求 symbol 描述
    'template-curly-spacing': ['error', 'never'], // 要求或禁止模板字符串中的嵌入表达式周围空格的使用
    'template-tag-spacing': ['error', 'never'], // 要求或禁止在模板标记和它们的字面量之间有空格
    'unicode-bom': ['error', 'never'], // 要求或禁止 Unicode 字节顺序标记 (BOM)
    'use-isnan': [
      'error',
      {
        // 要求使用 isNaN() 检查 NaN
        enforceForSwitchCase: true,
        enforceForIndexOf: true,
      },
    ],
    'valid-typeof': ['error', { requireStringLiterals: true }], // 强制 typeof 表达式与有效的字符串进行比较
    'wrap-iife': ['error', 'any', { functionPrototypeMethods: true }], // 要求 IIFE 使用括号括起来
    'yield-star-spacing': ['error', 'both'], // 强制在 yield* 表达式中 * 周围使用空格
    yoda: ['error', 'never'], // 要求或禁止 “Yoda” 条件

    'import/export': 'error', // 禁止重复模块导入
    'import/first': 'error', // 禁止模块导入顺序
    'import/no-absolute-path': [
      'error',
      { esmodule: true, commonjs: true, amd: false },
    ], // 禁止使用绝对路径导入模块
    'import/no-duplicates': 'error', // 禁止重复模块导入
    'import/no-named-default': 'error', // 禁止使用默认导入导出同名的模块
    'import/no-webpack-loader-syntax': 'error', // 禁止使用 webpack loader 语法

    'n/handle-callback-err': ['error', '^(err|error)$'], // 强制回调错误处理
    'n/no-callback-literal': 'error', // 禁止回调错误处理
    'n/no-deprecated-api': 'error', // 禁止使用已废弃的 API
    'n/no-exports-assign': 'error', // 禁止对 module.exports 或 exports 赋值
    'n/no-new-require': 'error', // 禁止使用 new 来调用 require
    'n/no-path-concat': 'error', // 禁止使用 __dirname 和 __filename 进行字符串拼接
    'n/process-exit-as-throw': 'error', // 强制 process.exit() 仅在抛出错误时使用

    'promise/param-names': 'error', // 强制 promise 的回调函数使用命名参数
  },
}
