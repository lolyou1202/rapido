import { useEffect } from 'react';
import { Header } from './components/features/Header/Header'
import moment from 'moment';
import 'moment/dist/locale/ru'

function App({ page }: { page: React.ReactNode }) {
	useEffect(() => { moment.locale('ru'); }, []);
	return (
		<div className='app'>
			<Header />
			<div className='main'>{page}</div>
		</div>
	)
}

export default App
