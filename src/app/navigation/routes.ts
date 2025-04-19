import { Home, NotFound } from '@/pages'
import Documentation from '@/pages/documentation/Documentation'

export const routes = [
	{
		path: '/',
		element: Home,
		isAuth: false
	},
	{
		path: '/documentation',
		element: Documentation,
		isAuth: false
	},
	{
		path: '/not-found',
		element: NotFound,
		isAuth: false
	}
]
