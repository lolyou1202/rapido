export const ArrowBoldLeft = ({
	className,
	color,
}: {
	className?: string
	color?: string
}) => {
	return (
		<svg
			width='80'
			height='80'
			className={className}
			viewBox='0 0 80 80'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M34.5835 11.5194C37.1243 9.07358 41.357 10.8737 41.3576 14.4004L41.3597 25.5428L70.9996 25.5396C73.2089 25.5394 75 27.3303 75 29.5396V50.4894C75 52.6985 73.2091 54.4894 71 54.4894H41.3559L41.358 65.5947C41.3586 69.1221 37.1251 70.9235 34.5839 68.4772L7.99352 42.8799C6.359 41.3064 6.35899 38.6899 7.99352 37.1164L34.5835 11.5194Z'
				fill={color}
			/>
		</svg>
	)
}
