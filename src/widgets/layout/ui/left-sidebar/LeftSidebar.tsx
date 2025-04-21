import cn from 'classnames'
import { FC } from 'react'
import { HiOutlineClipboardDocumentList, HiOutlineHome } from 'react-icons/hi2'
import { Link, useLocation } from 'react-router-dom'

import { useAppSelector } from '@/shared/lib/hooks/redux'

import styles from './left-sidebar.module.scss'

const LeftSidebar: FC = () => {
	const location = useLocation()
	const isLeftSidebarOpen = useAppSelector(
		state => state.sidebar.isLeftSidebarOpen
	)

	return (
		<aside
			className={cn(styles.leftSidebar, {
				[styles.open]: isLeftSidebarOpen
			})}
		>
			<div></div>
			<div className={styles.menu}>
				<Link
					to='/'
					className={cn(styles.menuItem, {
						[styles.active]: location.pathname === '/'
					})}
				>
					<HiOutlineHome className={styles.icon} />
					<p className={styles.menuText}>Главная</p>
				</Link>

				<Link
					to='/documentation'
					className={cn(styles.menuItem, {
						[styles.active]: location.pathname === '/documentation'
					})}
				>
					<HiOutlineClipboardDocumentList className={styles.icon} />
					<p className={styles.menuText}>Документация</p>
				</Link>
			</div>
		</aside>
	)
}

export default LeftSidebar
