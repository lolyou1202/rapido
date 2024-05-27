import './Rules.style.scss'
import { Slider } from '../../components/ui/Slider/Slider'
import { SliderRulesSlide } from '../../components/ui/Slider/Slides/SliderRulesSlide'
import { Ticket } from '../../components/ui/Ticket/Ticket/Ticket'
import { useAppSelector } from '../../redux/hooks/useAppRedux'
import { DefaultButton } from '../../components/ui/Button/DefaultButton/DefaultButton'
import { useNavigate } from 'react-router-dom'
import { SidebarFillTickets } from '../../components/ui/Sidebar/SidebarFillTickets/SidebarFillTickets'

export const Rules = () => {
	const ticket = useAppSelector(state => state.game.gameRulesBlocks.ticket)

	const navigate = useNavigate()

	return (
		<div className='rules'>
			<span className='rules-header'>
				<h2 className='rules-title'>Как играть</h2>
			</span>
			<span className='rules-main'>
				<Slider
					sliderList={[
						<SliderRulesSlide
							numSlide={1}
							titleSlide='Выберите числа в билете'
							descriptionSlide='8 чисел в первом поле и 1 число во втором. При помощи функции СЛУЧАЙНО билет автоматически заполнится случайным образом'
							demoSlide={<Ticket ticketState={ticket} />}
							buttonSlide={
								<DefaultButton
									action
									label='Выбрать числа'
									onClick={() => navigate('/tickets')}
								/>
							}
						/>,
						<SliderRulesSlide
							numSlide={2}
							titleSlide='Заполните несколько билетов'
							descriptionSlide='Заполните самостоятельно или выберите нужное количество билетов, которые это сделают автоматически, нажав на кнопку ЗАПОЛНИТЬ'
							demoSlide={
								<SidebarFillTickets
									ticketsList={[]}
									correctTicketIdList={[]}
									onClickIssueEditionButton={() => {}}
								/>
							}
							buttonSlide={
								<DefaultButton
									action
									label='Заполнить билет'
									onClick={() => navigate('/tickets')}
								/>
							}
						/>,
						<SliderRulesSlide
							numSlide={3}
							titleSlide='Выпустите тиражв'
							descriptionSlide='Если ваши билеты готовы к игре, то нажмите на кнопку ВЫПУСТИТЬ ТИРАЖ и проверяйте какие из них смогли выиграть'
							demoSlide={
								<SidebarFillTickets
									ticketsList={[]}
									correctTicketIdList={[]}
									onClickIssueEditionButton={() => {}}
								/>
							}
							buttonSlide={
								<DefaultButton
									action
									label='Выпустить тираж'
									onClick={() => navigate('/tickets')}
								/>
							}
						/>,
					]}
				/>
			</span>
		</div>
	)
}
