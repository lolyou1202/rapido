import './FrequentlyNumsList.style.scss'
import { useState } from 'react'
import { ContainerBox } from '../Container/ContainerBox/ContainerBox'
import { CircleDashedButton } from '../Button/CircleDashedButton/CircleDashedButton'

export const FrequentlyNumsList = () => {
	const [selectedNum, setSelectedNum] = useState(0)

	return (
		<ContainerBox
			title='Часто выпадающие числа'
			classNameContainerRoot='frequentlyNums-list-root'
			classNameContainerContent='frequentlyNums-list-content'
		>
			<div className='frequentlyNums-list-field'>
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
			<div className='frequentlyNums-list-field'>
				<p>Поле 2</p>
				<ul>
					<li>
						<CircleDashedButton variant='coin' label='1' />
						<p>1</p>
					</li>
				</ul>
			</div>
		</ContainerBox>
	)
}
