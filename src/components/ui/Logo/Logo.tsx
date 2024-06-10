import './Logo.style.scss'

export const Logo = ({ onClick }: { onClick: () => void }) => {
	return (
		<h2 className='logo' onClick={onClick}>
			Rapido
		</h2>
	)
}
