import './index.style.scss'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import App from './App.tsx'
import { Tickets } from './pages/Tickets.tsx'
import { Archive } from './pages/Archive.tsx'
import { Rules } from './pages/Rules.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Navigate to='/tickets' />} />
				<Route path='/tickets' element={<App page={<Tickets />} />} />
				<Route path='/archive' element={<App page={<Archive />} />} />
				<Route path='/rules' element={<App page={<Rules />} />} />
				<Route path='*' element={<h1>Неизвестная страница</h1>} />
			</Routes>
		</BrowserRouter>
	</Provider>
)
