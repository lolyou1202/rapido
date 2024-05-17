export const Plus = ({
	className,
	size = 16,
	color,
	strokeWidth = 2,
}: {
	className?: string
	size?: number
	color?: string
	strokeWidth?: number
}) => {
	return (
		<svg
			className={className}
			width={size}
			height={size}
			viewBox='0 0 16 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M8 3.33325V12.6666'
				stroke={color}
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M3.33325 8H12.6666'
				stroke={color}
				strokeWidth={strokeWidth}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
