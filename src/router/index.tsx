/**
 * 设置createBrowserRouter模式部署线上，需要在nginx里配置
 * location / {
 *   try_files $uri $uri/ /index.html;
 * }
 */

import { createBrowserRouter, Navigate } from 'react-router-dom';
import Login from '@/views/auth/Login';
import Error401 from '@/views/auth/Error401';
import Error404 from '@/views/auth/Error404';

const router = [
	{ path: '/', element: <div>Welcome</div> },
	{ path: '/login', element: <Login /> },
	{ path: '*', element: <Navigate to='/404' /> },
	{ path: '404', element: <Error404 /> },
	{ path: '401', element: <Error401 /> }
];

export default createBrowserRouter(router);
