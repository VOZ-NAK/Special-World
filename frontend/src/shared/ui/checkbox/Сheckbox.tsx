import cn from 'classnames'
import { FC } from 'react'

import styles from './checkbox.module.scss'

interface CheckboxProps {
	id: string
	checked: boolean
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	label?: string
	className?: string
}

const Checkbox: FC<CheckboxProps> = ({
	id,
	checked,
	onChange,
	label = '',
	className
}) => {
	return (
		<div className={cn(styles.checkbox, className)}>
			<input id={id} type='checkbox' checked={checked} onChange={onChange} />
			<label htmlFor={id}>
				<svg viewBox='0,0,50,50'>
					<path d='M5 30 L 20 45 L 45 5' />
				</svg>
			</label>
			{label && <label htmlFor={id}>{label}</label>}
		</div>
	)
}

export default Checkbox
