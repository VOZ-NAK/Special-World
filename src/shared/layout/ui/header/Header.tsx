import { FC } from 'react'
import { BsWindowSidebar } from 'react-icons/bs'

import styles from './header.module.scss'

interface IHeader {
	onToggleLeftSidebar: () => void
	onToggleRightSidebar: () => void
}

const Header: FC<IHeader> = ({ onToggleLeftSidebar, onToggleRightSidebar }) => {
	return (
		<header className={styles.header}>
			<aside className={styles.leftSidebar}>
				<BsWindowSidebar
					className={styles.icon}
					onClick={onToggleLeftSidebar}
				/>
			</aside>
			<div className={styles.body}></div>
			<aside className={styles.rightSidebar}>
				<BsWindowSidebar
					className={styles.icon}
					onClick={onToggleRightSidebar}
				/>
			</aside>
		</header>
	)
}
export default Header
