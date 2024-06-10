import './HeaderBurger.scss'
import { Burger } from '../../../icons/Burger'

export const HeaderBurger = ({ onClick }: { onClick: () => void }) => {
	return (
		<button className='headerBurger' onClick={onClick}>
			<Burger />
		</button>
	)
}
