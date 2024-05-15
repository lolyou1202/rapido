import './DefaultButton.style.scss'
import classNames from 'classnames'

export const DefaultButton = ({
	action,
	icon,
	label,
	onClick,
}: {
	action: boolean
	icon: React.ReactNode
	label: string
	onClick: () => void
}) => {
	const headerButtonCN = classNames('defaultButton', { action: action })
	return (
		<button className={headerButtonCN} onClick={onClick}>
			<span className='defaultButton-icon'>{icon}</span>
			<p className='defaultButton-label'>{label}</p>
		</button>
	)
}
