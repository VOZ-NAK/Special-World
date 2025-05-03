import { selectCategory } from '@/entities/study-materials/model/studyMaterialsSlice'

import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/redux'

import styles from './study-materials-sidebar.module.scss'

const StudyMaterialsSidebar = () => {
	const dispatch = useAppDispatch()
	const { categories, selectedCategoryId } = useAppSelector(
		state => state.studyMaterials
	)

	const handleClick = (id: string | null) => {
		dispatch(selectCategory(id))
	}

	return (
		<ul className={styles.menu}>
			<li
				className={!selectedCategoryId ? styles.active : ''}
				onClick={() => handleClick(null)}
			>
				Все категории
			</li>
			{categories.map(category => (
				<li
					key={category.id}
					className={selectedCategoryId === category.id ? styles.active : ''}
					onClick={() => handleClick(category.id)}
				>
					{category.name}
				</li>
			))}
		</ul>
	)
}

export default StudyMaterialsSidebar
