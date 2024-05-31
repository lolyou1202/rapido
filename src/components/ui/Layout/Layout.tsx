import './Layout.style.scss'
import classNames from 'classnames'

export const Layout = ({
	title,
	children,
	classNameLayoutRoot,
	classNameLayoutContent,
}: {
	title?: string
	classNameLayoutRoot?: string
	classNameLayoutContent?: string
	children?: React.ReactNode
}) => {
	const layoutRootCN = classNames('layout-root', classNameLayoutRoot)
	const layoutContentCN = classNames('layout-content', classNameLayoutContent)
	return (
		<div className={layoutRootCN}>
			{title && <p className='layout-title'>{title}</p>}
			<div className={layoutContentCN}>{children}</div>
		</div>
	)
}
