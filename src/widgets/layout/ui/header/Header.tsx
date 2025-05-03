import { FC } from 'react'
import { BsWindowSidebar } from 'react-icons/bs'
import { FiMoon, FiSun } from 'react-icons/fi'
import { LuUser } from 'react-icons/lu'
import { Link } from 'react-router-dom'

import { toggleTheme } from '@/entities/theme/model/themeSlice'

import LogoSVG from '@/shared/assets/icons/LogoSVG'
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/redux'

import { toggleLeftSidebar, toggleRightSidebar } from '../../model/sidebarSlice'

import styles from './header.module.scss'

const Header: FC = () => {
	const dispatch = useAppDispatch()
	const currentTheme = useAppSelector(state => state.theme.currentTheme)

	return (
		<header className={styles.header}>
			<aside className={styles.leftSidebar}>
				<BsWindowSidebar
					className={styles.icon}
					onClick={() => dispatch(toggleLeftSidebar())}
				/>
				<Link to='/'>
					<LogoSVG />
				</Link>
			</aside>
			<div className={styles.body}></div>
			<aside className={styles.rightSidebar}>
				<button
					className={styles.themeToggle}
					onClick={() => dispatch(toggleTheme())}
					aria-label={`Switch to ${currentTheme === 'light' ? 'dark' : 'light'} theme`}
				>
					{currentTheme === 'light' ? (
						<FiSun className={styles.icon} />
					) : (
						<FiMoon className={styles.icon} />
					)}
				</button>

				<BsWindowSidebar
					className={styles.icon}
					onClick={() => dispatch(toggleRightSidebar())}
				/>
				<Link to='/login' className={styles.login}>
					<LuUser className={styles.icon} />
					<p>Войти</p>
				</Link>
			</aside>
		</header>
	)
}

export default Header
