import { useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './register.module.scss'
import { Button, Checkbox, Input, InputPassword, Typography } from '@/shared'
import { LayoutAuth } from '@/widgets'

const Register = () => {
	const [agreeToTerms, setAgreeToTerms] = useState(false)
	const [rememberMe, setRememberMe] = useState(false)

	const handleAgreeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setAgreeToTerms(e.target.checked)
	}

	const handleRememberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setRememberMe(e.target.checked)
	}

	return (
		<LayoutAuth>
			<Typography variant='title-small'>Создать аккаунт</Typography>
			<form className={styles.form}>
				<Input type='email' placeholder='Введите email' />
				<Input type='text' placeholder='Введите имя' />
				<InputPassword />
				<InputPassword placeholder='Подтвердите пароль' />
				<div className={styles.formOptions}>
					<Checkbox
						id='agreeToTerms'
						checked={agreeToTerms}
						onChange={handleAgreeChange}
						label='Я согласен с условиями использования'
					/>
					<Checkbox
						id='rememberMe'
						checked={rememberMe}
						onChange={handleRememberChange}
						label='Запомнить меня'
					/>
				</div>
				<Button>Зарегистрироваться</Button>
			</form>
			<p className={styles.footer}>
				Уже есть аккаунт? <Link to='/login'>Войти</Link>
			</p>
		</LayoutAuth>
	)
}

export default Register
