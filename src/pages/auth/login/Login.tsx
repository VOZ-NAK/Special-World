import { FC, useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './login.module.scss'
import { Button, Checkbox, Input, InputPassword, Typography } from '@/shared'
import { LayoutAuth } from '@/widgets'

const Login: FC = () => {
	const [rememberMe, setRememberMe] = useState(false)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setRememberMe(e.target.checked)
	}

	return (
		<LayoutAuth>
			<Typography variant='title-small'>Вход в личный кабинет</Typography>
			<form className={styles.form}>
				<Input type='email' placeholder='Введите email' />
				<InputPassword />
				<div className={styles.formOptions}>
					<Checkbox
						id='rememberMe'
						checked={rememberMe}
						onChange={handleChange}
						label='Запомнить меня'
					/>
					<Link to='/forgot-password'>Забыли пароль?</Link>
				</div>
				<Button>Войти</Button>
			</form>
			<p className={styles.footer}>
				Нет аккаунта? <Link to='/register'>Зарегистрироваться</Link>
			</p>
		</LayoutAuth>
	)
}
export default Login
