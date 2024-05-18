import './SidebarContainer.style.scss'
import classNames from 'classnames'

export const SidebarContainer = ({
	title,
	children,
	className,
}: {
	title?: string
	className?: string
	children?: React.ReactNode
}) => {
	const containerCN = classNames('sidebar__container', className)
	return (
		<div className={containerCN}>
			{title && <p className='sidebar__container-title'>{title}</p>}
			<div className='sidebar__container-content'>{children}</div>
		</div>
	)
}
