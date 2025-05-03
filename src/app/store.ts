import { configureStore } from '@reduxjs/toolkit'

import documentationReducer from '@/entities/documentation/model/documentationSlice'
import studyMaterialsReducer from '@/entities/study-materials/model/studyMaterialsSlice'
import themeReducer from '@/entities/theme/model/themeSlice'

import sidebarReducer from '@/widgets/layout/model/sidebarSlice'

export const store = configureStore({
	reducer: {
		studyMaterials: studyMaterialsReducer,
		sidebar: sidebarReducer,
		documentation: documentationReducer,
		theme: themeReducer
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
