import './SidebarModifier.style.scss'
import { Random } from '../../../icons/Random'
import { EvenNumbers } from '../../../icons/EvenNumbers'
import { OddNumbers } from '../../../icons/OddNumbers'
import { UpperHalf } from '../../../icons/UpperHalf'
import { LowerHalf } from '../../../icons/LowerHalf'

export const SidebarModifier = () => {
	return (
		<div className='sidebarModifire'>
			<p>Модификатор</p>
			<div>
				<span className='sidebarModifire-item'>
					<Random />
				</span>
				<span className='sidebarModifire-item'>
					<EvenNumbers />
				</span>
				<span className='sidebarModifire-item'>
					<OddNumbers />
				</span>
				<span className='sidebarModifire-item'>
					<UpperHalf />
				</span>
				<span className='sidebarModifire-item'>
					<LowerHalf />
				</span>
			</div>
		</div>
	)
}
