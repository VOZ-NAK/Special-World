import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import {
	ActionStorage,
	manageStorage
} from '@/shared/lib/storage/manageStorage'

type Theme = 'light' | 'dark'

interface ThemeState {
	currentTheme: Theme
}

const loadTheme = (): Theme => {
	if (typeof window !== 'undefined') {
		const [savedTheme] = manageStorage(ActionStorage.Get, [
			'theme'
		]) as (Theme | null)[]
		return savedTheme ?? 'light'
	}
	return 'light'
}

const initialState: ThemeState = {
	currentTheme: loadTheme()
}

export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		toggleTheme: state => {
			const newTheme = state.currentTheme === 'light' ? 'dark' : 'light'
			state.currentTheme = newTheme
			manageStorage(ActionStorage.Set, ['theme'], [newTheme])
		},
		setTheme: (state, action: PayloadAction<Theme>) => {
			state.currentTheme = action.payload
			manageStorage(ActionStorage.Set, ['theme'], [action.payload])
		}
	}
})

export const { toggleTheme, setTheme } = themeSlice.actions
export default themeSlice.reducer
