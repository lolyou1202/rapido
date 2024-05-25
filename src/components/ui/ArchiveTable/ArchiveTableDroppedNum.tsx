export const ArchiveTableDroppedNum = ({
	num,
	className,
}: {
	num: number
	className: string
}) => {
	return <li className={className}>{num}</li>
}
