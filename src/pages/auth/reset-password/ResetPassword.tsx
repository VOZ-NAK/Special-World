import styles from './reset-password.module.scss'
import { Button, InputPassword, Typography } from '@/shared'
import { LayoutAuth } from '@/widgets'

const ResetPassword = () => {
	return (
		<LayoutAuth>
			<Typography variant='title-small'>Придумайте новый пароль</Typography>
			<form className={styles.form}>
				<InputPassword placeholder='Новый пароль' />
				<InputPassword placeholder='Повторите новый пароль' />

				<Button>Сохранить новый пароль</Button>
			</form>
		</LayoutAuth>
	)
}
export default ResetPassword
