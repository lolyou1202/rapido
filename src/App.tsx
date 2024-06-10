import { Header } from './components/containers/Header/Header'

function App({ page }: { page: React.ReactNode }) {
	return (
		<div className='app'>
			<Header />
			<main className='main'>{page}</main>
		</div>
	)
}

export default App
