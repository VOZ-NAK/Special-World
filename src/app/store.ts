import { configureStore } from '@reduxjs/toolkit'

import themeReducer from '@/entities/theme/model/themeSlice'

import sidebarReducer from '@/widgets/layout/model/sidebarSlice'

export const store = configureStore({
	reducer: {
		sidebar: sidebarReducer,
		theme: themeReducer
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
