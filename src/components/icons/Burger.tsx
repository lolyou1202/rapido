export const Burger = ({
	className,
	color,
}: {
	className?: string
	color?: string
}) => {
	return (
		<svg
			width='32'
			height='32'
			viewBox='0 0 32 32'
			className={className}
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M4 16H28'
				stroke={color}
				strokeWidth={2}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M4 8H28'
				stroke={color}
				strokeWidth={2}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M4 24H28'
				stroke={color}
				strokeWidth={2}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}