import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import ticket from './slices/ticketSlice'
import game from './slices/game'

export const store = configureStore({
	reducer: {
		ticket,
		game,
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
