import './ProgressBar.style.scss'

export const ProgressBar = ({
	progress,
	length,
}: {
	progress: number
	length: number
}) => {
	return (
		<div className='progressBar'>
			<div className='progressBar-list'>
				{[...Array(length)].map((_, index) => {
					return (
						<span key={index} className='progressBar-item'></span>
					)
				})}
			</div>
			<span
				className='progressBar-progress'
				style={{ width: `${(progress / length) * 100}%` }}
			></span>
		</div>
	)
}
