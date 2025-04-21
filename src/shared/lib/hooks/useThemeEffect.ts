import { useEffect } from 'react'

import { useAppSelector } from './redux'

export const useThemeEffect = () => {
	const currentTheme = useAppSelector(state => state.theme.currentTheme)

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', currentTheme)
		localStorage.setItem('theme', currentTheme)
	}, [currentTheme])
}
