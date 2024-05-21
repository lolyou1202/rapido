import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import game from './slices/gameSlice'

export const store = configureStore({
	reducer: {
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
