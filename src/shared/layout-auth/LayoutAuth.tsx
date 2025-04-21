import { FC, PropsWithChildren } from 'react'

import styles from './layout-auth.module.scss'

const LayoutAuth: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={styles.layoutAuth}>
			<div className={styles.body}>{children}</div>
		</div>
	)
}
export default LayoutAuth
