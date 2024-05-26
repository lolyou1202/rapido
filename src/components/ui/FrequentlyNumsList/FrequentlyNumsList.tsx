import './FrequentlyNumsList.style.scss'
import classNames from 'classnames'
import { FieldVariant } from '../../../types/ticketTypes'
import { SidebarContainer } from '../Sidebar/SidebarContainer/SidebarContainer'
import { CircleDashedButton } from '../Button/CircleDashedButton/CircleDashedButton'

export const FrequentlyNumsList = ({
	selectedFrequentlyNum,
	frequentlyNumsList,
	onClickFrequentlyNum,
}: {
	selectedFrequentlyNum: { variantField: FieldVariant; indexNum: number }
	frequentlyNumsList: {
		[key in FieldVariant]: {
			num: number
			count: number
		}[]
	}
	onClickFrequentlyNum: ({
		variantField,
		indexNum,
	}: {
		variantField: FieldVariant
		indexNum: number
	}) => void
}) => {
	return (
		<SidebarContainer
			title='Часто выпадающие числа'
			classNameContainerRoot='frequentlyNums-list-root'
			classNameContainerContent='frequentlyNums-list-content'
		>
			{Object.entries(frequentlyNumsList).map(
				([key, valueField], indexField) => {
					const variantField = key as FieldVariant
					return (
						<div
							key={indexField}
							className='frequentlyNums-list-field'
						>
							<p>{`Поле ${indexField + 1}`}</p>
							<ul>
								{valueField.map((num, indexNum) => {
									const liCN = classNames({
										selected:
											selectedFrequentlyNum.indexNum ===
												indexNum &&
											variantField ===
												selectedFrequentlyNum.variantField,
									})
									return (
										<li
											key={num.num}
											className={liCN}
											onClick={() =>
												onClickFrequentlyNum({
													indexNum,
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
		</SidebarContainer>
	)
}
