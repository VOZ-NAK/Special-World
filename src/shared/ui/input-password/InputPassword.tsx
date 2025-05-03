import { FC, InputHTMLAttributes } from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi'

import { useToggle } from '@/shared/lib/hooks'

import styles from './input-password.module.scss'

interface IInputPassword extends InputHTMLAttributes<HTMLInputElement> {
	placeholder?: string
}

const InputPassword: FC<IInputPassword> = ({
	placeholder = 'Введите пароль',
	...props
}) => {
	const [isVisible, toggleVisibility] = useToggle()

	return (
		<div className={styles.wrapper}>
			<input
				type={isVisible ? 'text' : 'password'}
				className={styles.input}
				placeholder={placeholder}
				{...props}
			/>
			<button
				type='button'
				className={styles.button}
				onClick={toggleVisibility}
				tabIndex={-1}
			>
				{isVisible ? <FiEye /> : <FiEyeOff />}
			</button>
		</div>
	)
}

export default InputPassword
