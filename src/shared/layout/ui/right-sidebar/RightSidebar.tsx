import cn from 'classnames'
import { FC } from 'react'
import { useLocation } from 'react-router-dom'

import { DocumentationSidebar } from './components'
import styles from './right-sidebar.module.scss'

interface IRightSidebar {
	isRightSidebarOpen: boolean
}

const RightSidebar: FC<IRightSidebar> = ({ isRightSidebarOpen }) => {
	const { pathname } = useLocation()

	const renderContent = () => {
		switch (pathname) {
			case '/documentation':
				return <DocumentationSidebar />
			case '/':
				return <p>Домашняя панель</p>
			default:
				return <p>Боковая панель по умолчанию</p>
		}
	}

	return (
		<aside
			className={cn(styles.rightSidebar, { [styles.open]: isRightSidebarOpen })}
		>
			{renderContent()}
		</aside>
	)
}
export default RightSidebar
