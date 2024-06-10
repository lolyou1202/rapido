import './HeaderNav.style.scss'
import classNames from 'classnames'
import { NavigationVariant } from '../../containers/Header/Header'
import { useLocation } from 'react-router-dom'
import { Folder } from '../../icons/Folder'
import { Rules } from '../../icons/Rules'
import { Ticket } from '../../icons/Ticket'
import { HeaderButton } from '../Button/HeaderButton/HeaderButton'

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

export const HeaderNav = ({
	variant,
	onClick,
}: {
	variant: NavigationVariant
	onClick: ({
		name,
		variant,
	}: {
		name: string
		variant: NavigationVariant
	}) => void
}) => {
	const location = useLocation()

	const headerNavCN = classNames('header-nav', variant)

	return (
		<nav className={headerNavCN}>
			<ul>
				{headerButtons.map(button => {
					const { name, icon, label } = button
					return (
						<li
							key={name}
							onClick={() => onClick({ name, variant })}
						>
							<HeaderButton
								action={location.pathname === `/${name}`}
								icon={icon}
								label={label}
							/>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}
