import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	root: './', // 项目的根路径，可以是一个绝对路径，或者相对配置文件本身的路径
	base: '/', // 路由地址的前缀路径
	publicDir: 'public', // 静态文件目录
	resolve: {
		alias: {
			'@': resolve(__dirname, './src') // @代替src路径，还要在tsconfig.json进行paths配置目录映射
		}
	},
	plugins: [react()]
});
