import cn from 'classnames'
import { FC } from 'react'
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2'
import { Link } from 'react-router-dom'

import styles from './left-sidebar.module.scss'

interface ILeftSidebar {
	isLeftSidebarOpen: boolean
}

const LeftSidebar: FC<ILeftSidebar> = ({ isLeftSidebarOpen }) => {
	return (
		<aside
			className={cn(styles.leftSidebar, {
				[styles.open]: isLeftSidebarOpen
			})}
		>
			<div></div>
			<div className={styles.menu}>
				<Link to='/documentation' className={styles.menuItem}>
					<HiOutlineClipboardDocumentList className={styles.icon} />
					<p className={styles.menuText}>Документация</p>
				</Link>
			</div>
		</aside>
	)
}
export default LeftSidebar
