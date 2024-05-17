import './Tickets.style.scss'
import { colorTokens } from '../../constants/colorTokens'
import { useAppDispatch, useAppSelector } from '../../redux/hooks/useAppRedux'
import { Ticket } from '../../components/ui/Ticket/Ticket'
import { DefaultButton } from '../../components/ui/Button/DefaultButton/DefaultButton'
import { Add } from '../../components/icons/Add'
import { addTickets } from '../../redux/slices/ticketSlice'
import { Minus } from '../../components/icons/Minus'
import { Plus } from '../../components/icons/Plus'

const { white } = colorTokens

export const Tickets = () => {
	const ticketsList = useAppSelector(state => state.ticket.ticketsList)

	const dispatch = useAppDispatch()

	const handleClickAddTicketsButton = () => {
		dispatch(addTickets())
	}

	return (
		<div className='game-layout'>
			<span>
				<div className='game-ticketList'>
					{ticketsList.map(ticket => (
						<Ticket key={ticket.idTicket} ticketState={ticket} />
					))}
				</div>
				<DefaultButton
					action={false}
					label='Добавить билеты'
					icon={<Add color={white} />}
					onClick={handleClickAddTicketsButton}
				/>
			</span>
			<span>
				<div className='game__sidebar'>
					<div className='sidebar__container'>
						<div className='sidebar__container-controlRow'>
							<p>Случайно заполнить</p>
							<span>
								<DefaultButton
									action={false}
									disabled={true}
									icon={<Minus color={white} />}
									onClick={() => {}}
								/>
								<p>12</p>
								<DefaultButton
									action={false}
									disabled={false}
									icon={<Plus color={white} />}
									onClick={() => {}}
								/>
							</span>
						</div>
						<div className='sidebar__container-descriptionRow'>
							<p>Заполненных билетов</p>
							<span></span>
							<p>1</p>
						</div>
						<div className='sidebar__container-buttons'>
							<DefaultButton
								action={false}
								label='Заполнить'
								onClick={() => {}}
							/>
							<DefaultButton
								action={false}
								label='Очистить все'
								onClick={() => {}}
							/>
						</div>
					</div>
					<DefaultButton
						action
						label='Выпустить тираж'
						onClick={() => {}}
					/>
				</div>
			</span>
		</div>
	)
}
