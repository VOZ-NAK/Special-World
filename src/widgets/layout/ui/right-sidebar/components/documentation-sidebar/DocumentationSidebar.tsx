import { selectCategory } from '@/entities/documentation/model/documentationSlice'

import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/redux'

import styles from './documentation-sidebar.module.scss'

const DocumentationSidebar = () => {
	const dispatch = useAppDispatch()
	const { categories, selectedCategoryId } = useAppSelector(
		state => state.documentation
	)

	const handleClick = (id: string | null) => {
		dispatch(selectCategory(id))
	}

	return (
		<ul className={styles.documentationSidebar}>
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

export default DocumentationSidebar
