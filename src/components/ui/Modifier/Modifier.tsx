import './Modifier.style.scss'
import { Random } from '../../icons/Random'
import { EvenNumbers } from '../../icons/EvenNumbers'
import { OddNumbers } from '../../icons/OddNumbers'
import { UpperHalf } from '../../icons/UpperHalf'
import { LowerHalf } from '../../icons/LowerHalf'

export const Modifier = () => {
	return (
		<div className='modifire'>
			<p>Модификатор</p>
			<div>
				<span className='modifire-item'>
					<Random />
				</span>
				<span className='modifire-item'>
					<EvenNumbers />
				</span>
				<span className='modifire-item'>
					<OddNumbers />
				</span>
				<span className='modifire-item'>
					<UpperHalf />
				</span>
				<span className='modifire-item'>
					<LowerHalf />
				</span>
			</div>
		</div>
	)
}
