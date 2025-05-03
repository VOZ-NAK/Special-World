import { Link } from 'react-router-dom'

import styles from './forgot-password.module.scss'
import { Button, Input, Typography } from '@/shared'
import { LayoutAuth } from '@/widgets'

const ForgotPassword = () => {
	return (
		<LayoutAuth>
			<Typography variant='title-small'>
				Введите электронную почту для сброса пароля
			</Typography>
			<form className={styles.form}>
				<Input type='email' placeholder='Введите email' />
				<Button>
					<Link to='/reset-password'>Отправить</Link>
				</Button>
			</form>
			<p className={styles.footer}>
				Уже есть аккаунт? <Link to='/login'>Войти</Link>
			</p>
		</LayoutAuth>
	)
}
export default ForgotPassword
