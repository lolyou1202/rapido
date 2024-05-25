import classNames from 'classnames'
import { ArchiveTableDroppedNum } from './ArchiveTableDroppedNum'
import { FieldVariant } from '../../../types/ticketTypes'

export const ArchiveTableDroppedNumsList = ({
	droppedNums,
	variantField,
	frequentlyNum,
}: {
	droppedNums: number[]
	variantField: FieldVariant
	frequentlyNum: { variantField: FieldVariant; num: number }
}) => {
	return droppedNums.map(num => {
		const liCN = classNames(variantField, {
			action:
				frequentlyNum.variantField === variantField &&
				frequentlyNum.num === num,
		})
		return <ArchiveTableDroppedNum key={num} num={num} className={liCN} />
	})
}
