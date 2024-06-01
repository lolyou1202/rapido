import './DescriptionRow.style.scss'

export const DescriptionRow = ({
	description,
	count,
}: {
	description: string
	count: string | number
}) => {
	return (
		<div className='descriptionRow'>
			<p>{description}</p>
			<span></span>
			<p>{count}</p>
		</div>
	)
}
