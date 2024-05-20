import './Rules.style.scss'
import { Slider } from '../../components/ui/Slider/Slider'
import { SliderRulesStep1 } from '../../components/ui/Slider/Slides/SliderRulesStep1'

export const Rules = () => {
	return (
		<div className='rules'>
			<span className='rules-header'>
				<h2 className='rules-title'>Как играть</h2>
			</span>
			<span className='rules-main'>
				<Slider
					sliderList={[<SliderRulesStep1 />, <SliderRulesStep1 />]}
				/>
			</span>
		</div>
	)
}
