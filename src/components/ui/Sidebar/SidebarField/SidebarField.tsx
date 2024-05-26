import './SidebarField.style.scss'
import classNames from 'classnames'

export const SidebarField = ({
	title,
	classNameRoot,
	children,
}: {
	title: string
	classNameRoot?: string
	children?: React.ReactNode
}) => {
	const sidebarFieldCN = classNames('sidebarField', classNameRoot)
	return (
		<div className={sidebarFieldCN}>
			<p className='sidebarField-title'>{title}</p>
			<div className='sidebarField-content'>{children}</div>
		</div>
	)
}
