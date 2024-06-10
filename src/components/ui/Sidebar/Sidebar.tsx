import './Sidebar.style.scss'
import classNames from 'classnames'

export const Sidebar = ({
	classNameSidebar,
	children,
}: {
	classNameSidebar?: string
	children?: React.ReactNode
}) => {
	const siedebarCN = classNames('sidebar', classNameSidebar)
	return <aside className={siedebarCN}>{children}</aside>
}
