import './HeaderButton.style.scss'
import classNames from 'classnames'

export const HeaderButton = ({
	action,
	icon,
	label,
	onClick,
}: {
	action: boolean
	icon: React.ReactNode
	label: string
	onClick?: () => void
}) => {
	const headerButtonCN = classNames('headerButton', { action: action })
	return (
		<button className={headerButtonCN} onClick={onClick}>
			<span className='headerButton-icon'>{icon}</span>
			<p className='headerButton-label'>{label}</p>
		</button>
	)
}
