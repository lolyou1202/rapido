export const ArrowSliderLeft = ({
	className,
	color,
}: {
	className?: string
	color?: string
}) => {
	return (
		<svg
			width='24'
			height='48'
			viewBox='0 0 24 48'
			className={className}
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M15 12L9 24L15 36'
				stroke={color}
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
