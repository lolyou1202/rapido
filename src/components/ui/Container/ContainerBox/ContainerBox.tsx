import './ContainerBox.style.scss'
import classNames from 'classnames'

export const ContainerBox = ({
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
		'containerBox-root',
		classNameContainerRoot
	)
	const containerContentCN = classNames(
		'containerBox-content',
		classNameContainerContent
	)
	return (
		<div className={containerRootCN}>
			{title && <p className='containerBox-title'>{title}</p>}
			<div className={containerContentCN}>{children}</div>
		</div>
	)
}
