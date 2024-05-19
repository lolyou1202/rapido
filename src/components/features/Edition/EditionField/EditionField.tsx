import './EditionField.style.scss'

export const EditionField = ({
	title,
	children,
}: {
	title: string
	children?: React.ReactNode
}) => {
	return (
		<div className='edition__field'>
			<p className='edition__field-title'>{title}</p>
			<div className='edition__field-content'>{children}</div>
		</div>
	)
}
