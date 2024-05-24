import './FrequentlyNumsList.style.scss'
import classNames from 'classnames'
import { FieldVariant } from '../../../types/ticketTypes'
import { ContainerBox } from '../Container/ContainerBox/ContainerBox'
import { CircleDashedButton } from '../Button/CircleDashedButton/CircleDashedButton'

export const FrequentlyNumsList = ({
	frequentlyNumsList,
	onClickFrequentlyNum,
}: {
	frequentlyNumsList: {
		[key in FieldVariant]: {
			active: boolean
			num: number
			count: number
		}[]
	}
	onClickFrequentlyNum: ({
		variantField,
		num,
	}: {
		variantField: FieldVariant
		num: number
	}) => void
}) => {
	return (
		<ContainerBox
			title='Часто выпадающие числа'
			classNameContainerRoot='frequentlyNums-list-root'
			classNameContainerContent='frequentlyNums-list-content'
		>
			{Object.entries(frequentlyNumsList).map(
				([key, valueField], index) => {
					const variantField = key as FieldVariant
					return (
						<div key={index} className='frequentlyNums-list-field'>
							<p>{`Поле ${index + 1}`}</p>
							<ul>
								{valueField.map(num => {
									const liCN = classNames({
										selected: num.active,
									})
									return (
										<li
											key={num.num}
											className={liCN}
											onClick={() =>
												onClickFrequentlyNum({
													num: num.num,
													variantField,
												})
											}
										>
											<CircleDashedButton
												variant='coin'
												label={`${num.num}`}
											/>
											<p>{num.count}</p>
										</li>
									)
								})}
							</ul>
						</div>
					)
				}
			)}
		</ContainerBox>
	)
}
