export const Add = ({
	className,
	size = 20,
	color,
}: {
	className?: string
	size?: number
	color?: string
}) => {
	return (
		<svg
			className={className}
			width={size}
			height={size}
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM10 4.33333C10.5523 4.33333 11 4.78105 11 5.33333V9H14.6667C15.219 9 15.6667 9.44771 15.6667 10C15.6667 10.5523 15.219 11 14.6667 11H11V14.6667C11 15.219 10.5523 15.6667 10 15.6667C9.44771 15.6667 9 15.219 9 14.6667V11H5.33333C4.78105 11 4.33333 10.5523 4.33333 10C4.33333 9.44771 4.78105 9 5.33333 9H9V5.33333C9 4.78105 9.44771 4.33333 10 4.33333Z'
				fill={color}
			/>
		</svg>
	)
}
