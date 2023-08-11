// ts项目，把js配置文件的后缀改为cjs
/** @see: http://eslint.cn/docs/rules */

module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	// 继承的规则配置
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended'
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh'],
	/**
	 * "off" 或 0 ==> 关闭规则
	 * "warn" 或 1 ==> 打开的规则作为警告（不影响代码执行）
	 * "error" 或 2 ==> 规则作为一个错误（代码不能执行，界面报错）
	 */
	rules: {
		// 'prettier/prettier': 'error', // 将Prettier作为ESLint规则运行
		'no-var': 'error', // 要求使用 let 或 const 而不是 var
		'prefer-const': 'off', // 使用 let 关键字声明但在初始分配后从未重新分配的变量，要求使用 const
		'no-multiple-empty-lines': ['error', { max: 1 }], // 不允许多个空行
		'no-console': 'error', // 禁止使用console
		'no-debugger': 'error', // 禁止使用debugger
		'no-irregular-whitespace': 'off', // 禁止不规则的空白
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true }
		]
	}
};
