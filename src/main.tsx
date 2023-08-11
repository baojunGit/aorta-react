import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const ReactDemo = () => {
	return <div>欢迎学习React课程</div>;
};

ReactDOM.createRoot(document.getElementById('root')!).render(
	// 删除React.StrictMode
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<App />}></Route>
			<Route path='/react' element={<ReactDemo />}></Route>
		</Routes>
	</BrowserRouter>
);
