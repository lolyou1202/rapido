import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import ticket from './slices/ticketSlice'
import game from './slices/gameSlice'
import edition from './slices/editionSlice'

export const store = configureStore({
	reducer: {
		ticket,
		game,
		edition
	},
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>
