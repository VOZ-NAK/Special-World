// features/theme/themeSlice.ts
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type Theme = 'light' | 'dark'

interface ThemeState {
	currentTheme: Theme
}

const loadTheme = (): Theme => {
	if (typeof window !== 'undefined') {
		const savedTheme = localStorage.getItem('theme') as Theme | null
		return savedTheme || 'light'
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
			state.currentTheme = state.currentTheme === 'light' ? 'dark' : 'light'
		},
		setTheme: (state, action: PayloadAction<Theme>) => {
			state.currentTheme = action.payload
		}
	}
})

export const { toggleTheme, setTheme } = themeSlice.actions
export default themeSlice.reducer
