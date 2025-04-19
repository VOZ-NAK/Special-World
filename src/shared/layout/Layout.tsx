import { FC, PropsWithChildren } from 'react'

import { useToggle } from '../lib/hooks'

import styles from './layout.module.scss'
import { Header, LeftSidebar, RightSidebar } from './ui'

const Layout: FC<PropsWithChildren> = ({ children }) => {
	const [isLeftSidebarOpen, toggleLeftSidebar] = useToggle()
	const [isRightSidebarOpen, toggleRightSidebar] = useToggle()

	return (
		<div className={styles.layout}>
			<Header
				onToggleLeftSidebar={toggleLeftSidebar}
				onToggleRightSidebar={toggleRightSidebar}
			/>
			<div className={styles.page}>
				<LeftSidebar isLeftSidebarOpen={!isLeftSidebarOpen} />
				<main className={styles.main}>{children}</main>
				<RightSidebar isRightSidebarOpen={!isRightSidebarOpen} />
			</div>
		</div>
	)
}
export default Layout
