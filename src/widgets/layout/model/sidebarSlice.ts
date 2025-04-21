import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface SidebarState {
	isLeftSidebarOpen: boolean
	isRightSidebarOpen: boolean
}

const initialState: SidebarState = {
	isLeftSidebarOpen: true,
	isRightSidebarOpen: true
}

const sidebarSlice = createSlice({
	name: 'sidebar',
	initialState,
	reducers: {
		toggleLeftSidebar(state) {
			state.isLeftSidebarOpen = !state.isLeftSidebarOpen
		},
		toggleRightSidebar(state) {
			state.isRightSidebarOpen = !state.isRightSidebarOpen
		},
		setLeftSidebar(state, action: PayloadAction<boolean>) {
			state.isLeftSidebarOpen = action.payload
		},
		setRightSidebar(state, action: PayloadAction<boolean>) {
			state.isRightSidebarOpen = action.payload
		}
	}
})

export const {
	toggleLeftSidebar,
	toggleRightSidebar,
	setLeftSidebar,
	setRightSidebar
} = sidebarSlice.actions

export default sidebarSlice.reducer
