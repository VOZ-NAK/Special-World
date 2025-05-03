import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface Category {
	id: string
	name: string
}

interface StudyMaterialsState {
	categories: Category[]
	selectedCategoryId: string | null
}

const initialState: StudyMaterialsState = {
	categories: [
		{ id: '1', name: 'Автоматизация звуков' },
		{ id: '2', name: 'Английский язык' },
		{ id: '3', name: 'Буквы, азбука' },
		{ id: '4', name: 'Грамматические категории' },
		{ id: '5', name: 'Дифференциация звуков' },
		{ id: '6', name: 'Звуковой анализ слова' },
		{ id: '7', name: 'Лексические темы' },
		{ id: '8', name: 'Логика, внимание' },
		{ id: '9', name: 'Математика, счет' },
		{ id: '10', name: 'Начальное чтение' },
		{ id: '11', name: 'Окружающий мир' },
		{ id: '12', name: 'Русский язык' },
		{ id: '13', name: 'Составление рассказа' },
		{ id: '14', name: 'Чтение слов' }
	],
	selectedCategoryId: null
}

const studyMaterialsSlice = createSlice({
	name: 'studyMaterials',
	initialState,
	reducers: {
		selectCategory(state, action: PayloadAction<string | null>) {
			state.selectedCategoryId = action.payload
		}
	}
})

export const { selectCategory } = studyMaterialsSlice.actions
export default studyMaterialsSlice.reducer
