import { FC, PropsWithChildren } from 'react'

import styles from './layout.module.scss'
import { Header, LeftSidebar, RightSidebar } from './ui'

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Header />
			<div className={styles.page}>
				<LeftSidebar />
				<main className={styles.main}>{children}</main>
				<RightSidebar />
			</div>
		</div>
	)
}
export default Layout
