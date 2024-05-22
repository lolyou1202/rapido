import './SliderRules.style.scss'

export const SliderRulesSlide = ({
	numSlide,
	titleSlide,
	descriptionSlide,
	demoSlide,
	buttonSlide,
}: {
	numSlide: number
	titleSlide: string
	descriptionSlide: string
	demoSlide?: React.ReactNode
	buttonSlide?: React.ReactNode
}) => {
	return (
		<div className='sliderRules'>
			<div className='sliderRules-demo'>
				<span style={{ width: '400px' }}>{demoSlide}</span>
			</div>
			<div className='sliderRules__step'>
				<span>
					<span className='sliderRules__step-title'>
						<p>{numSlide}.</p>
						<p>{titleSlide}</p>
					</span>
					<p className='sliderRules__step-description'>
						{descriptionSlide}
					</p>
					{buttonSlide}
				</span>
			</div>
		</div>
	)
}
