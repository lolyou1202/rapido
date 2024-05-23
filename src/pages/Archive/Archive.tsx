import './Archive.style.scss'
import { ContainerBox } from '../../components/ui/Container/ContainerBox/ContainerBox'
import { CircleDashedButton } from '../../components/ui/Button/CircleDashedButton/CircleDashedButton'
import { DefaultButton } from '../../components/ui/Button/DefaultButton/DefaultButton'
import { useState } from 'react'
import { EditionBlock } from '../../components/features/EditionBlock/EditionBlock'
import { useAppSelector } from '../../redux/hooks/useAppRedux'
import { ArchiveTable } from '../../components/ui/ArchiveTable/ArchiveTable'

export const Archive = () => {
	const editionsList = useAppSelector(state => state.game.editionsList)

	const [frequentlyNumsVariant, setFrequentlyNumsVariant] = useState<
		'lastTen' | 'allGame'
	>('lastTen')
	const [indexSelectedEdition, SetIndexSelectedEdition] = useState<
		null | number
	>(null)

	return (
		<div className='archive-grid'>
			<ContainerBox
				title='Часто выпадающие числа'
				classNameContainerRoot='frequentlyNums-fields-root'
				classNameContainerContent='frequentlyNums-fields-content'
			>
				<div className='frequentlyNums-fields-field'>
					<p>Поле 1</p>
					<ul>
						<li className='selected'>
							<CircleDashedButton variant='coin' label='1' />
							<p>1</p>
						</li>
						<li>
							<CircleDashedButton variant='coin' label='1' />
							<p>1</p>
						</li>
						<li>
							<CircleDashedButton variant='coin' label='1' />
							<p>1</p>
						</li>
						<li>
							<CircleDashedButton variant='coin' label='1' />
							<p>1</p>
						</li>
						<li>
							<CircleDashedButton variant='coin' label='1' />
							<p>1</p>
						</li>
						<li>
							<CircleDashedButton variant='coin' label='1' />
							<p>1</p>
						</li>
						<li>
							<CircleDashedButton variant='coin' label='1' />
							<p>1</p>
						</li>
						<li>
							<CircleDashedButton variant='coin' label='1' />
							<p>1</p>
						</li>
					</ul>
				</div>
				<div className='frequentlyNums-fields-field'>
					<p>Поле 2</p>
					<ul>
						<li>
							<CircleDashedButton variant='coin' label='1' />
							<p>1</p>
						</li>
					</ul>
				</div>
			</ContainerBox>
			<ContainerBox classNameContainerContent='frequentlyNums-description-content'>
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
			<ContainerBox>
				<ArchiveTable editionsList={editionsList} />
			</ContainerBox>
			<span>
				<EditionBlock edition={editionsList[0]} />
			</span>
		</div>
	)
}
