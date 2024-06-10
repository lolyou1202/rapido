import './Rules.style.scss'
import { Slider } from '../../components/ui/Slider/Slider'
import { RulesSlide } from '../../components/ui/Slider/Slides/RulesSlide'
import { Ticket } from '../../components/containers/Ticket/Ticket'
import { DefaultButton } from '../../components/ui/Button/DefaultButton/DefaultButton'
import { useNavigate } from 'react-router-dom'
import { Controls } from '../../components/containers/Controls/Controls'
import { generateEmptyTicket } from '../../hooks/generateEmptyTicket'

const slidesInfo = [
	{
		title: 'Выберите числа в билете',
		description:
			'8 чисел в первом поле и 1 число во втором. При помощи функции СЛУЧАЙНО билет автоматически заполнится случайным образом',
		demo: <Ticket ticketState={generateEmptyTicket({ idTicket: 1111 })} />,
		textButton: 'Выбрать числа',
	},
	{
		title: 'Заполните несколько билетов',
		description:
			'Заполните самостоятельно или выберите нужное количество билетов, которые это сделают автоматически, нажав на кнопку ЗАПОЛНИТЬ',
		demo: <Controls numCorrectTicket={4} curentModifier='random' />,
		textButton: 'Заполнить билет',
	},
	{
		title: 'Выпустите тираж',
		description:
			'Если ваши билеты готовы к игре, то нажмите на кнопку ВЫПУСТИТЬ ТИРАЖ и проверяйте какие из них смогли выиграть',
		demo: (
			<div className='sidebar'>
				<Controls numCorrectTicket={4} curentModifier='random' />
				<DefaultButton
					action
					disabled={false}
					label='Выпустить тираж'
				/>
			</div>
		),
		textButton: 'Выпустить тираж',
	},
]

export const Rules = () => {
	const navigate = useNavigate()
	return (
		<div className='rules'>
			<span className='rules-header'>
				<h2 className='rules-title'>Как играть</h2>
			</span>
			<span className='rules-main'>
				<Slider
					sliderList={slidesInfo.map((slide, index) => {
						const { title, description, demo, textButton } = slide
						return (
							<RulesSlide
								numSlide={index}
								titleSlide={title}
								descriptionSlide={description}
								demoSlide={demo}
								buttonSlide={
									<DefaultButton
										action
										label={textButton}
										onClick={() => navigate('/tickets')}
									/>
								}
							/>
						)
					})}
				/>
			</span>
		</div>
	)
}
