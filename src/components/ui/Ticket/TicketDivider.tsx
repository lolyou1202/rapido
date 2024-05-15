export const TicketDivider = ({
	color = '#000000',
	dash = 12,
	gap = 4,
}: {
	color?: string
	dash?: number
	gap?: number
}) => {
	return (
		<svg
			width='368'
			height='2'
			viewBox='0 0 368 2'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<rect
				x='9'
				y='1'
				width='368'
				height='2'
				stroke={color}
				strokeDasharray={`${dash} ${gap}`}
			/>
		</svg>
	)
}
