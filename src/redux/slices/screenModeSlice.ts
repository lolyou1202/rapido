import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: {
	screenModeState: {
		isOpen: boolean
		content: string[]
	}
} = {
	screenModeState: {
		isOpen: false,
		content: [],
	},
}

const screenModeSlice = createSlice({
	name: 'screenMode',
	initialState,
	reducers: {
		openScreenMode(
			state,
			{ payload }: PayloadAction<{ content: string[] }>
		) {
			state.screenModeState = { isOpen: true, content: payload.content }
		},
		closeScreenMode(state) {
			state.screenModeState = { isOpen: false, content: [] }
		},
	},
})

const { actions, reducer } = screenModeSlice
export const { openScreenMode, closeScreenMode } = actions
export default reducer
