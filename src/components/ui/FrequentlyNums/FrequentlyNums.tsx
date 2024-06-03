import './FrequentlyNums.style.scss'
import { FieldVariant } from '../../../types/ticketTypes'
import { FrequentlyNumsDropSwich } from '../../../types/editionTypes'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { Layout } from '../Layout/Layout'
import { FrequentlyNumsList } from './FrequentlyNumsList'
import { FrequentlyNumsSwich } from './FrequentlyNumsSwich'

export const FrequentlyNums = ({
	selectedFrequentlyNum,
	frequentlyNumsList,
	variant,
	onClickFrequentlyNum,
	onClickVariant,
}: {
	selectedFrequentlyNum: {
		variantField: FieldVariant
		indexNum: number
	}
	frequentlyNumsList: {
		[key in FieldVariant]: {
			num: number
			count: number
			percentEditions: number
			lastTime: number
		}[]
	}
	variant: FrequentlyNumsDropSwich
	onClickFrequentlyNum: ({
		variantField,
		indexNum,
	}: {
		variantField: FieldVariant
		indexNum: number
	}) => void
	onClickVariant: (newVariant: FrequentlyNumsDropSwich) => void
}) => {
	const [width] = useWindowSize()

	const frequentlyNumsPercent =
		frequentlyNumsList[selectedFrequentlyNum.variantField][
			selectedFrequentlyNum.indexNum
		].percentEditions

	const frequentlyNumsLastTime =
		frequentlyNumsList[selectedFrequentlyNum.variantField][
			selectedFrequentlyNum.indexNum
		].lastTime

	return (
		<>
			<Layout
				title='Часто выпадающие числа'
				classNameLayoutRoot='frequentlyNums-list-root'
				classNameLayoutContent='frequentlyNums-list-content'
			>
				<FrequentlyNumsList
					selectedFrequentlyNum={selectedFrequentlyNum}
					frequentlyNumsList={frequentlyNumsList}
					onClickFrequentlyNum={onClickFrequentlyNum}
				/>
				{width < 1167 && (
					<span className='frequentlyNums-swich-content'>
						<FrequentlyNumsSwich
							variant={variant}
							percent={frequentlyNumsPercent}
							lastTime={frequentlyNumsLastTime}
							onClickVariant={onClickVariant}
						/>
					</span>
				)}
			</Layout>
			{width >= 1167 && (
				<Layout classNameLayoutContent='frequentlyNums-swich-content'>
					<FrequentlyNumsSwich
						variant={variant}
						percent={frequentlyNumsPercent}
						lastTime={frequentlyNumsLastTime}
						onClickVariant={onClickVariant}
					/>
				</Layout>
			)}
		</>
	)
}
