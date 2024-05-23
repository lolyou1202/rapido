import { Header } from './components/features/Header/Header'

function App({ page }: { page: React.ReactNode }) {
	return (
		<div className='app'>
			<Header />
			<div className='main'>{page}</div>
		</div>
	)
}

export default App
