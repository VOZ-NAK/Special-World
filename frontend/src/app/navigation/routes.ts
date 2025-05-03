import {
	Documentation,
	ForgotPassword,
	Home,
	Login,
	NotFound,
	Register,
	ResetPassword,
	StudyMaterials
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
		path: '/study-materials',
		element: StudyMaterials,
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
		path: '/reset-password',
		element: ResetPassword,
		isAuth: false
	},
	{
		path: '/not-found',
		element: NotFound,
		isAuth: false
	}
]
