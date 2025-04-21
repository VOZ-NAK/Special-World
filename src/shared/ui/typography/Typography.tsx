import cn from 'classnames'
import { ComponentProps } from 'react'
import { FC, PropsWithChildren } from 'react'

type TVariant =
	| 'title-small'
	| 'title-medium'
	| 'title-large'
	| 'text'
	| 'text-small'
	| 'text-medium'
	| 'text-large'

interface ITypography extends ComponentProps<'p'> {
	variant: TVariant
}

const Typography: FC<PropsWithChildren<ITypography>> = ({
	variant,
	children,
	...props
}) => {
	return (
		<p {...props} className={cn(variant)}>
			{children}
		</p>
	)
}

export default Typography
