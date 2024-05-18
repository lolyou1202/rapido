import './SidebarDescriptionRow.style.scss'

export const SidebarDescriptionRow = ({
	description,
	count,
}: {
	description: string
	count: string | number
}) => {
	return (
		<div className='sidebar-descriptionRow'>
			<p>{description}</p>
			<span></span>
			<p>{count}</p>
		</div>
	)
}
