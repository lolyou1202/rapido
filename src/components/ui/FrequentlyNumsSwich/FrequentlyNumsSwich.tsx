import './FrequentlyNumsSwich.stule.scss'
import { FrequentlyNumsDropSwich } from '../../../types/editionTypes'
import { DefaultButton } from '../Button/DefaultButton/DefaultButton'
import { NUM_LAST_FEW_EDITIONS } from '../../../constants/settings'
import { Layout } from '../Layout/Layout'

export const FrequentlyNumsSwich = ({
	variant,
	percent,
	lastTime,
	onClickVariant,
}: {
	percent: number
	lastTime: number
	variant: FrequentlyNumsDropSwich
	onClickVariant: (newVariant: FrequentlyNumsDropSwich) => void
}) => {
	const wording = () => {
		let stringNumber = String(lastTime).slice(-2)

		if (stringNumber.length === 1) {
			stringNumber = `0${stringNumber}`
		}
		if (Number(stringNumber[1]) === 1 && Number(stringNumber[0]) !== 1) {
			return `${lastTime} тираж`
		}
		if (
			Number(stringNumber[1]) > 1 &&
			Number(stringNumber[1]) < 5 &&
			Number(stringNumber[0]) !== 1
		) {
			return `${lastTime} тиража`
		}
		return `${lastTime} тиражей`
	}
	return (
		<Layout classNameLayoutContent='frequentlyNums-swich'>
			<span>
				<p>в {percent}% тиражей</p>
				<p>последний раз — {wording()} назад</p>
			</span>
			<DefaultButton
				action={variant === 'lastFew'}
				label={`В последних ${NUM_LAST_FEW_EDITIONS} тиражах`}
				onClick={() => onClickVariant('lastFew')}
			/>
			<DefaultButton
				action={variant === 'wholeGame'}
				label='За всё время игры'
				onClick={() => onClickVariant('wholeGame')}
			/>
		</Layout>
	)
}
