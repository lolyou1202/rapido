import './SidebarContainer.style.scss'
import classNames from 'classnames'

export const SidebarContainer = ({
	title,
	children,
	classNameContainerRoot,
	classNameContainerContent,
}: {
	title?: string
	classNameContainerRoot?: string
	classNameContainerContent?: string
	children?: React.ReactNode
}) => {
	const containerRootCN = classNames(
		'sidebar__container',
		classNameContainerRoot
	)
	const containerContentCN = classNames(
		'sidebar__container-content',
		classNameContainerContent
	)
	return (
		<div className={containerRootCN}>
			{title && <p className='sidebar__container-title'>{title}</p>}
			<div className={containerContentCN}>{children}</div>
		</div>
	)
}
