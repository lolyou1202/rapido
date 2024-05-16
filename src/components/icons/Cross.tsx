export const Cross = ({
	size = 16,
	color,
	className,
}: {
	size?: number
	color?: string
	className?: string
}) => {
	return (
		<svg
			width={size}
			height={size}
			className={className}
			viewBox='0 0 16 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M4 12L8 8M8 8L12 4M8 8L12 12M8 8L4 4'
				stroke={color}
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
