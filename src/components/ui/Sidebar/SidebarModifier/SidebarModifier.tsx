import './SidebarModifier.style.scss'
import { SidebarField } from '../SidebarField/SidebarField'
import { Random } from '../../../icons/Random'
import { EvenNumbers } from '../../../icons/EvenNumbers'
import { OddNumbers } from '../../../icons/OddNumbers'
import { UpperHalf } from '../../../icons/UpperHalf'
import { LowerHalf } from '../../../icons/LowerHalf'

export const SidebarModifier = () => {
	return (
		<SidebarField title='Модификатор'>
			<div className='sidebarModifire'>
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
		</SidebarField>
	)
}
