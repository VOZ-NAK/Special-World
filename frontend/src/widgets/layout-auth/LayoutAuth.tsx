import { FC, PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

import LogoSVG from '@/shared/assets/icons/LogoSVG'

import styles from './layout-auth.module.scss'

const LayoutAuth: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={styles.layoutAuth}>
			<Link to='/'>
				<LogoSVG width={200} />
			</Link>
			<div className={styles.body}>{children}</div>
		</div>
	)
}
export default LayoutAuth
