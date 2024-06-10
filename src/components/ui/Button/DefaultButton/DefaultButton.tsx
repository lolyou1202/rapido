import './DefaultButton.style.scss'
import classNames from 'classnames'

export const DefaultButton = ({
	action,
	icon,
	label,
	className,
	...others
}: {
	action?: boolean
	disabled?: boolean
	icon?: React.ReactNode
	label?: string
	className?: string
	onClick?: () => void
}) => {
	const defaultButtonCN = classNames('defaultButton', className, {
		action: action,
	})
	return (
		<button className={defaultButtonCN} {...others}>
			{icon && <span className='defaultButton-icon'>{icon}</span>}
			{label && <span className='defaultButton-label'>{label}</span>}
		</button>
	)
}
