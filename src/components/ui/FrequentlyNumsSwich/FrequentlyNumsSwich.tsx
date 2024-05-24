import './FrequentlyNumsSwich.stule.scss'
import { ContainerBox } from '../Container/ContainerBox/ContainerBox'
import { DefaultButton } from '../Button/DefaultButton/DefaultButton'
import { useState } from 'react'

export const FrequentlyNumsSwich = () => {
	const [frequentlyNumsVariant, setFrequentlyNumsVariant] = useState<
		'lastTen' | 'allGame'
	>('lastTen')
	return (
		<ContainerBox classNameContainerContent='frequentlyNums-swich'>
			<span>
				<p>в 70% тиражей</p>
				<p>последний раз — 0 тиражей назад</p>
			</span>
			<DefaultButton
				action={frequentlyNumsVariant === 'lastTen'}
				label='В последних 10 тиражах'
				onClick={() => setFrequentlyNumsVariant('lastTen')}
			/>
			<DefaultButton
				action={frequentlyNumsVariant === 'allGame'}
				label='За всё время игры'
				onClick={() => setFrequentlyNumsVariant('allGame')}
			/>
		</ContainerBox>
	)
}
