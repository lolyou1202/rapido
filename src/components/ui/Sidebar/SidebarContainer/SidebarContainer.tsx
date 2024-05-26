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
		'sidebarContainer-root',
		classNameContainerRoot
	)
	const containerContentCN = classNames(
		'sidebarContainer-content',
		classNameContainerContent
	)
	return (
		<div className={containerRootCN}>
			{title && <p className='sidebarContainer-title'>{title}</p>}
			<div className={containerContentCN}>{children}</div>
		</div>
	)
}
