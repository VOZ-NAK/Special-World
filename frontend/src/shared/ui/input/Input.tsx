import { ComponentProps, FC } from 'react'

import styles from './input.module.scss'

interface IInput extends ComponentProps<'input'> {
	placeholder?: string
}

const Input: FC<IInput> = ({ ...props }) => {
	return <input className={styles.input} {...props} />
}
export default Input
