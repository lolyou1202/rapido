import './RulesSlide.style.scss'

export const RulesSlide = ({
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
		<div className='rulesSlide'>
			<div className='rulesSlide-demo'>
				<span>{demoSlide}</span>
			</div>
			<div className='rulesSlide__step'>
				<span>
					<span className='rulesSlide__step-title'>
						<p>{numSlide}.</p>
						<p>{titleSlide}</p>
					</span>
					<p className='rulesSlide__step-description'>
						{descriptionSlide}
					</p>
					{buttonSlide}
				</span>
			</div>
		</div>
	)
}
