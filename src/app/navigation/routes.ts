import {
	Documentation,
	ForgotPassword,
	Home,
	Login,
	NotFound,
	Register
} from '@/pages'

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
		path: '/login',
		element: Login,
		isAuth: false
	},
	{
		path: '/register',
		element: Register,
		isAuth: false
	},
	{
		path: '/forgot-password',
		element: ForgotPassword,
		isAuth: false
	},
	{
		path: '/not-found',
		element: NotFound,
		isAuth: false
	}
]
