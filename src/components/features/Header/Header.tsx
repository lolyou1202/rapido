import './Header.style.scss'
import { HeaderButton } from '../../ui/Button/HeaderButton/HeaderButton'
import { useLocation, useNavigate } from 'react-router-dom'
import { Ticket } from '../../icons/Ticket'
import { Folder } from '../../icons/Folder'
import { Rules } from '../../icons/Rules'

const headerButtons = [
	{
		name: 'tickets',
		icon: <Ticket />,
		label: 'Билеты',
	},
	{
		name: 'archive',
		icon: <Folder />,
		label: 'Архив тиражей',
	},
	{
		name: 'rules',
		icon: <Rules />,
		label: 'Правила игры',
	},
]

export const Header = () => {
	const navigate = useNavigate()
	const location = useLocation()

	return (
		<div className='header'>
			<span className='header-logo'>
				<h2>Rapido</h2>
			</span>
			<span>
				{headerButtons.map(button => {
					const { name, icon, label } = button
					return (
						<HeaderButton
							key={name}
							action={location.pathname === `/${name}`}
							icon={icon}
							label={label}
							onClick={() => navigate(`/${name}`)}
						/>
					)
				})}
			</span>
		</div>
	)
}
