import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface DocumentationCategory {
	id: string
	name: string
}

interface IDocumentationState {
	categories: DocumentationCategory[]
	selectedCategoryId: string | null
}

const initialState: IDocumentationState = {
	categories: [
		{ id: '1', name: 'Федеральные законы' },
		{ id: '2', name: 'ПМПК' },
		{ id: '3', name: 'ППМС-центры' },
		{ id: '4', name: 'Психолого-педагогическое сопровождение' },
		{ id: '5', name: 'ГИА' },
		{ id: '6', name: 'Организация образовательной деятельности' },
		{ id: '7', name: 'ФГОС' },
		{ id: '8', name: 'Образовательные программы' },
		{ id: '9', name: 'Формы обучения (получения образования)' },
		{ id: '10', name: 'Профориентация' }
	],
	selectedCategoryId: null
}

const documentationSlice = createSlice({
	name: 'documentation',
	initialState,
	reducers: {
		selectCategory(state, action: PayloadAction<string | null>) {
			state.selectedCategoryId = action.payload
		}
	}
})

export const { selectCategory } = documentationSlice.actions
export default documentationSlice.reducer
