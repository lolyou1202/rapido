import './SliderRules.style.scss'
import { generateEmptyTicket } from '../../../../hooks/generateEmptyTicket'
import { DefaultButton } from '../../Button/DefaultButton/DefaultButton'
import { Ticket } from '../../Ticket/Ticket/Ticket'

export const SliderRulesStep1 = () => {
	return (
		<div className='sliderRules'>
			<div className='sliderRules-demo'>
				<span>
					<Ticket
						ticketState={generateEmptyTicket({
							idTicket: 1111,
						})}
					/>
				</span>
			</div>
			<div className='sliderRules__step'>
				<span>
					<span className='sliderRules__step-title'>
						<p>1.</p>
						<p>Выберите числа в билете</p>
					</span>
					<p className='sliderRules__step-description'>
						8 чисел в первом поле и 1 число во втором. При помощи
						функции СЛУЧАЙНО билет автоматически заполнится
						случайным образом
					</p>
					<DefaultButton
						action
						label='Выбрать числа'
						onClick={() => {}}
					/>
				</span>
			</div>
		</div>
	)
}
