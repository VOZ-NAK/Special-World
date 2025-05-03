import { useEffect } from 'react'

import { ActionStorage, manageStorage } from '../storage/manageStorage'

import { useAppSelector } from './redux'

export const useThemeEffect = () => {
	const currentTheme = useAppSelector(state => state.theme.currentTheme)

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', currentTheme)

		manageStorage(ActionStorage.Set, ['theme'], [currentTheme])
	}, [currentTheme])
}
